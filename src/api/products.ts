import { loadEnvConfig } from "@next/env";
import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

loadEnvConfig(process.cwd());

export const getProductsList = async (take: number, skip: number) => {
	const graphqlResponse = await executeGraphQL(
		ProductsGetListDocument,
		{
			take,
			skip,
		},
	);

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};
