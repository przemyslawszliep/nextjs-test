import { type Metadata } from "next";
import { Suspense } from "react";
import { SingleProductDescription } from "@/ui/molecules/SingleProductDescription";
import { TitleSection } from "@/ui/atoms/TitleSection";
import { ProductImageCover } from "@/ui/atoms/ProductImageCover";
import { Loader } from "@/ui/atoms/Loader";
import { getProductById } from "@/api/product";
import { getRelatedProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Reviews } from "@/ui/organisms/Reviews";
import { getProductReviewsById } from "@/api/reviews";

type Params = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({
	params,
}: Params): Promise<Metadata> => {
	const data = await getProductById(params.productId);
	if (!data.product) return { title: "Product" };

	return {
		title: data.product.name,
		description: data.product.description,
		openGraph: {
			title: data.product.name,
			description: data.product.description,
			images: [
				{
					url: data.product.images[0]?.url || "",
					alt: data.product.name,
				},
			],
		},
	};
};

export default async function ProductPage({ params }: Params) {
	const data = await getProductById(params.productId);

	if (!data.product) return <p>Product not found.</p>;

	const relatedProducts = await getRelatedProducts(data.product);
	const productReviews = await getProductReviewsById(data.product.id);

	return (
		<section className="md:mx-24">
			<article className="flex w-full items-start justify-between gap-4">
				<ProductImageCover
					src={data.product.images[0]?.url || ""}
					alt={data.product.name}
					classes={"border-2 border-gray-200 rounded-lg basis-7/12"}
				/>
				<div className="flex basis-5/12 flex-col gap-2">
					<TitleSection titleText={data.product.name} />
					<SingleProductDescription product={data.product} />
				</div>
			</article>
			<Suspense key="relatedProducts" fallback={<Loader />}>
				{relatedProducts && (
					<div
						className="my-8 text-center"
						data-testid="related-products"
					>
						<h2 className="mb-8 text-3xl font-semibold">
							Related Products
						</h2>
						<ProductList products={relatedProducts} />
					</div>
				)}
			</Suspense>
			{productReviews.product?.reviews && (
				<Reviews
					product={data.product}
					reviews={productReviews.product.reviews}
				/>
			)}
		</section>
	);
}
