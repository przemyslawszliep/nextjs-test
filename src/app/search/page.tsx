import { Suspense } from "react";
import { getSearchProducts } from "@/api/products";
import { Loader } from "@/ui/atoms/Loader";
import { ProductList } from "@/ui/organisms/ProductList";
import { TitleSection } from "@/ui/atoms/TitleSection";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export async function generateMetadata({
	searchParams,
}: SearchPageProps) {
	return {
		title: `Search results for: ${searchParams.query}`,
		description: `Search results for: ${searchParams.query}`,
	};
}

export default async function SearchPage({
	searchParams,
}: SearchPageProps) {
	const products = await getSearchProducts(searchParams.query);

	if (!products) return <p>No products found.</p>;

	return (
		<section>
			<Suspense key="searchPage" fallback={<Loader />}>
				<TitleSection
					titleText={`Search results for: ${searchParams.query}`}
				/>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
