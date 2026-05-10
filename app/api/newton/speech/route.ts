import { elevenlabs } from "@ai-sdk/elevenlabs";
import { experimental_generateSpeech as generateSpeech } from "ai";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

type TranscriptionSegment = {
	text: string;
	startSecond: number;
	endSecond: number;
};

function estimateSegments(text: string): TranscriptionSegment[] {
	const sentences = text
		.split(/(?<=[.!?])\s+/)
		.map((s) => s.trim())
		.filter(Boolean);

	const wordsPerSecond = 2.5;
	let cursor = 0;

	return sentences.map((sentence) => {
		const words = sentence.split(/\s+/).length;
		const duration = words / wordsPerSecond;
		const segment = {
			endSecond: cursor + duration,
			startSecond: cursor,
			text: sentence,
		};
		cursor += duration;
		return segment;
	});
}

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const { text }: { text: string } = await request.json();

	const result = await generateSpeech({
		model: elevenlabs.speech("eleven_multilingual_v2"),
		text,
		voice: "JBFqnCBsd6RMkjVDRZzb",
	});

	const segments = estimateSegments(text);

	return Response.json({
		audio: result.audio,
		segments,
	});
}
