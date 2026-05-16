import { NextResponse } from "next/server";

export async function GET() {
	if (!process.env.AI_GATEWAY_API_KEY) {
		return NextResponse.json(
			{ status: "degraded", reason: "AI gateway not configured" },
			{ status: 503 },
		);
	}
	if (!process.env.BLOB_READ_WRITE_TOKEN) {
		return NextResponse.json(
			{ status: "degraded", reason: "Blob storage not configured" },
			{ status: 503 },
		);
	}
	return NextResponse.json({ status: "ok" });
}
