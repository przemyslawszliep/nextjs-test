import Link from "next/link";
import { type CategoriesListItemFragment } from "@/gql/graphql";

type CategoryListItemProps = {
	category: CategoriesListItemFragment;
};

export const CategoryListItem = ({
	category,
}: CategoryListItemProps): JSX.Element => (
	<li>
		<Link href={`/categories/${category.slug}/1`}>
			<article>
				<h3>{category.name}</h3>
			</article>
		</Link>
	</li>
);
