import type { Metadata } from "next";
import React, { Suspense } from "react";
import { TitleSection } from "@/ui/atoms/TitleSection";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { countPagesAndConvertToArray } from "@/utils";
import { Loader } from "@/ui/atoms/Loader";


export const metadata: Metadata = {
	title: "Products",
	description: "Products page",
};

type ProductsPageProps = {
	params: {
		pageNumber: string;
	};
};

export function generateStaticParams() {
	const pages = countPagesAndConvertToArray(100, 20);

	return pages?.map((el) => ({ pageNumber: el.toString() })) ?? [];
}

const Page = async ({ params }: ProductsPageProps) => {
	const products = await getProductsList(
		20,
		Number(params.pageNumber),
	);

	return (
		<>
			<TitleSection titleText="Najlepsze produkty" />
			<Suspense fallback={<Loader />}>
				<ProductList products={products} />
			</Suspense>
			<Pagination
				fullNumberOfProducts={100}
				productsPerPage={20}
				currentPage={Number(params.pageNumber)}
			/>
		</>
	);
};

export default Page;
