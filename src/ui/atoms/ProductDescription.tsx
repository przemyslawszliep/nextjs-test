import { Ratings } from "./Ratings";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductsListItemFragment;
};

export const ProductDescription = ({
	product,
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex w-full flex-col items-start gap-1 text-black">
			<Ratings rating={product.rating || 0} />
			<h5 className="text-bold text-2xl">{product.name}</h5>
			<p>{product.categories && product.categories[0]?.name}</p>
			<p
				data-testid="product-price"
				className="ml-auto text-right text-xl font-semibold"
			>
				{formatMoney(product.price / 100)}
			</p>
		</div>
	);
};
