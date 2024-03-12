import type { ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const BASE_URL = "https://naszsklep-api.vercel.app/api/products";

export const getProductsList = async (
	countOfProduct?: number,
	currentPage?: number,
) => {
	const url = new URL(BASE_URL);
	if (countOfProduct) {
		countOfProduct &&
			url.searchParams.set("take", countOfProduct.toString());
	}
	if (currentPage && countOfProduct) {
		const minNumberOfProduct = Number(
			currentPage * countOfProduct - countOfProduct,
		);
		const offset = minNumberOfProduct < 0 ? 0 : minNumberOfProduct;
		currentPage && url.searchParams.set("offset", offset.toString());
	}

	const res = await fetch(url.toString());
	if (!res.ok) {
		return [] as Product[];
	}
	const result = (await res.json()) as ProductResponseItem[];

	return result.map(productResponseItemToProductItemType) ?? [];
};

export const getProductById = async (id: string) => {
	const url = new URL(BASE_URL);
	url.pathname += "/" + encodeURIComponent(`${id}`);
	const res = await fetch(url.toString());
	if (!res.ok) {
		return null;
	}
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		description: product.description,
		coverImage: {
			imageSrc: product.image,
			altText: product.title,
		},
	};
};
