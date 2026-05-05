import { type HandleUploadBody, handleUpload } from "@vercel/blob/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request): Promise<NextResponse> {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const body = (await req.json()) as HandleUploadBody;

	try {
		const jsonResponse = await handleUpload({
			body,
			request: req,
			onBeforeGenerateToken: async () => ({
				allowedContentTypes: [
					"image/jpeg",
					"image/png",
					"image/webp",
					"image/heic",
				],
				maximumSizeInBytes: 10 * 1024 * 1024,
				access: "private",
			}),
			onUploadCompleted: async () => {},
		});
		return NextResponse.json(jsonResponse);
	} catch (error) {
		return NextResponse.json(
			{ error: (error as Error).message },
			{ status: 400 },
		);
	}
}
