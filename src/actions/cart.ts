"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import {
	CartQuantityDocument,
	CartRemoveDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";
import { createCheckoutSession, initStripe } from "@/utils/stripe";

export const changeQuantity = async (
	cartId: string,
	productId: string,
	quantity: number,
) => {
	await executeGraphQL({
		query: CartQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		cache: "no-store",
	});
	revalidateTag("cart");
};

export const removeItem = async (
	cartId: string,
	productId: string,
) => {
	await executeGraphQL({
		query: CartRemoveDocument,
		variables: {
			cartId,
			productId,
		},
		cache: "no-store",
	});
	revalidateTag("cart");
};

export async function handlePaymentAction() {
	"use server";
	const stripe = initStripe();
	const checkoutSession = await createCheckoutSession(stripe);

	if (!checkoutSession.url) {
		throw new Error(
			"Something went wrong with the payment session creation.",
		);
	}

	redirect(checkoutSession.url);
}
