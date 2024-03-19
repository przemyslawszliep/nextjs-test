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
	const [searchValue, setSearchValue] = useState<string>(
		urlQueryParamValue || "",
	);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const debouncedSearch: string = DebounceUtility(searchValue, 500);

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		if (debouncedSearch) {
			router.push(`/search?query=${debouncedSearch}`);
		}
	}, [debouncedSearch, router]);

	return (
		<div className="ml-8 mr-auto flex items-center justify-center gap-2 overflow-hidden rounded-md border border-slate-500 bg-white">
			<input
				className="w-42 overflow-hiddentext-sm rounded-md  p-1 outline-none"
				type="search"
				placeholder="Search..."
				value={searchValue}
				onChange={handleInputChange}
			/>
			<Link
				href={
					(`/search` +
						"?" +
						createQueryString("query", searchValue)) as Route
				}
				className="flex h-8 h-full w-8 cursor-pointer items-center justify-center border-l bg-slate-500 hover:bg-slate-800"
			>
				<SearchIcon color="white" size={16} />
			</Link>
		</div>
	);
};
