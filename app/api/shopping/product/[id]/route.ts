import { ProductData } from "@/typing";
import { NextResponse } from "next/server";

type Params = { params: { id: string } };

export async function GET(request: Request, { params: { id } }: Params) {
	if (!id) {
		return NextResponse.next(
			new Response("Missing product ID", {
				status: 400,
			}),
		);
	}

	const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
		method: "POST",
		body: JSON.stringify({
			source: "google_shopping_product",
			domain: "com",
			query: id,
			parse: true,
			geo_location: "India",
		}),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Basic ${Buffer.from(
				process.env.OXYLABS_USERNAME + ":" + process.env.OXYLABS_PASSWORD,
			).toString("base64")}`,
		},
	});

	const data = await response.json();

	if (data.results.length === 0) {
		return NextResponse.next(
			new Response("No product found", {
				status: 404,
			}),
		);
	}

	const productData: ProductData = data.results[0];

	return NextResponse.json(productData);
}
