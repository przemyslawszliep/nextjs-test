import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductsListItemFragment;
};

export const SingleProductDescription = ({
	product: { categories, price, description },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex w-full flex-col items-start gap-1 text-black">
			<p>
				Category: <strong>{categories?.[0]?.name}</strong>
			</p>
			<p className="ml-auto text-right text-xl font-semibold">
				{formatMoney(price / 100)}
			</p>
			<p>{description}</p>
		</div>
	);
};
