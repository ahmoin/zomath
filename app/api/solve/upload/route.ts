import { type HandleUploadBody, handleUpload } from "@vercel/blob/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { uploadRequestSchema } from "@/app/api/solve/upload/schema";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";

export async function POST(request: Request): Promise<NextResponse> {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session)
		return new ChatbotError("unauthorized:auth").toResponse() as NextResponse;

	let body: HandleUploadBody;
	try {
		body = uploadRequestSchema.parse(await request.json()) as HandleUploadBody;
	} catch (_) {
		return new ChatbotError("bad_request:api").toResponse() as NextResponse;
	}

	try {
		const jsonResponse = await handleUpload({
			body,
			request,
			onBeforeGenerateToken: async () => ({
				allowedContentTypes: [
					"image/jpeg",
					"image/png",
					"image/webp",
					"image/heic",
				],
				maximumSizeInBytes: 10 * 1024 * 1024,
				access: "private",
				addRandomSuffix: true,
			}),
		});
		return NextResponse.json(jsonResponse);
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 400 },
		);
	}
}
