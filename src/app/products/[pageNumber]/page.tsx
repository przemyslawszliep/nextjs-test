import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";

type ProductsPageProps = {
	params: {
		pageNumber: string[];
	};
};

export async function generateStaticParams() {
	const products = await getProductsList(40, 0);
	const totalPages = Math.ceil(products.data.length / 8);
	const paths = Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => ({
		params: { page: [String(page)] },
	}));
	return paths;
}

export const metadata: Metadata = {
	title: "Products",
	description: "List of all products",
	openGraph: {
		title: "Products",
		description: "List of all products",
	},
};

export default async function ProductsPage({ params }: ProductsPageProps) {
	const offset = params.pageNumber ? Number(params.pageNumber[0]) * 8 - 8 : 0;
	const products = await getProductsList(8, offset);
	const paramsPageLength = params?.pageNumber?.length;

	if (paramsPageLength >= 2) {
		return notFound();
	}

	return (
		<section>
			<ProductList products={products.data || []} />
			<Pagination
 				fullNumberOfProducts={100}
 				productsPerPage={20}
 				currentPage={Number(params.pageNumber)}
			/>
		</section>
	);
}


