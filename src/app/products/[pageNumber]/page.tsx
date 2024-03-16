import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";

type ProductsPageProps = {
	params: {
		page: string[];
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
	const offset = params.page ? Number(params.page[0]) * 8 - 8 : 0;
	const products = await getProductsList(8, offset);
	const paramsPageLength = params?.page?.length;

	if (paramsPageLength >= 2) {
		return notFound();
	}

	return (
		<section>
			<ProductList products={products.data || []} />
			<Pagination
				url="/products"
				pageNumber={params.page ? Number(params.page[0]) : 1}
				totalPages={Math.ceil(products.meta.total / 8)}
			/>
		</section>
	);
}

// import type { Metadata } from "next";
// import React, { Suspense } from "react";
// import { TitleSection } from "@/ui/atoms/TitleSection";
// import { ProductList } from "@/ui/organisms/ProductList";
// import { getProductsList } from "@/api/products";
// import { Pagination } from "@/ui/molecules/Pagination";
// import { countPagesAndConvertToArray } from "@/utils";
// import { Loader } from "@/ui/atoms/Loader";

// export const metadata: Metadata = {
// 	title: "Products",
// 	description: "Products page",
// };

// type ProductsPageProps = {
// 	params: {
// 		pageNumber: string;
// 	};
// };

// export function generateStaticParams() {
// 	const pages = countPagesAndConvertToArray(100, 20);

// 	return pages?.map((el) => ({ pageNumber: el.toString() })) ?? [];
// }

// const Page = async ({ params }: ProductsPageProps) => {
// 	const products = await getProductsList(
// 		20,
// 		Number(params.pageNumber),
// 	);

// 	return (
// 		<>
// 			<TitleSection titleText="Najlepsze produkty" />
// 			<Suspense fallback={<Loader />}>
// 				<ProductList products={products.data} />
// 			</Suspense>
// 			<Pagination
// 				fullNumberOfProducts={100}
// 				productsPerPage={20}
// 				currentPage={Number(params.pageNumber)}
// 			/>
// 		</>
// 	);
// };

// export default Page;
