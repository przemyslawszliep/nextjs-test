import { type ReviewProductFragment } from "@/gql/graphql";
import { ReviewProduct } from "@/ui/molecules/ReviewProduct";

type ReviewListProps = {
	reviews: ReviewProductFragment[];
};

export const ReviewList = ({ reviews }: ReviewListProps) => (
	<ul>
		{reviews.map((review) => (
			<ReviewProduct key={review.id} review={review} />
		))}
	</ul>
);
