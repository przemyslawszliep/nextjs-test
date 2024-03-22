import { loadEnvConfig } from "@next/env";
import {
	type InputMaybe,
	ProductsGetListDocument,
	type ProductsListItemFragment,
	RelatedProductsListDocument,
	ProductGetSearchItemsDocument,
	type SortDirection,
	type ProductSortBy,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

loadEnvConfig(process.cwd());

export const getProductsList = async (
	take: number,
	skip: number,
	order: InputMaybe<SortDirection> | undefined = undefined,
	orderBy: InputMaybe<ProductSortBy> | undefined = undefined,
) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: {
			take,
			skip,
			order,
			orderBy,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};
export const getRelatedProducts = async (
	product: ProductsListItemFragment,
) => {
	if (!product) return;

	const graphqlResponse = await executeGraphQL({
		query: RelatedProductsListDocument,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch related products");
	}

	const relatedProducts = graphqlResponse.products.data.filter(
		(p: ProductsListItemFragment) => {
			return p.categories.some(
				(category) => category.name === product.categories[0]?.name,
			);
		},
	);

	return relatedProducts;
};

export const getSearchProducts = async (search: string) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductGetSearchItemsDocument,
		variables: {
			search,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};
