import Image from "next/image";
import { ImageResponse } from "next/og";
import { getProductById } from "@/api/product";

export const runtime = "edge";
export const contentType = "image/png";

export const size = {
	width: 1200,
	height: 630,
};

export default async function og({
	params,
}: {
	params: { id: string };
}) {
	const data = await getProductById(params.id);

	if (!data.product)
		return new ImageResponse(<div>Product not found.</div>);

	return new ImageResponse(
		(
			<div tw="relative w-full overflow-hidden rounded-md flex">
				<div tw="flex items-center justify-center">
					<Image
						priority
						src={data.product.images[0]?.url || "/placeholder.png"}
						tw="h-full w-full object-cover object-center"
						height={300}
						width={300}
						alt={data.product.name}
					/>
				</div>
			</div>
		),
	);
}
