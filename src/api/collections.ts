import { CollectionGetItemDocument, CollectionsGetListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphQL(CollectionsGetListDocument);
	if (!graphqlResponse) {
		throw new Error("Failed to fetch collections");
	}
	return graphqlResponse.collections;
};

export const getCollectionBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQL(CollectionGetItemDocument, { slug });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch collection");
	}
	return graphqlResponse.collection;
};