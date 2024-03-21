import { revalidateTag } from "next/cache";
import { AddToCart } from "../atoms/AddToCart";
import { changeQuantity } from "@/actions/cart";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductsListItemFragment;
};

export const SingleProductDescription = ({
	product,
}: ProductListItemDescriptionProps) => {
	async function addProductToCartAction() {
		"use server";
		const cart = await getOrCreateCart();
		const productInCart = cart?.items.find(
			(item) => item.product.id === product.id,
		);
		if (cart) {
			productInCart
				? await changeQuantity(
						cart.id,
						product.id,
						productInCart.quantity + 1,
					)
				: await addProductToCart(cart.id, product.id, 1);
			revalidateTag("cart");
		}
	}

	return (
		<div className="basis1/4 flex w-full flex-col items-start gap-1 text-black">
			<p>
				Category:{" "}
				<strong>{product.categories?.[0]?.name ?? ""}</strong>
			</p>
			<p className="ml-auto text-right text-xl font-semibold">
				{formatMoney(product.price / 100)}
			</p>
			<p>{product.description}</p>
			<form
				className="mt-8 flex justify-end gap-4"
				action={addProductToCartAction}
			>
				<input type="hidden" name="productId" value={product.id} />
				<AddToCart />
			</form>
		</div>
	);
};
