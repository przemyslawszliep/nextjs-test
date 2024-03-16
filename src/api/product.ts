import { ProductGetItemByIdDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getProductById = async (id: string) => {
	const response = await executeGraphQL(ProductGetItemByIdDocument, { id });

	if (!response) {
		throw new Error("Failed to fetch product");
	}

	return response;
};