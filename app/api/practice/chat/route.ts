import { generateText } from "ai";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";

const bodySchema = z.object({
	message: z.string().min(1).max(2000),
	context: z.string().optional(),
});

const SYSTEM = `You are Newton (never refer to yourself as "Isaac Newton", only "Newton"), an expert math tutor built into Zomath.
Your job is to help students understand math during their practice session.
Guide with questions and hints before revealing solutions.
Keep responses concise and conversational. Avoid bullet points and headers. Use natural flowing sentences.
Do not use LaTeX or math notation symbols in your spoken responses — spell out math in plain English.`;

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	let body: z.infer<typeof bodySchema>;
	try {
		body = bodySchema.parse(await request.json());
	} catch {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const prompt = body.context
		? `Context: ${body.context}\n\nStudent: ${body.message}\n\nNewton:`
		: `Student: ${body.message}\n\nNewton:`;

	const { text } = await generateText({
		model: "google/gemini-2.5-flash",
		system: SYSTEM,
		prompt,
	});

	return Response.json({ response: text });
}
