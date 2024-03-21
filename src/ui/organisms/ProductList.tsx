import { type ProductsListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
	products: ProductsListItemFragment[];
};

export const ProductList = ({
	products,
}: ProductListProps): JSX.Element => (
	<ul
		className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		data-testid="products-list"
	>
		{products.map((product) => (
			<ProductListItem key={product.id} product={product} />
		))}
	</ul>
);
