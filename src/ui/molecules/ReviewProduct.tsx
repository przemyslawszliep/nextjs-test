import { type ReviewProductFragment } from "@/gql/graphql";
import { Ratings } from "@/ui/atoms/Ratings";

type ReviewProductProps = {
	review: ReviewProductFragment;
};

export const ReviewProduct = ({ review }: ReviewProductProps) => (
	<li className="mb-8 rounded-xl p-8 odd:bg-slate-50 even:bg-slate-100">
		<div className="flex justify-between">
			<div className="flex flex-col">
				<h4 className="text-xl font-semibold text-slate-600">
					{review.title}
				</h4>
				<p className="text-xs font-light text-slate-600">
					{review.author}, {review.email}
				</p>
			</div>
		</div>
		<div className="mt-4 space-y-6">
			<p className="text-sm text-slate-800">{review.description}</p>
			<div className="flex items-center justify-end">
				<Ratings isAvgTextVisible={false} rating={review.rating} />
			</div>
		</div>
	</li>
);
