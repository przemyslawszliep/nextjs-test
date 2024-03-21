"use server";

import { revalidateTag } from "next/cache";
import { submitProductReview } from "@/api/reviews";

export const handleAddReviewAction = async (
	formData: FormData,
	productId: string,
) => {
	const data = {
		author: formData.get("name") as string,
		description: formData.get("content") as string,
		productId,
		email: formData.get("email") as string,
		rating: Number(formData.get("rating")),
		title: formData.get("headline") as string,
	};
	await submitProductReview(
		data.author,
		data.description,
		data.email,
		data.productId,
		data.rating,
		data.title,
	);
	revalidateTag("productReview");
};
