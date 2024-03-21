import Link from "next/link";
import Image from "next/image";
import { type CartFragment } from "@/gql/graphql";
import { Remove } from "@/ui/atoms/Remove";
import { Ratings } from "@/ui/atoms/Ratings";
import { formatMoney } from "@/utils";
import { Quantity } from "@/ui/atoms/Quantity";

type Props = {
	product: CartFragment["items"][number]["product"];
	isDescription?: boolean;
	cartId: string;
	quantity: number;
};

export const CartProduct = ({
	cartId,
	quantity,
	product,
	isDescription,
}: Props) => (
	<div className="relative w-full rounded-xl bg-slate-100 p-4 shadow-md">
		<div className="flex gap-4">
			<div className="max-h-full max-w-full">
				<Image
					src={product.images[0]?.url || ""}
					alt={product.name}
					width={300}
					height={300}
					className="h-full w-full rounded-xl object-cover shadow-sm"
				/>
			</div>
			<div className="flex w-full flex-col justify-between">
				<div className="flex justify-between">
					<div className="flex flex-col gap-2">
						<Link
							href={`/product/${product.id}`}
							className="text-xl font-semibold hover:text-blue-600"
						>
							{product.name}
						</Link>
						<Ratings rating={product.rating || 0} />
					</div>
					{isDescription && (
						<div className="flex-start">
							<Remove cartId={cartId} productId={product.id} />
						</div>
					)}
				</div>
				{isDescription && (
					<div className="mt-2 flex flex-col text-sm">
						<p>{product.description}</p>
					</div>
				)}
				<div className="mt-2 flex justify-end">
					<p className="text-2xl font-bold text-green-700">
						{formatMoney((product.price / 100) * quantity)}
					</p>
				</div>
				<div className="mt-auto self-end">
					{isDescription ? (
						<Quantity
							quantity={quantity}
							cartId={cartId}
							productId={product.id}
						/>
					) : (
						<p className="text-sm font-bold">Quantity: {quantity}</p>
					)}
				</div>
			</div>
		</div>
	</div>
);
