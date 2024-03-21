import {
	CollectionGetItemDocument,
	CollectionGetNamesDocument,
	type CollectionGetNamesQuery,
	CollectionsGetListDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphQL({
		query: CollectionsGetListDocument,
	});
	if (!graphqlResponse) {
		throw new Error("Failed to fetch collections");
	}
	return graphqlResponse.collections;
};

export const getCollectionBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQL({
		query: CollectionGetItemDocument,
		variables: { slug },
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch collection");
	}
	return graphqlResponse.collection;
};

export const getCollectionNames = async (): Promise<
	CollectionGetNamesQuery["collections"]
> => {
	const graphqlResponse = await executeGraphQL({
		query: CollectionGetNamesDocument,
	});

	return graphqlResponse.collections;
};
