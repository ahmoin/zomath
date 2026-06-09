import { generateText, Output } from "ai";
import { headers } from "next/headers";
import { z } from "zod";
import {
	flashCardSchema,
	matchUpSchema,
	quizSchema,
} from "@/app/api/practice/generate/schema";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";

const bodySchema = z.object({
	formatId: z.string(),
	current: z.unknown(),
	instructions: z.string().min(1).max(2000),
});

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	let body: z.infer<typeof bodySchema>;
	try {
		body = bodySchema.parse(await request.json());
	} catch {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const { formatId, current, instructions } = body;
	const currentJson = JSON.stringify(current, null, 2);

	if (formatId === "match-up") {
		const { output } = await generateText({
			model: "google/gemini-2.5-flash",
			output: Output.object({ schema: matchUpSchema }),
			prompt: `Here is the current match-up activity data:\n${currentJson}\n\nThe student has requested the following change: "${instructions}"\n\nReturn the updated match-up data incorporating their request. Keep everything else the same unless it needs to change.`,
		});
		return Response.json({ ...output, formatId: "match-up" });
	}

	if (formatId === "flash-cards") {
		const { output } = await generateText({
			model: "google/gemini-2.5-flash",
			output: Output.object({ schema: flashCardSchema }),
			prompt: `Here is the current flash card deck:\n${currentJson}\n\nThe student has requested the following change: "${instructions}"\n\nReturn the updated flash card deck incorporating their request. Keep everything else the same unless it needs to change.`,
		});
		return Response.json({ ...output, formatId: "flash-cards" });
	}

	const { output } = await generateText({
		model: "google/gemini-2.5-flash",
		output: Output.object({ schema: quizSchema }),
		prompt: `Here is the current quiz data:\n${currentJson}\n\nThe student has requested the following change: "${instructions}"\n\nReturn the updated quiz incorporating their request. Keep everything else the same unless it needs to change. Verify all correct answers are mathematically accurate.`,
	});
	return Response.json({ ...output, formatId: "quiz" });
}
