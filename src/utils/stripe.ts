import Stripe from "stripe";
import { getCart } from "@/api/cart";

export const initStripe = () => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
	return stripe;
};

export const retrieveCheckoutSession = async (
	stripe: Stripe,
	sessionId: string,
): Promise<Stripe.Response<Stripe.Checkout.Session>> => {
	const session = await stripe.checkout.sessions.retrieve(sessionId);
	return session;
};

export const createCheckoutSession = async (
	stripe: Stripe,
): Promise<Stripe.Response<Stripe.Checkout.Session>> => {
	const cart = await getCart();

	if (!cart) {
		throw new Error("No cart found");
	}

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items.map((item) => ({
			price_data: {
				currency: "pln",
				product_data: {
					name: item.product.name,
					images: item.product.images.map((image) => image.url),
					description: item.product.description,
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url: "/cart/success?sessionId={CHECKOUT_SESSION_ID}",
		cancel_url: "/cart",
	});

	return checkoutSession;
};
