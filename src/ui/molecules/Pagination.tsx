"use client";

import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export function Pagination({
	totalPages,
	linkTo,
	queryParams,
}: {
	totalPages: number;
	linkTo: string;
	queryParams?: string;
}) {
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1,
	);

	return (
		<nav aria-label="pagination" className="mt-8 flex justify-center items-center">
			{pageNumbers.map((pageNumber) => (
				<ActiveLink
					className=""
					key={pageNumber}
					aria-label={`pagination - ${pageNumber}`}
					href={
						`/${linkTo}/${pageNumber}${queryParams ? `?${queryParams}` : ""}` as Route
					}
					activeClassName="active"
					exact={false}
				>
					{pageNumber}
				</ActiveLink>
			))}
		</nav>
	);
}
