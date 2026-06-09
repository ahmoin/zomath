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

const matchUpPairSchema = z.object({
	keyword: z.string(),
	definition: z.string(),
});

export const matchUpSchema = z.object({
	title: z.string(),
	intro: z.string(),
	pairs: z.array(matchUpPairSchema),
});

export type MatchUp = z.infer<typeof matchUpSchema>;

const flashCardSchema_ = z.object({
	front: z.string(),
	back: z.string(),
	latex: z.string().optional(),
});

export const flashCardSchema = z.object({
	title: z.string(),
	intro: z.string(),
	cards: z.array(flashCardSchema_),
});

export type FlashCardDeck = z.infer<typeof flashCardSchema>;

export const postRequestBodySchema = z.object({
	topic: z.string().min(1).max(200),
	formatId: z.string().optional().default("quiz"),
	count: z.number().int().min(1).max(50).optional().default(6),
});

export type PostRequestBody = z.infer<typeof postRequestBodySchema>;
