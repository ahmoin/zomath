import { jsonSchema, tool } from "ai";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { journal } from "@/lib/schema";

export const listJournals = ({ userId }: { userId: string }) =>
	tool({
		description:
			"List the user's journals with their IDs and titles. Use this to find a journal ID before updating or adding to a project.",
		inputSchema: jsonSchema<Record<string, never>>({
			type: "object",
			properties: {},
		}),
		execute: async () => {
			return db
				.select({
					id: journal.id,
					title: journal.title,
					projectId: journal.projectId,
					updatedAt: journal.updatedAt,
				})
				.from(journal)
				.where(eq(journal.userId, userId));
		},
	});
