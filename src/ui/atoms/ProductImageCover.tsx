type ProductImageCoverProps = {
	imageSrc: string;
	altText: string;
};

export const ProductImageCover = ({
	imageSrc,
	altText,
}: ProductImageCoverProps) => {
	return (
		<div className="relative h-48 w-full mb-4">
			<img
				src={imageSrc}
				alt={altText}
                className="object-cover h-full w-full rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
			/>
		</div>
	);
};
