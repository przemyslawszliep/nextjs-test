import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

interface Body {
  productId: string;
}

export async function POST(request: NextRequest): Promise<Response> {

    const body = await request.json() as Partial<Body>;
    
    if (body.productId && typeof body.productId === "string") {
      revalidatePath(`/product/${body.productId}`);
    
      revalidatePath(`/products`);
      return new NextResponse(JSON.stringify({ message: "success" }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: "invalid request" }), { status: 400 });
    }
  }
}