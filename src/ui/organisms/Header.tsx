import Link from "next/link";
import { Logo } from "../atoms/Logo";
import { HeaderMenu } from "../molecules/HeaderMenu";

export const Header = () => {
	return (
		<header className="container mx-auto mb-4 flex justify-between border-b-2 border-gray-500 py-4 align-middle">
			<Link href="/">
				<Logo />
			</Link>
			<HeaderMenu />
		</header>
	);
};
