import { generateText, Output } from "ai";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";

const messageSchema = z.object({
	role: z.enum(["user", "newton"]),
	text: z.string(),
});

const bodySchema = z.object({
	message: z.string().min(1).max(2000),
	history: z.array(messageSchema).optional().default([]),
	context: z.string().optional(),
});

const responseSchema = z.object({
	response: z.string(),
	suggestUpdate: z.boolean(),
});

const SYSTEM = `You are Newton (never refer to yourself as "Isaac Newton", only "Newton"), an expert math tutor built into Zomath.
Your job is to help students understand math during their practice session.
Guide with questions and hints before revealing solutions.
Keep responses concise and conversational. Avoid bullet points and headers. Use natural flowing sentences.
Do not use LaTeX or math notation symbols in your spoken responses. Spell out math in plain English.

You also have the ability to update the practice content shown on the right panel.
Set suggestUpdate to true when the student asks you to change, modify, regenerate, simplify, add more, remove, or fix anything about the practice content itself (the questions, cards, pairs, difficulty, etc.).
When setting suggestUpdate to true, tell the student what you are going to change in your response (e.g. "I'll update the cards to show just the word and translation.").
Set suggestUpdate to false for all other messages, questions about content, hints, explanations, etc.`;

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	let body: z.infer<typeof bodySchema>;
	try {
		body = bodySchema.parse(await request.json());
	} catch {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const historyText = body.history
		.map((m) => `${m.role === "user" ? "Student" : "Newton"}: ${m.text}`)
		.join("\n");

	const contextLine = body.context ? `Context: ${body.context}\n\n` : "";
	const prompt = `${contextLine}${historyText ? `${historyText}\n` : ""}Student: ${body.message}\n\nNewton:`;

	const { output } = await generateText({
		model: "google/gemini-2.5-flash",
		output: Output.object({ schema: responseSchema }),
		system: SYSTEM,
		prompt,
	});

	return Response.json({ response: output.response, suggestUpdate: output.suggestUpdate });
}
