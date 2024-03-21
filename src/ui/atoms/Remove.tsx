"use client";

import { useTransition } from "react";
import { Trash } from "lucide-react";
import { removeItem } from "@/actions/cart";

type RemoveProps = {
	cartId: string;
	productId: string;
};

export const Remove = ({ cartId, productId }: RemoveProps) => {
	const [isPending, startTransition] = useTransition();
	return (
		<button
			className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all hover:bg-slate-200 hover:shadow-xl disabled:text-slate-400"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItem(cartId, productId);
				});
			}}
		>
			<Trash size={20} color="red" />
		</button>
	);
};
