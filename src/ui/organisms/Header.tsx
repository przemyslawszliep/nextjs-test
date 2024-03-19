import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { HeaderMenu } from "../molecules/HeaderMenu";
import { Search } from "../atoms/Search";

export const Header = () => {
	return (
		<header className="container mx-auto mb-4 flex items-center justify-between border-b-2 border-gray-500 py-4">
			<Link href="/">
				<Logo />
			</Link>
			<Search />
			<HeaderMenu />
		</header>
	);
};
