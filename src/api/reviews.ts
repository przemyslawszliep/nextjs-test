"use server";

import {
	ReviewAddDocument,
	ReviewProductsDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/graphql";

export const getProductReviewsById = async (id: string) => {
	const response = await executeGraphQL({
		query: ReviewProductsDocument,
		variables: { productId: id },
	});

	if (!response) {
		throw new Error("Failed to fetch product");
	}

	return response;
};

export const submitProductReview = async (
	author: string,
	description: string,
	email: string,
	productId: string,
	rating: number,
	title: string,
) => {
	const response = await executeGraphQL({
		query: ReviewAddDocument,
		variables: {
			author,
			description,
			email,
			productId,
			rating,
			title,
		},
		next: {
			tags: ["productReview"],
		},
	});

	if (!response) {
		throw new Error("Failed to submit review");
	}

	return response;
};
