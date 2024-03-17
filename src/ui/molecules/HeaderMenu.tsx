import { type Route } from "next";

import { ActiveLink } from "../atoms/ActiveLink";

import { Paths } from "@/utils/paths";
import { getProductsCategoriesNames } from "@/api/categories";

export const HeaderMenu = async () => {
	const categoriesNames = await getProductsCategoriesNames();

	const categoryLinks = categoriesNames.data.map((item) => {
		return {
			name: item.name,
			href: `/categories/${item.slug}`,
			exact: false,
		};
	});

	const navigationLinks = [
		{ name: "Home", href: Paths.HOME, exact: true },
		{ name: "All", href: Paths.PRODUCTS, exact: false },
		...categoryLinks.reverse(),
	];

	return (
		<nav role="navigation" className="flex justify-center gap-2">
			{navigationLinks.map((link) => (
				<ActiveLink
					exact={link.name === "Home"}
					key={link.name}
					href={link.href as Route}
				>
					{link.name}
				</ActiveLink>
			))}
		</nav>
	);
};
