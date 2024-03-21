"use client";
import { useFormStatus } from "react-dom";

export const AddToCart = () => {
	const { pending } = useFormStatus();
	return (
		<button
			data-testid="add-to-cart-button"
			disabled={pending}
			className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-800 disabled:cursor-wait"
		>
			Add to cart
		</button>
	);
};
