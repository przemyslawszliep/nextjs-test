type ProductImageCoverProps = {
	imageSrc: string;
	altText: string;
	classes: string;
};

export const ProductImageCover = ({
	imageSrc,
	altText,
	classes
}: ProductImageCoverProps) => {
	return (
		<div className={classes}>
			<img
				src={imageSrc}
				alt={altText}
                className="object-cover h-full w-full rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
			/>
		</div>
	);
};
