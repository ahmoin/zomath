import { get } from "@vercel/blob";
import { streamText } from "ai";
import { headers } from "next/headers";
import { z } from "zod";
import { postRequestBodySchema } from "@/app/api/solve/schema";
import { solvePrompt } from "@/lib/ai/prompts";
import { getLanguageModel } from "@/lib/ai/providers";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";

const requestSchema = postRequestBodySchema.extend({
	imageUrl: z.string().min(1),
});

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	let body: z.infer<typeof requestSchema>;
	try {
		body = requestSchema.parse(await request.json());
	} catch (_) {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const { imageUrl, messages = [], selectedChatModel } = body;

	const blob = await get(imageUrl, { access: "private" });
	if (!blob) return new Response("Image not found", { status: 404 });

	const arrayBuffer = await new Response(blob.stream).arrayBuffer();
	const base64 = Buffer.from(arrayBuffer).toString("base64");

	const result = streamText({
		model: getLanguageModel(selectedChatModel),
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
			...messages.map((m) => ({
				role: m.role as "user" | "assistant",
				content: m.parts
					.map((p) => (p.type === "text" ? (p.text as string) : ""))
					.filter(Boolean)
					.join(""),
			})),
		],
	});

	return result.toTextStreamResponse();
}
