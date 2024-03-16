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
		</nav>
	);
};
