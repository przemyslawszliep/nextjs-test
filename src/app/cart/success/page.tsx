import { redirect } from "next/navigation";
import { initStripe, retrieveCheckoutSession } from "@/utils/stripe";

type CartSuccessPageProps = {
	searchParams: {
		sessionId?: string;
	};
};

export default async function CartSuccessPage({ searchParams }: CartSuccessPageProps) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	const stripe = initStripe();
	const session = await retrieveCheckoutSession(stripe, searchParams.sessionId);

	return (
		<div>
			<h1>Thank you for your purchase!</h1>
			<p>status: {session.status}</p>
		</div>
	);
}
