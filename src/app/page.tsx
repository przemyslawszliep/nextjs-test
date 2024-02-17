
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products = ProductItemType[] = [
	{
		id: "1",
		category: "electronics",
		name: "iPhone 12",
		price: 799,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
			alt: "iPhone 12"
		}
	},
	{
		id: "2",
		category: "electronics",
		name: "iPhone 12 Pro",
		price: 999,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
			alt: "iPhone 12 Pro"
		}
	},
	{
		id: "3",
		category: "electronics",
		name: "iPhone 12 Pro Max",
		price: 1099,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
			alt: "iPhone 12 Pro Max"
		}
	}
]

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center">
			<ProductList products={products}/>
x		</section>
	);
}
