import { jsonSchema, tool } from "ai";
import { db } from "@/lib/db";
import { practice } from "@/lib/schema";

export const createPractice = ({ userId }: { userId: string }) =>
	tool({
		description:
			"Create a practice quiz for the user in Zomath. Call this when the user asks to 'make a practice', 'create a quiz', 'test me on', or similar. Generate multiple-choice questions with 4 options each, one correct answer, an explanation per option, and a hint per question.",
		inputSchema: jsonSchema<{
			title: string;
			topic: string;
			format: string;
			questions: {
				question: string;
				hint: string;
				options: {
					label: string;
					text: string;
					correct: boolean;
					explanation: string;
				}[];
			}[];
		}>({
			type: "object",
			properties: {
				title: { type: "string", description: "Short descriptive title" },
				topic: { type: "string", description: "The subject being practiced" },
				format: {
					type: "string",
					enum: ["quiz", "flashcard"],
					description: "Practice format",
				},
				questions: {
					type: "array",
					description: "6-10 questions",
					items: {
						type: "object",
						properties: {
							question: { type: "string" },
							hint: { type: "string" },
							options: {
								type: "array",
								items: {
									type: "object",
									properties: {
										label: { type: "string" },
										text: { type: "string" },
										correct: { type: "boolean" },
										explanation: { type: "string" },
									},
									required: ["label", "text", "correct", "explanation"],
								},
							},
						},
						required: ["question", "hint", "options"],
					},
				},
			},
			required: ["title", "topic", "format", "questions"],
		}),
		execute: async ({
			title,
			topic,
			format,
			questions,
		}: {
			title: string;
			topic: string;
			format: string;
			questions: object[];
		}) => {
			const id = crypto.randomUUID();
			await db.insert(practice).values({
				id,
				userId,
				title,
				topic,
				format,
				questions: JSON.stringify(questions),
			});
			return { practiceId: id, title };
		},
	});
