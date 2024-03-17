import { Suspense } from "react";
import { getCollectionBySlug } from "@/api/collections";
import { Loader } from "@/ui/atoms/Loader";
import { ProductList } from "@/ui/organisms/ProductList";
import { TitleSection } from "@/ui/atoms/TitleSection";

type CollectionsPageProps = {
	params: {
		slug: string;
	};
};

export const generateMetadata = async ({
	params,
}: CollectionsPageProps) => {
	const collection = await getCollectionBySlug(params.slug);
	if (!collection) return { title: "Collection" };
	return {
		title: collection.name,
		description: collection.description,
		openGraph: {
			title: collection.name,
		},
	};
};

export default async function CollectionPage({
	params,
}: CollectionsPageProps) {
	const collection = await getCollectionBySlug(params.slug);
	if (!collection) return <p>No collections found.</p>;

	return (
		<section>
			<div className="mb-12 text-center">
				<TitleSection titleText={collection.name} />
				<p className="italic">{collection.description}</p>
			</div>
			<Suspense key="collectionProducts" fallback={<Loader />}>
				<ProductList products={collection.products} />
			</Suspense>
		</section>
	);
}
