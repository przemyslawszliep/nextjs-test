import React, { type MouseEventHandler } from "react";

type PaginationButtonProps = {
	children?: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const PaginationButton = ({
	children,
	onClick,
}: PaginationButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="aspect-square bg-black px-2 text-white"
		>
			{children}
		</button>
	);
};
