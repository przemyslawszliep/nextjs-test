import { type CategoriesListItemFragment } from "@/gql/graphql";
import { CategoryListItem } from "@/ui/molecules/CategoryListItem";

type ProductListProps = {
	categories: CategoriesListItemFragment[];
};

export const CategoryList = ({ categories }: ProductListProps): JSX.Element => (
	<ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{categories.map((category) => (
			<CategoryListItem key={category.id} category={category} />
		))}
	</ul>
);