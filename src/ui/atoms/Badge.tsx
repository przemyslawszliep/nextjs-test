type BadgeProps = {
	value: string | number;
};

export const Badge = ({ value }: BadgeProps) => (
	<span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm text-white">
		{value}
	</span>
);
