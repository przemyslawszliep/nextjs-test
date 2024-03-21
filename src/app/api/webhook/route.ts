import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	if (
		typeof body === "object" &&
		body &&
		"productId" in body &&
		typeof body.productId === "string"
	) {
		revalidatePath(`/product/${body.productId}`);
		revalidatePath(`/products`);
		return new NextResponse(JSON.stringify({ message: "success" }), {
			status: 200,
		});
	} else {
		return new NextResponse(
			JSON.stringify({ message: "invalid request" }),
			{ status: 400 },
		);
	}
}
