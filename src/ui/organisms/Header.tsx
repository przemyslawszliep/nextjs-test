import Link from "next/link";
import { Suspense } from "react";
import { Logo } from "@/ui/atoms/Logo";
import { HeaderMenu } from "@/ui/molecules/HeaderMenu";
import { Search } from "@/ui/atoms/Search";
import { CounterCart } from "@/ui/atoms/CounterCart";

export const Header = async () => {
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
				<CounterCart />
			</div>
		</header>
	);
};
