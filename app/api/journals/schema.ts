import { z } from "zod";

export const createJournalSchema = z.object({
	projectId: z.string().optional(),
});

export type CreateJournalBody = z.infer<typeof createJournalSchema>;

export const updateJournalSchema = z.object({
	title: z.string().min(1).max(500).optional(),
	content: z.string().max(100000).optional(),
});

export type UpdateJournalBody = z.infer<typeof updateJournalSchema>;
