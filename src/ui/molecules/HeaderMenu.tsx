import { ActiveLink } from "../atoms/ActiveLink";

export const HeaderMenu = () => {
	return (
		<nav role="navigation" className="flex justify-center gap-2">
			<ActiveLink exact={false} aria-description="Home" href={"/"}>
				<span className="text-blue-300">Home</span>
			</ActiveLink>
			<ActiveLink
				exact={false}
				aria-description="All"
				href={"/products"}
			>
				<span className="text-blue-300">All</span>
			</ActiveLink>
			<ActiveLink
				exact={false}
				aria-description="T-shirts"
				href={"/t-shirts"}
			>
				<span>T-Shirts</span>
			</ActiveLink>
			<ActiveLink
				exact={false}
				aria-description="Hoodies"
				href={"/hoodies"}
			>
				<span>Hoodies</span>
			</ActiveLink>
			<ActiveLink
				exact={false}
				aria-description="Accessories"
				href={"/accessories"}
			>
				<span>Accessories</span>
			</ActiveLink>
		</nav>
	);
};
