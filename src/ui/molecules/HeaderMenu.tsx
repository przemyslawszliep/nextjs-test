import { type Route } from "next";

import { ActiveLink } from "../atoms/ActiveLink";

import { Paths } from "@/utils/paths";
import { getProductsCategoriesNames } from "@/api/categories";
import { getCollectionNames } from "@/api/collections";

export const HeaderMenu = async () => {
	const categoriesNames = await getProductsCategoriesNames();
	const collectionNames = await getCollectionNames();

	const categoryLinks = categoriesNames.data.map((item) => {
		return {
			name: item.name,
			href: `/categories/${item.slug}`,
			exact: false,
		};
	});

	const collectionLinks = collectionNames.data.map((item) => {
		return {
			name: item.name,
			href: `/collections/${item.slug}`,
			exact: false,
		};
	});

	const navigationLinks = [
		{ name: "Home", href: Paths.HOME, exact: true },
		{ name: "All", href: Paths.PRODUCTS, exact: false },
		...collectionLinks,
		...categoryLinks,
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
