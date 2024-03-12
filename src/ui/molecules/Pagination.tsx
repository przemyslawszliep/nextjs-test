"use client";
import { type Route } from "next";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PaginationButton } from "@/ui/atoms/PaginationButton";
import { PaginationPageNumber } from "@/ui/atoms/PaginationPageNumber";
import { countPagesAndConvertToArray } from "@/utils";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	fullNumberOfProducts: number;
	productsPerPage: number;
	currentPage: number;
};

type paginationState = {
	currentPage: number;
	maxPages: number;
	minPageForPagination: number;
	maxPageForPagination: number;
	pages: number[];
};

const BASE_URL =
	typeof window !== "undefined"
		? `${window.location.origin}/products/`
		: "";

export const Pagination = ({
	currentPage,
	fullNumberOfProducts,
	productsPerPage,
}: PaginationProps) => {
	const [paginationState, setPaginationState] =
		useState<paginationState>({
			currentPage,
			maxPages: Math.ceil(fullNumberOfProducts / productsPerPage),
			pages: [],
			minPageForPagination: 1,
			maxPageForPagination: 10,
		});
	const router = useRouter();

	const path = usePathname().split("/");

	useEffect(() => {
		setPaginationState(({ currentPage, maxPages }) => {
			const pageNumber = Number(path[path.length - 1]) ?? 1;
			const minPage = currentPage - 5;
			const maxPage = currentPage + 5;
			const pages =
				countPagesAndConvertToArray(
					fullNumberOfProducts,
					productsPerPage,
				) ?? [];
			return {
				currentPage: pageNumber,
				pages,
				maxPages,
				minPageForPagination: minPage < 1 ? 0 : minPage,
				maxPageForPagination:
					maxPage > Number(pages[pages.length - 1])
						? Number(pages[pages.length - 1])
						: currentPage + 5,
			};
		});
	}, []);

	const nextPage = () => {
		const { maxPageForPagination, currentPage: currentPageInState } =
			paginationState;
		const nextPage =
			currentPageInState + 1 > maxPageForPagination
				? currentPageInState
				: currentPageInState + 1;
		const url = new URL(
			nextPage.toString(),
			BASE_URL,
		).toString() as Route;
		router.push(url);
	};

	const prevPage = () => {
		const { minPageForPagination, currentPage: currentPageInState } =
			paginationState;
		const prevPage =
			currentPageInState - 1 < minPageForPagination + 1
				? currentPageInState
				: currentPageInState - 1;
		const url = new URL(
			prevPage.toString(),
			BASE_URL,
		).toString() as Route;
		router.push(url);
	};
	return (
		<div
			aria-label="pagination"
			className="my-6 flex w-full items-center justify-center gap-2"
		>
			<PaginationButton onClick={prevPage}>Prev</PaginationButton>
			<div className="flex flex-row gap-2">
				{paginationState.pages
					.map((page, index) => (
						<ActiveLink
							key={index}
							href={("/products/" + page) as Route}
							exact={true}
						>
							<PaginationPageNumber>{page}</PaginationPageNumber>
						</ActiveLink>
					))
					.slice(
						paginationState.minPageForPagination,
						paginationState.maxPageForPagination,
					)}
			</div>
			<PaginationButton onClick={nextPage}>Next</PaginationButton>
		</div>
	);
};
