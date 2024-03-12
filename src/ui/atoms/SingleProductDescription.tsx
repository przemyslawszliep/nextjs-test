import { type ProductItemType } from "../types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType
};

export const SingleProductDescription = ({
	product: {category, price, description },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex w-full flex-col items-start gap-1 text-black">
			<p>Category: <strong>{category}</strong></p>
			<p className="ml-auto text-right text-xl font-semibold">
				{formatMoney(price / 100)}
			</p>
			<p>{description}</p>
		</div>
	);
};
