export type ProductItemType = {
    id: string;
    name: string;
    category: string;
    price: number;
    coverImage: {
        imageSrc: string;
        altText: string;
    }
};