import { tool } from "ai";
import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/lib/db";
import { project } from "@/lib/schema";

export const readProject = ({ userId }: { userId: string }) =>
	tool({
		description: "Read a project and all its journals.",
		inputSchema: z.object({
			projectId: z.string().describe("The ID of the project to read"),
		}),
		execute: async ({ projectId }) => {
			const entry = await db.query.project.findFirst({
				where: and(eq(project.id, projectId), eq(project.userId, userId)),
				with: {
					journals: { columns: { id: true, title: true, updatedAt: true } },
				},
			});
			if (!entry) return { error: "Project not found." };
			return entry;
		},
	});
