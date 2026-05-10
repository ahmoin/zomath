import { streamText } from "ai";
import { headers } from "next/headers";
import type { z } from "zod";
import { postRequestBodySchema } from "@/app/api/newton/schema";
import { newtonPrompt } from "@/lib/ai/prompts";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	let body: z.infer<typeof postRequestBodySchema>;
	try {
		body = postRequestBodySchema.parse(await request.json());
	} catch (_) {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const result = streamText({
		model: body.selectedChatModel,
		system: newtonPrompt,
		messages: (body.messages ?? []).map((m) => ({
			role: m.role as "user" | "assistant",
			content: m.parts
				.map((p) => (p.type === "text" ? (p.text as string) : ""))
				.filter(Boolean)
				.join(""),
		})),
	});

	return result.toTextStreamResponse();
}
