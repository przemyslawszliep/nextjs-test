import { TitleSection } from "@/ui/atoms/TitleSection";

export default function Home() {
	return (
		<div>
			<TitleSection titleText="Strona główna" />
			<p className="my-4 text-center text-green-700">
				Witamy na naszej nowej stronie głównej w Next.js
			</p>
		</div>
	);
}
