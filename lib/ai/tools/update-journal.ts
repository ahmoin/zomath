import { jsonSchema, tool } from "ai";
import { eq } from "drizzle-orm";
import { markdownToLexicalJson } from "@/lib/ai/lexical";
import { db } from "@/lib/db";
import { journal } from "@/lib/schema";

export const updateJournal = (_: { userId: string }) =>
	tool({
		description:
			"Update the content (and optionally title) of an existing journal. Use this when the user asks to edit, modify, add to, or fix an existing journal. Call listJournals first to find the journal ID if you don't have it.",
		inputSchema: jsonSchema<{
			journalId: string;
			content: string;
			title?: string;
		}>({
			type: "object",
			properties: {
				journalId: {
					type: "string",
					description: "The ID of the journal to update",
				},
				content: {
					type: "string",
					description: "The full new markdown content of the journal",
				},
				title: { type: "string", description: "Optional new title" },
			},
			required: ["journalId", "content"],
		}),
		execute: async ({
			journalId,
			content,
			title,
		}: {
			journalId: string;
			content: string;
			title?: string;
		}) => {
			const existing = await db
				.select({ title: journal.title })
				.from(journal)
				.where(eq(journal.id, journalId))
				.then((r) => r[0] ?? null);
			if (!existing)
				return { journalId, title: title ?? "Unknown", updated: false };
			await db
				.update(journal)
				.set({
					content: markdownToLexicalJson(content),
					...(title ? { title } : {}),
				})
				.where(eq(journal.id, journalId));
			return { journalId, title: title ?? existing.title, updated: true };
		},
	});
