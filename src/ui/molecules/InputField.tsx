import { type InputHTMLAttributes } from "react";
import { LabelElement } from "@/ui/atoms/LabelElement";

type InputFieldProps = {
	label: string;
};

export const InputField = ({
	label,
	...props
}: InputFieldProps & InputHTMLAttributes<HTMLInputElement>) => (
	<LabelElement>
		{label}
		<input
			{...props}
			className="my-1 block w-full rounded-md border px-2 py-2 text-sm shadow-sm focus:border-blue-600"
		/>
	</LabelElement>
);
