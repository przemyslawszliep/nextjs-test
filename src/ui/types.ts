export type ProductItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	description: string;
	coverImage: {
		imageSrc: string;
		altText: string;
	};
};
