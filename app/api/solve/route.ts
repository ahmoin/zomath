import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { get } from "@vercel/blob";
import { streamText } from "ai";

const openrouter = createOpenRouter({
	apiKey: process.env.OPENROUTER_API_KEY,
});

const SYSTEM_PROMPT = `You are Newton, an expert math tutor built into Zomath. Your job is to help students genuinely understand math, not just get answers.

When given a math problem (via image or text):
1. Identify the problem type and relevant concepts
2. Walk through the solution step by step, explaining the reasoning at each step
3. Never skip steps or say "it follows that" without explanation
4. After the solution, briefly suggest what concepts to review or practice next

Format your response in clear sections:
- **Problem**: restate what was asked
- **Approach**: which method you'll use and why
- **Solution**: numbered steps with explanations
- **Key concepts**: 2-3 concepts this problem touches

Be encouraging but focus on understanding, not flattery.`;

export async function POST(req: Request) {
	const { imageUrl } = await req.json();

	const blob = await get(imageUrl, { access: "private" });
	if (!blob) return new Response("Image not found", { status: 404 });

	const arrayBuffer = await new Response(blob.stream).arrayBuffer();
	const base64 = Buffer.from(arrayBuffer).toString("base64");

	const result = streamText({
		model: openrouter("nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free"),
		system: SYSTEM_PROMPT,
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
		],
	});

	return result.toTextStreamResponse();
}
