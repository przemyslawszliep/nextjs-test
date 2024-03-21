import {
	CategoriesGetListDocument,
	CategoryGetItemDocument,
	type CategoriesGetNamesQuery,
	CategoriesGetNamesDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getListOfCategories = async () => {
	const graphqlResponse = await executeGraphQL({
		query: CategoriesGetListDocument,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch categories");
	}

	return graphqlResponse.categories;
};

export const getCategoryProductsBySlug = async (
	categorySlug: string,
) => {
	const graphqlResponse = await executeGraphQL({
		query: CategoryGetItemDocument,
		variables: { slug: categorySlug },
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch category");
	}

	return graphqlResponse.category;
};

export const getProductsCategoriesNames = async (): Promise<
	CategoriesGetNamesQuery["categories"]
> => {
	const graphqlResponse = await executeGraphQL({
		query: CategoriesGetNamesDocument,
	});

	return graphqlResponse.categories;
};
