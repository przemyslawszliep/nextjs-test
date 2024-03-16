type ProductImageCoverProps = {
	src: string;
	alt: string;
	classes: string;
};

export const ProductImageCover = ({
	src,
	alt,
	classes
}: ProductImageCoverProps) => {
	return (
		<div className={classes}>
			<img
				src={src}
				alt={alt}
                className="object-cover h-full w-full rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
			/>
		</div>
	);
};
