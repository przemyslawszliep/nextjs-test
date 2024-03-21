import React, { type FormHTMLAttributes } from "react";
import { InputField } from "./InputField";
import { TextAreaField } from "@/ui/molecules/TextAreaField";
import { LabelElement } from "@/ui/atoms/LabelElement";

type ReviewFormProps = {
	formAction: FormHTMLAttributes<HTMLFormElement>["action"];
};

export const ReviewForm = ({ formAction }: ReviewFormProps) => (
	<form action={formAction} data-testid="add-review-form">
		<InputField required label="Title" name="headline" />
		<TextAreaField required label="Message" name="content" />
		<div className="my-2">
			<LabelElement>
				Rating
				<fieldset className="my-2 flex flex-row-reverse justify-end">
					{[5, 4, 3, 2, 1].map((value) => (
						<React.Fragment key={value}>
							<input
								className="mx-4 h-4 w-4"
								id={`rating-${value}`}
								type="radio"
								key={value}
								value={value}
								name="rating"
								required
							/>
							<label
								htmlFor={`rating-${value}`}
								className="cursor-pointer"
							>
								{value}
							</label>
						</React.Fragment>
					))}
				</fieldset>
				<fieldset className="flex flex-row-reverse justify-end"></fieldset>
			</LabelElement>
		</div>
		<InputField required label="Name" name="name" />
		<InputField required label="Email" name="email" />
		<button
			type="submit"
			className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
		>
			Add your opinion
		</button>
	</form>
);
