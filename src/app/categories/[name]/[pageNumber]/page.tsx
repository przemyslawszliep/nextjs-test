import { type Route } from "next";
import { getCategoryProductsBySlug } from "@/api/categories";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { TitleSection } from "@/ui/atoms/TitleSection";

type CategoriesNamePageProps = {
	params: {
		name: string;
		pageNumber: string;
	};
};

export const generateMetadata = async ({
	params,
}: CategoriesNamePageProps) => {
	const category = await getCategoryProductsBySlug(params.name);
	if (!category) return { title: "Category" };
	return {
		title: category.name,
		description: category.description,
		openGraph: {
			title: category.name,
			description: category.description,
		},
	};
};

export default async function CategoriesNamePage({
	params,
}: CategoriesNamePageProps) {
	const category = await getCategoryProductsBySlug(params.name);

	if (!category || category.products.length === 0)
		return <p>No products found.</p>;

	const take = 3;
	const pageNumber = params.pageNumber
		? Number(params.pageNumber[0])
		: 1;
	const totalPages = Math.ceil(category.products.length / take);

	const slicedProducts = category.products.slice(
		(pageNumber - 1) * take,
		pageNumber * take,
	);

	return (
		<section>
			<div className="mb-16 text-center">
				<TitleSection titleText={category.name} />
				<p className="italic">{category.description}</p>
			</div>
			<ProductList products={slicedProducts} />
			<Pagination
				pageNumber={pageNumber}
				totalPages={totalPages}
				url={`/categories/${params.name}` as Route}
			/>
		</section>
	);
}