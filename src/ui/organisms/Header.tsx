import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import { Logo } from "@/ui/atoms/Logo";
import { HeaderMenu } from "@/ui/molecules/HeaderMenu";
import { Search } from "@/ui/atoms/Search";
import { getCart } from "@/api/cart";
import { CounterCart } from "@/ui/atoms/CounterCart";

export const Header = async () => {
	const cartId = cookies().get("cartId")?.value;
	const cart = cartId ? await getCart(cartId) : null;
	const count =
		cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<header className="container mx-auto mb-4 flex items-center justify-between border-b-2 border-gray-500 py-4">
			<Link href="/">
				<Logo />
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Search />
			</Suspense>
			<HeaderMenu />
			<div className="mr-4">
				<CounterCart count={count} />
			</div>
		</header>
	);
};
