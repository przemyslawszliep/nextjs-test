import { cookies } from "next/headers";
import {
	CartAddDocument,
	CartCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getCart = async () => {
	const cartId = cookies().get("cartId")?.value;
	
	if (cartId) {
		const cart = await executeGraphQL({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: {
				tags: ["cart"],
			},
		});
		if (cart.cart) {
			return cart.cart;
		}
	}
};

export const createCart = (cartId?: string) => {
	return executeGraphQL({
		query: CartCreateDocument,
		variables: {
			id: cartId,
		},
		cache: "no-store",
	});
};

export const getOrCreateCart = async (): Promise<CartFragment> => {
	const existingCart = await getCart();
	if (existingCart) {
		return existingCart;
	}
	const cartId = cookies().get("cartId")?.value;
	const cart = await createCart(cartId);
	if (!cart.cartFindOrCreate) {
		throw new Error("Cart not found or created");
	}

	cookies().set("cartId", cart.cartFindOrCreate.id, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
	});

	return cart.cartFindOrCreate;
};

export const addProductToCart = async (
	cartId: string,
	productId: string,
	quantity: number,
) => {
	await executeGraphQL({
		query: CartAddDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		cache: "no-store",
	});
};
