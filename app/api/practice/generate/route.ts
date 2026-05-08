import { generateText, Output } from "ai";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "@/lib/auth";

const QuestionSchema = z.object({
	question: z.string(),
	latex: z.string().optional(),
	options: z.array(
		z.object({
			label: z.string(),
			text: z.string(),
			correct: z.boolean(),
			explanation: z.string(),
		}),
	),
	hint: z.string(),
});

const QuizSchema = z.object({
	title: z.string(),
	intro: z.string(),
	questions: z.array(QuestionSchema),
});

export async function POST(req: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const { topic, count = 6 } = (await req.json()) as {
		topic: string;
		count?: number;
	};

	const { output: object } = await generateText({
		model: "google/gemini-2.5-flash",
		output: Output.object({ schema: QuizSchema }),
		prompt: `Generate a ${count}-question multiple choice math quiz on the topic: "${topic}".

CRITICAL ACCURACY RULES — violating these makes the quiz useless:
1. Solve every problem yourself FIRST, then write the options. The option marked correct: true MUST be the mathematically correct answer.
2. The explanation for the correct option MUST state the same answer as the option text. If option text says "x = 6" the explanation must confirm x = 6, not a different value.
3. Double-check: substitute your answer back into the original problem to verify it works before finalizing.
4. Wrong options should be plausible mistakes (e.g. sign errors, off-by-one, common misconceptions) — not random.

FORMAT RULES:
- title: short descriptive title e.g. "Algebra Quiz"
- intro: 1-2 sentence Newton persona intro, friendly, references the topic
- For each question:
  - question: plain English question text, no LaTeX
  - latex: OPTIONAL raw LaTeX expression only (NO delimiters — no \\( \\) \\[ \\] $$ — just the bare expression e.g. "2(x+3)-5=15"). Omit if no formula needed.
  - options: exactly 4 options labeled "A", "B", "C", "D"
    - text: answer text, use LaTeX where appropriate (e.g. "\\\\frac{1}{5}e^{5x} + C")
    - correct: true for exactly ONE option (the mathematically verified correct one)
    - explanation: for correct option explain the solution steps; for wrong options explain the specific mistake that leads there
  - hint: helpful hint without giving the answer away
- Vary difficulty: start easier, increase toward the end
- Use proper LaTeX: \\\\frac{a}{b}, \\\\int, ^{}, _{}, \\\\sqrt{}`,
	});

	return Response.json(object);
}
