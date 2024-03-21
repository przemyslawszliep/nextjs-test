import { ShoppingCart } from "lucide-react";
import { Suspense } from "react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Badge } from "@/ui/atoms/Badge";
import { getCart } from "@/api/cart";
import { Loader } from "@/ui/atoms/Loader";

export const CounterCart = async () => {
	const cart = await getCart();
	const quantity =
		cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<ActiveLink className="relative" activeClassName="" href="/cart">
			<ShoppingCart size={24} color="black" />
			<Suspense key="headerQuantity" fallback={<Loader />}>
				<div className="absolute -right-4 -top-2">
					<Badge value={quantity} />
				</div>
			</Suspense>
		</ActiveLink>
	);
};
