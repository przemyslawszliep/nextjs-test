import NextImage from "next/image";

type ProductImageCoverProps = {
	src: string;
	alt: string;
	classes: string;
};

export const ProductImageCover = ({
	src,
	alt,
	classes,
}: ProductImageCoverProps) => {
	return (
		<div className={classes}>
			<NextImage
				src={src}
				alt={alt}
				width={500}
				height={500}
				className="h-full w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105"
			/>
		</div>
	);
};
