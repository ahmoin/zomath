import { streamText } from "ai";
import { headers } from "next/headers";
import { tavily } from "@tavily/core";
import { researchNewtonPrompt } from "@/lib/ai/prompts";
import { auth } from "@/lib/auth";
import { ChatbotError } from "@/lib/errors";
import { DEFAULT_CHAT_MODEL } from "@/lib/ai/models";

export const maxDuration = 60;

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	const { query } = await request.json();
	if (!query?.trim()) return new ChatbotError("bad_request:api").toResponse();

	const tv = tavily({ apiKey: process.env.TAVILY_API_KEY! });
	const searchResult = await tv.search(query, { maxResults: 10 });

	const sourcesText = searchResult.results
		.map((r, i) => `[${i + 1}] ${r.title}\nURL: ${r.url}\n${r.content}`)
		.join("\n\n---\n\n");

	const result = streamText({
		model: DEFAULT_CHAT_MODEL,
		system: researchNewtonPrompt,
		messages: [
			{
				role: "user",
				content: `Write comprehensive study notes about: "${query}"\n\nSearch results:\n\n${sourcesText}`,
			},
		],
	});

	const sources = searchResult.results.map((r, i) => ({
		number: String(i + 1),
		title: r.title,
		url: r.url,
	}));

	const encoder = new TextEncoder();
	const stream = new ReadableStream({
		async start(controller) {
			controller.enqueue(
				encoder.encode(`data:sources:${JSON.stringify(sources)}\n\n`),
			);
			for await (const chunk of result.textStream) {
				controller.enqueue(encoder.encode(chunk));
			}
			controller.close();
		},
	});

	return new Response(stream, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
