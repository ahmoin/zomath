import { tool } from "ai";
import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/lib/db";
import { journal } from "@/lib/schema";
import { parseJournalContent } from "@/lib/utils";

export type SourceItem = {
	number: string;
	title: string;
	url: string;
	type: "web" | "journal";
};
export type SourceTracker = { sources: SourceItem[]; count: number };

export const readJournal = ({
	userId,
	tracker,
}: {
	userId: string;
	tracker: SourceTracker;
}) =>
	tool({
		description: "Read the full content of a specific journal by ID.",
		inputSchema: z.object({
			journalId: z.string().describe("The ID of the journal to read"),
		}),
		execute: async ({ journalId }) => {
			const entry = await db.query.journal.findFirst({
				where: and(eq(journal.id, journalId), eq(journal.userId, userId)),
			});
			if (!entry) return { error: "Journal not found." };
			tracker.count += 1;
			tracker.sources.push({
				number: String(tracker.count),
				title: entry.title,
				url: `/journals/${entry.id}`,
				type: "journal",
			});
			return {
				sourceNumber: tracker.count,
				title: entry.title,
				content: parseJournalContent(entry.content),
			};
		},
	});
