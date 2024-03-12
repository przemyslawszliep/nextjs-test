import React from "react";
type PaginationPageNumberProps = {
	children?: React.ReactNode;
};
export function PaginationPageNumber({
	children,
}: PaginationPageNumberProps) {
	return (
		<span className="flex-grow-1 aspect-square h-full w-9  p-3 hover:bg-black hover:text-white">
			{children}
		</span>
	);
}
