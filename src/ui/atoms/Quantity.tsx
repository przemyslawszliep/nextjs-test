"use client";

import { useOptimistic } from "react";
import { changeQuantity } from "@/actions/cart";

type QuantityProps = {
	quantity: number;
	cartId: string;
	productId: string;
};
export const Quantity = ({
	quantity,
	cartId,
	productId,
}: QuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] =
		useOptimistic(quantity);

	return (
		<form className="ml-auto flex items-center gap-4 ">
			<button
				data-testid="decrement"
				disabled={optimisticQuantity === 1}
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeQuantity(
						cartId,
						productId,
						optimisticQuantity - 1,
					);
				}}
				className="h-8 w-8 rounded-md bg-white py-1 transition-colors hover:bg-slate-300 disabled:cursor-not-allowed disabled:bg-slate-200"
			>
				-
			</button>
			<span data-testid="quantity" className="text-xl font-bold">
				{optimisticQuantity}
			</span>
			<button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeQuantity(
						cartId,
						productId,
						optimisticQuantity + 1,
					);
				}}
				className="h-8 w-8 rounded-md bg-white py-1 transition-colors hover:bg-slate-300"
			>
				+
			</button>
		</form>
	);
};
