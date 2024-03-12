import type { Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductImageCover } from "@/ui/atoms/ProductImageCover";
import { SingleProductDescription } from "@/ui/atoms/SingleProductDescription";
import { TitleSection } from "@/ui/atoms/TitleSection";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `Product: ${product?.name ?? ''}`,
		description: product ? product.description : '',
	};
};

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return (
		<article className="flex w-full items-start justify-between gap-4">
			<ProductImageCover
				imageSrc={product.coverImage.imageSrc}
				altText={product.coverImage.altText}
				classes={"border-2 border-gray-200 rounded-lg basis-3/4"}
			/>
			<div className="flex flex-col gap-2">
				<TitleSection titleText={product.name} />
				<SingleProductDescription product={product} />
			</div>
		</article>
	);
}
