import { z } from "zod";

const optionSchema = z.object({
	label: z.string(),
	text: z.string(),
	correct: z.boolean(),
	explanation: z.string(),
});

const questionSchema = z.object({
	question: z.string(),
	latex: z.string().optional(),
	options: z.array(optionSchema),
	hint: z.string(),
});

export const quizSchema = z.object({
	title: z.string(),
	intro: z.string(),
	questions: z.array(questionSchema),
});

export type Quiz = z.infer<typeof quizSchema>;

export const postRequestBodySchema = z.object({
	topic: z.string().min(1).max(200),
	count: z.number().int().min(1).max(20).optional().default(6),
});

export type PostRequestBody = z.infer<typeof postRequestBodySchema>;
