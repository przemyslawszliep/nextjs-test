import { ProductItemType } from "../types";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType
};

export const ProductDescription = ({
	product: { name, category, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex w-full flex-col items-start gap-1 text-black">
			<h5 className="text-bold text-2xl">{name}</h5>
			<p>{category}</p>
			<p className="ml-auto text-right text-xl font-semibold">
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
