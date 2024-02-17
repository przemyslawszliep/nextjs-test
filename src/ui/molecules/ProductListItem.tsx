import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { ProductImageCover } from "@/ui/atoms/ProductImageCover";
import { ProductItemType } from "../types";

type ProductListItemProps = {
    product: ProductItemType
};

export const ProductListItem = ({product}: ProductListItemProps) => {
    return (
        <div className="box-shadow flex flex-col items-center justify-center rounded-lg bg-white p-4">
            <ProductImageCover
                imageSrc={product.coverImage.imageSrc}
                altText={product.coverImage.altText}
            />
            <ProductDescription product={product} />
        </div>
    );
}