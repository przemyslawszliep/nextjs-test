import Link from "next/link";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { ProductImageCover } from "@/ui/atoms/ProductImageCover";
import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductsListItemFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li className="box-shadow rounded-lg bg-white p-4">
			<Link prefetch={true} href={`/product/${product.id}`}>
				<article className="flex flex-col items-center justify-center">
					{product.images[0] && (
						<ProductImageCover
							src={product.images[0].url}
							alt={product.name}
							classes={"h-64 w-full"}
						/>
					)}
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
