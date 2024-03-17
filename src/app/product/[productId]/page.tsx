import { type Metadata } from "next";
import { Suspense } from "react";
import { SingleProductDescription } from "@/ui/atoms/SingleProductDescription";
import { TitleSection } from "@/ui/atoms/TitleSection";
import { ProductImageCover } from "@/ui/atoms/ProductImageCover";
import { Loader } from "@/ui/atoms/Loader";
import { getProductById } from "@/api/product";

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

	return (
		<section className="md:mx-24">
			<Suspense key="product" fallback={<Loader />}>
				<article className="flex w-full items-start justify-between gap-4">
					<ProductImageCover
						src={data.product.images[0]?.url || ""}
						alt={data.product.name}
						classes={"border-2 border-gray-200 rounded-lg basis-3/4"}
					/>
					<div className="flex flex-col gap-2">
						<TitleSection titleText={data.product.name} />
						<SingleProductDescription product={data.product} />
					</div>
				</article>
			</Suspense>
		</section>
	);
}
