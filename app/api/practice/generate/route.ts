import { generateText, Output } from "ai";
import { headers } from "next/headers";
import type { z } from "zod";
import {
	postRequestBodySchema,
	quizSchema,
} from "@/app/api/practice/generate/schema";
import { practicePrompt } from "@/lib/ai/prompts";
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

	const { topic, count } = body;

	const { output: object } = await generateText({
		model: "google/gemini-2.5-flash",
		output: Output.object({ schema: quizSchema }),
		prompt: practicePrompt(topic, count),
	});

	return Response.json(object);
}
