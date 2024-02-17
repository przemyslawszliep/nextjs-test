type TitleSectionText = {
	titleText: string;
};

export const TitleSection = ({titleText}: TitleSectionText) => {
	return (
		<header className="mb-8 flex justify-center">
			<h1 className="text-3xl font-extrabold text-center">{titleText}</h1>
		</header>
	);
};