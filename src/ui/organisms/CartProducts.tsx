import { type CartFragment } from "@/gql/graphql";
import { CartProduct } from "@/ui/molecules/CartProduct";

type CartProductsProps = {
	cart: CartFragment;
	isDescription?: boolean;
};

export const CartProducts = ({
	cart,
	isDescription,
}: CartProductsProps): JSX.Element => (
	<ul className="flex flex-col gap-4">
		{cart?.items.map((product) => (
			<CartProduct
				cartId={cart.id}
				quantity={product.quantity}
				isDescription={isDescription}
				product={product.product}
				key={product.product.id}
			/>
		))}
	</ul>
);
