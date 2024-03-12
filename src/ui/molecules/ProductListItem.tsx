import Link from "next/link";
import { type ProductItemType } from "@/ui/types";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { ProductImageCover } from "@/ui/atoms/ProductImageCover";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li className="box-shadow rounded-lg bg-white p-4">
			<Link prefetch={true} href={`/product/${product.id}`}>
				<article className="flex flex-col items-center justify-center">
					<ProductImageCover
						imageSrc={product.coverImage.imageSrc}
						altText={product.coverImage.altText}
						classes={"h-64 w-full"}
					/>
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
