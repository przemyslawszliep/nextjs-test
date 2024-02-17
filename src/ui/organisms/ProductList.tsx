import { type ProductItemType } from "../types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({
	products,
}: {
	products: ProductItemType[];
}) => {
	return (
		<ul
			className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			data-testid="products-list
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
