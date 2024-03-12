"use client";
import { type Route } from "next";
import React, { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type ActiveLinkProps<_> = {
	href: Route;
	children?: ReactNode;
	exact: boolean;
	"aria-description"?: string;
};

export function ActiveLink<T>(props: ActiveLinkProps<T>) {
	const { children, exact, href } = props;

	let currentLink = usePathname();

	if (!exact) {
		const link = currentLink.split("/");
		link.splice(2);
		currentLink = link.join("/");
	}

	if (currentLink === href) {
		return (
			<Link
				aria-description={props["aria-description"]}
				href={href}
				aria-current="true"
				role="link"
				className={clsx(
					{
						underline: currentLink === href,
					},
					"font-bold uppercase decoration-blue-600 decoration-2 hover:text-blue-600",
				)}
			>
				{children}
			</Link>
		);
	}

	return (
		<Link
			aria-description={props["aria-description"]}
			href={href}
			role="link"
			className={clsx(
				{
					underline: currentLink === href,
				},
				"font-bold uppercase decoration-amber-300  decoration-2",
			)}
		>
			{children}
		</Link>
	);
}
