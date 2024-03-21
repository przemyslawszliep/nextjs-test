import { Star } from "lucide-react";

type RatingProps = {
	rating: number;
	isAvgTextVisible?: boolean;
};

export const Ratings = ({
	rating,
	isAvgTextVisible = true,
}: RatingProps) => {
	const renderStars = () => {
		return Array.from({ length: 5 }, (_, index) => (
			<Star
				key={index}
				fill={index < Math.round(rating) ? "#ffd700" : "#c7c7c7"}
				color={index < Math.round(rating) ? "#ffd700" : "#c7c7c7"}
				size="24"
			/>
		));
	};

	return (
		<div className="flex items-center text-center">
			{isAvgTextVisible && (
				<span data-testid="product-rating" className="mr-2 text-xs">
					{rating.toFixed(1)} / 5
				</span>
			)}
			{renderStars()}
		</div>
	);
};
