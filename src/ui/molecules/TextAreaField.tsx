import { type TextareaHTMLAttributes } from "react";
import { LabelElement } from "@/ui/atoms/LabelElement";

type TextAreaFieldProps = {
	label: string;
};

export const TextAreaField = ({
	label,
	...props
}: TextAreaFieldProps &
	TextareaHTMLAttributes<HTMLTextAreaElement>) => (
	<LabelElement>
		{label}
		<textarea
			{...props}
			className="mt-1 block max-h-64 min-h-24 w-full rounded-md border p-2 text-sm shadow-sm focus:border-blue-600 focus:outline-none"
		/>
	</LabelElement>
);
