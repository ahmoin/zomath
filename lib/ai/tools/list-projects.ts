import { jsonSchema, tool } from "ai";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { project } from "@/lib/schema";

export const listProjects = ({ userId }: { userId: string }) =>
	tool({
		description: "List the user's projects with their IDs and titles.",
		inputSchema: jsonSchema<Record<string, never>>({
			type: "object",
			properties: {},
		}),
		execute: async () => {
			return db
				.select({
					id: project.id,
					title: project.title,
					updatedAt: project.updatedAt,
				})
				.from(project)
				.where(eq(project.userId, userId));
		},
	});
