"use client";

import React, { Suspense, useOptimistic } from "react";
import {
	type ReviewProductFragment,
	type ProductsListItemFragment,
} from "@/gql/graphql";
import { Ratings } from "@/ui/atoms/Ratings";
import { ReviewList } from "@/ui/organisms/ReviewList";
import { Loader } from "@/ui/atoms/Loader";
import { handleAddReviewAction } from "@/actions/product";
import { ReviewForm } from "@/ui/molecules/ReviewForm";

type ReviewProps = {
	product: ProductsListItemFragment;
	reviews: ReviewProductFragment[];
};
export const Reviews = ({ product, reviews }: ReviewProps) => {
	const [optimisticReviews, setOptimisticReviews] =
		useOptimistic(reviews);

	const sortedProductReviews = reviews.sort((a, b) => {
		return (
			new Date(b.createdAt as string).getTime() -
			new Date(a.createdAt as string).getTime()
		);
	});

	const clearForm = (formData: FormData) => {
		formData.set("headline", "");
		formData.set("content", "");
		formData.set("name", "");
		formData.set("email", "");
		formData.set("rating", "");
	};

	return (
		<div className="max-w-2xl lg:grid lg:max-w-full lg:grid-cols-12 lg:gap-x-8 lg:py-16">
			<div className="lg:col-span-4">
				<p className="my-2 text-2xl font-semibold text-blue-500">
					Reviews
				</p>
				<div className="mt-3 flex items-center">
					<Ratings rating={product.rating || 0} />
					<p className="ml-2 text-xs text-gray-900">
						from {reviews.length} reviews
					</p>
				</div>
				<div className="mt-10">
					<h3 className="text-lg font-medium text-gray-900">
						Add your opinion
					</h3>
					<ReviewForm
						formAction={async (formData) => {
							await handleAddReviewAction(formData, product.id);
							setOptimisticReviews((prev) => [
								...prev,
								{
									id: Math.random().toString(),
									author: String(formData.get("name")),
									title: String(formData.get("headline")),
									email: String(formData.get("email")),
									rating: Number(formData.get("rating")),
									description: String(formData.get("content")),
									createdAt: new Date().toISOString(),
								},
							]);
							clearForm(formData);
						}}
					/>
				</div>
			</div>
			<Suspense key="reviews" fallback={<Loader />}>
				{!sortedProductReviews ||
				sortedProductReviews.length === 0 ? (
					<p>
						No Reviews. Please add some if you bought that product
					</p>
				) : (
					<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
						<div className="flow-root">
							<ReviewList reviews={optimisticReviews} />
						</div>
					</div>
				)}
			</Suspense>
		</div>
	);
};
