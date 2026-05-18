import { generateText } from "ai";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";

const bodySchema = z.object({
	format: z.string(),
	messages: z.array(
		z.object({
			role: z.enum(["user", "newton"]),
			text: z.string(),
		}),
	),
	attachmentDescriptions: z.array(z.string()).optional(),
});

const SYSTEM = `You are Newton, a math tutor helping a student plan a practice session.
Your job is to have a short, focused conversation to understand exactly what they want to practice.
Ask at most 1-2 clarifying questions per turn. Be concise and encouraging.

When you have enough information to generate a good quiz (topic, rough difficulty, any specific focus areas),
end your message with a JSON block on its own line in this exact format:
READY:{"topic":"<specific topic string>","notes":"<any extra instructions for generation>"}

Do NOT include the READY block until you are confident you have enough to generate a great session.
Do NOT include it if the user hasn't given you a topic yet.`;

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	let body: z.infer<typeof bodySchema>;
	try {
		body = bodySchema.parse(await request.json());
	} catch {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const { format, messages, attachmentDescriptions } = body;

	const history = messages
		.map((m) => `${m.role === "user" ? "Student" : "Newton"}: ${m.text}`)
		.join("\n");

	const attachmentContext =
		attachmentDescriptions && attachmentDescriptions.length > 0
			? `\nThe student has attached the following files: ${attachmentDescriptions.join(", ")}.`
			: "";

	const prompt = `Format: ${format}${attachmentContext}\n\nConversation so far:\n${history}\n\nNewton:`;

	const { text } = await generateText({
		model: "google/gemini-2.5-flash",
		prompt,
		system: SYSTEM,
	});

	const readyMatch = text.match(/READY:(\{.*?\})/);
	const clean = text.replace(/READY:\{.*?\}/, "").trim();

	if (readyMatch) {
		try {
			const parsed = JSON.parse(readyMatch[1]) as {
				topic: string;
				notes: string;
			};
			return Response.json({
				text: clean,
				ready: true,
				topic: parsed.topic,
				notes: parsed.notes,
			});
		} catch {
			// fall through to non-ready response
		}
	}

	return Response.json({ text: clean, ready: false });
}
