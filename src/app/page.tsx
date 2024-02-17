import { TitleSection } from "@/ui/atoms/TitleSection";
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Koszulka",
		category: "Odzież",
		price: 2012,
		coverImage: {
			imageSrc: "https://picsum.photos/400/300",
			altText: "Koszulka",
		},
	},
	{
		id: "2",
		name: "Spodnie",
		category: "Odzież",
		price: 4000,
		coverImage: {
			imageSrc: "https://picsum.photos/400/300",
			altText: "Spodnie",
		},
	},
	{
		id: "3",
		name: "Buty",
		category: "Obuwie",
		price: 6246,
		coverImage: {
			imageSrc: "https://picsum.photos/400/300",
			altText: "Buty",
		},
	},
	{
		id: "4",
		name: "Koszulka",
		category: "Odzież",
		price: 6023,
		coverImage: {
			imageSrc: "https://picsum.photos/400/300",
			altText: "Koszulka",
		},
	},
];

export default function Home() {
	return (
		<main>
			<section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center">
				<TitleSection titleText="Najlepsze produkty" />
				<ProductList products={products} />
			</section>
		</main>
	);
}
