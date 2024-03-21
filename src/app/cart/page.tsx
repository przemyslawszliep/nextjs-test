import { getCart } from "@/api/cart";
import { CartProducts } from "@/ui/organisms/CartProducts";
import { Payments } from "@/ui/atoms/Payments";
import { formatMoney } from "@/utils";
import { TitleSection } from "@/ui/atoms/TitleSection";

export default async function CartPage() {
	const cart = await getCart();

	if (!cart || !cart.items.length) {
		return <p className="text-xl font-bold">add some products</p>;
	}

	const total = cart.items.reduce(
		(acc, item) => acc + item.quantity * item.product.price,
		0,
	);
	return (
		<section className="flex h-full flex-col items-center justify-between gap-12">
			<TitleSection titleText={"Order " + cart.id}></TitleSection>
			<div className="relative flex flex-col items-start gap-12 lg:flex-row">
				<article className="flex w-full flex-col">
					<CartProducts cart={cart} isDescription />
				</article>
				<aside className="sticky top-4 flex w-2/6 flex-col rounded-md bg-slate-100 p-4 shadow-md">
					<div className="flex items-center justify-between font-semibold">
						<p>Total:</p>
						<span>{formatMoney(total / 100)}</span>
					</div>
					<Payments />
				</aside>
			</div>
		</section>
	);
}
