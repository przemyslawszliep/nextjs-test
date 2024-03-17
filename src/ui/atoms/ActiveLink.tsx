"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	activeClassName?: string;
	className?: string;
	children: React.ReactNode;
	href: Route<T>;
	exact?: boolean;
} & Omit<LinkProps<T>, "href">;

export const ActiveLink = <T extends string>({
	activeClassName = "bg-black text-white",
	className = "rounded-lg px-4 py-1 text-black transition-all duration-300 hover:bg-black hover:text-white",
	children,
	exact,
	href,
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href as string);

	return (
		<Link
			href={href}
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
			aria-current={isActive ? "page" : undefined}
			{...props}
		>
			{children}
		</Link>
	);
};