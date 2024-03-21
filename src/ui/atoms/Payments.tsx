import { handlePaymentAction } from "@/actions/cart";

export const Payments = () => (
	<form action={handlePaymentAction}>
		<button
			type="submit"
			className="mt-4 flex w-full justify-center rounded-md bg-blue-600 p-4 text-white hover:bg-blue-800"
		>
			Pay Now
		</button>
	</form>
);
