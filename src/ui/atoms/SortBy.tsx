"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useState } from "react";

export const SortBy = () => {
	const searchParams = useSearchParams();
	const getSortByInitialValue = () => {
		if (!searchParams.get("sortBy")) {
			return "no-sort";
		}
		return searchParams.get("sortBy") || "no-sort";
	};

	const [sortBy, setSortBy] = useState(getSortByInitialValue());

	const router = useRouter();

	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		setSortBy(e.target.value);
		if (e.target.value === "no-sort") {
			router.push(`/products/1`);
		} else {
			router.push(`/products/1?sortBy=${e.target.value}`);
		}
	};

	return (
		<div className="my-12 flex justify-end">
			<select
				value={sortBy}
				onChange={handleChange}
				className="rounded-md border border-slate-400 px-4 py-2"
			>
				<option data-testid="sory-by-price" value={"price-desc"}>
					price descending
				</option>
				<option data-testid="sort-by-price" value={"price-asc"}>
					price ascending
				</option>
				<option data-testid="sort-by-rating" value={"rat-desc"}>
					rating descending
				</option>
				<option data-testid="sort-by-rating" value={"rat-asc"}>
					rating ascending
				</option>

				<option value={"no-sort"}>no filter</option>
			</select>
		</div>
	);
};
