import { get } from "@vercel/blob";
import { streamText } from "ai";
import { headers } from "next/headers";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";
import { solvePrompt } from "@/lib/ai/prompts";
import { getLanguageModel } from "@/lib/ai/providers";
import { auth } from "@/lib/auth";
import { HistoryMessage } from "@/lib/types";

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const {
		imageUrl,
		history = [],
	}: { imageUrl: string; history: HistoryMessage[] } = await request.json();

	const blob = await get(imageUrl, { access: "private" });
	if (!blob) return new Response("Image not found", { status: 404 });

	const arrayBuffer = await new Response(blob.stream).arrayBuffer();
	const base64 = Buffer.from(arrayBuffer).toString("base64");

	const result = streamText({
		model: getLanguageModel(DEFAULT_CHAT_MODEL),
		system: solvePrompt,
		messages: [
			{
				role: "user",
				content: [
					{
						type: "image",
						image: `data:${blob.blob.contentType};base64,${base64}`,
					},
					{
						type: "text",
						text: "Please solve this math problem and help me understand it.",
					},
				],
			},
			...history.map((m) => ({
				role: m.role,
				content: m.text,
			})),
		],
	});

	return result.toTextStreamResponse();
}
