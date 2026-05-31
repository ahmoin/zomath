import { generateText, Output } from "ai";
import { headers } from "next/headers";
import type { z } from "zod";
import {
	matchUpSchema,
	postRequestBodySchema,
	quizSchema,
} from "@/app/api/practice/generate/schema";
import { matchUpPrompt, practicePrompt } from "@/lib/ai/prompts";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";
import { checkAndIncrementUsage } from "@/lib/usage";

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	if ((session.user as { plan?: string }).plan !== "plus") {
		const { allowed } = await checkAndIncrementUsage(
			session.user.id,
			"practice",
		);
		if (!allowed) {
			return Response.json(
				{
					error: "rate_limit",
					message:
						"You've reached your daily practice limit (3/day). Upgrade to Plus for unlimited access.",
				},
				{ status: 429 },
			);
		}
	}

	let body: z.infer<typeof postRequestBodySchema>;
	try {
		body = postRequestBodySchema.parse(await request.json());
	} catch (_) {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const { topic, count, formatId } = body;

	if (formatId === "match-up") {
		const { output: object } = await generateText({
			model: "google/gemini-2.5-flash",
			output: Output.object({ schema: matchUpSchema }),
			prompt: matchUpPrompt(topic, count),
		});
		return Response.json({ ...object, formatId: "match-up" });
	}

	const { output: object } = await generateText({
		model: "google/gemini-2.5-flash",
		output: Output.object({ schema: quizSchema }),
		prompt: practicePrompt(topic, count),
	});

	return Response.json(object);
}
