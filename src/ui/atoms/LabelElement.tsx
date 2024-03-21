import { type ReactNode } from "react";

type LabelElementProps = {
	children: ReactNode;
};
export const LabelElement = ({ children }: LabelElementProps) => (
	<label className="">
		<span className="text-xs font-semibold text-gray-700">
			{children}
		</span>
	</label>
);
