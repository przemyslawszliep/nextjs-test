import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { Suspense } from "react";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { SortBy } from "@/ui/atoms/SortBy";
import { type ProductSortBy } from "@/gql/graphql";
import { Loader } from "@/ui/atoms/Loader";
import { TitleSection } from "@/ui/atoms/TitleSection";

type ProductsPageProps = {
	params: {
		pageNumber: string[];
	};
	searchParams: {
		sort: string;
	};
};

export async function generateStaticParams() {
	const products = await getProductsList(40, 0);
	const totalPages = Math.ceil(products.data.length / 8);
	const paths = Array.from(
		{ length: totalPages },
		(_, i) => i + 1,
	).map((page) => ({
		params: { pageNumber: [String(page)] },
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

export default async function ProductsPage({
	params,
	searchParams,
}: ProductsPageProps) {
	const offset = params.pageNumber
		? Number(params.pageNumber[0]) * 8 - 8
		: 0;
	const order = searchParams.sort?.includes("-") ? "DESC" : "ASC";
	const orderBy = searchParams.sort
		?.replace("-", "")
		.toUpperCase() as ProductSortBy;
	const products = await getProductsList(8, offset, order, orderBy);
	const paramsPageLength = params?.pageNumber?.length;

	if (paramsPageLength >= 2) {
		return notFound();
	}

	return (
		<section>
			<div className="flex items-center justify-between">
				<TitleSection titleText="All products" />
				<SortBy />
			</div>
			<Suspense key="all products" fallback={<Loader />}>
				<ProductList products={products.data || []} />
			</Suspense>
			<Pagination
				url="/products"
				pageNumber={
					params.pageNumber ? Number(params.pageNumber[0]) : 1
				}
				totalPages={Math.ceil(products.meta.total / 8)}
			/>
		</section>
	);
}
