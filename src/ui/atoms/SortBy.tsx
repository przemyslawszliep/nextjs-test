"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { type Route } from "next";
import { Debouncer } from "@/utils/debouncer";

const options = [
	{
		value: "rating",
		label: "Rating (High to Low)",
		"data-testid": "sort-by-rating",
	},
	{
		value: "-rating",
		label: "Rating (Low to High)",
		"data-testid": "sort-by-rating",
	},
	{
		value: "price",
		label: "Price (Low to High)",
		"data-testid": "sort-by-price",
	},
	{
		value: "-price",
		label: "Price (High to Low)",
		"data-testid": "sort-by-price",
	},
	{ value: "name", label: "Name (A to Z)" },
	{ value: "-name", label: "Name (Z to A)" },
];

export const SortBy = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const urlQueryParamValue = searchParams.get("sort")?.toString();

	const [selectedOption, setSelectedOption] = useState<string>(
		urlQueryParamValue || "",
	);

	const createQueryString = useCallback(
		(params: Record<string, string>) => {
			const searchParams = new URLSearchParams();
			Object.entries(params).forEach(([name, value]) => {
				searchParams.append(name, value);
			});
			return searchParams.toString();
		},
		[],
	);

	const debouncedValue = Debouncer(selectedOption, 1500);

	const handleSelectChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setSelectedOption(event.target.value);
	};

	useEffect(() => {
		if (debouncedValue) {
			router.push(`/products?sort=${debouncedValue}`);
		}
	}, [debouncedValue, router, selectedOption]);

	return (
		<select
			className="cursor-pointer rounded-md border px-2 py-1 text-sm font-light outline outline-2 outline-slate lg:mt-1"
			value={selectedOption}
			onChange={handleSelectChange}
		>
			{options.map((option) => (
				<option
					key={option.value}
					data-testid={option["data-testid"]}
					value={option.value}
				>
					<Link
						href={
							(`/products` +
								"?" +
								createQueryString({
									sort: option.value,
								})) as Route
						}
					>
						{option.label}
					</Link>
				</option>
			))}
		</select>
	);
};
