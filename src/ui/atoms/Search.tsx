"use client";

import { SearchIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { type Route } from "next";
import { DebounceUtility } from "@/utils/debounceUtility";

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const urlQueryParamValue = searchParams.get("query")?.toString();
	const [searchValue, setSearchValue] = useState<string>(urlQueryParamValue || "");

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const debouncedSearch = DebounceUtility(searchValue, 1500);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		if (event.target.value.length === 0) {
			router.push("/products");
		}
	};

	useEffect(() => {
		if (debouncedSearch) {
			router.push(`/search?query=${debouncedSearch}`);
		}
	}, [debouncedSearch, router]);

	return (
		<div className="flex items-center justify-center gap-2 rounded-md border bg-white">
			<Link
				href={(`/search` + "?" + createQueryString("query", searchValue)) as Route}
				className="flex h-full w-[40px] cursor-pointer items-center justify-center border-r bg-white"
			>
				<SearchIcon color="gray" size={16} />
			</Link>
			<input
				className="w-42 rounded-md p-1 text-sm outline-none"
				type="search"
				placeholder="Search..."
				value={searchValue}
				onChange={handleInputChange}
			/>
		</div>
	);
};