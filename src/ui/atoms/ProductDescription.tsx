import { ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductsListItemFragment
};

export const ProductDescription = ({
	product: { name, categories, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex w-full flex-col items-start gap-1 text-black">
			<h5 className="text-bold text-2xl">{name}</h5>
			<p>{categories && categories[0]?.name}</p>
			<p className="ml-auto text-right text-xl font-semibold">
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
