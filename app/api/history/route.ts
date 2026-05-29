import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { journal, newtonChat, practice, project } from "@/lib/schema";

export async function GET() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return Response.json({ items: [] });

	const userId = session.user.id;

	const [chats, journals, practices, projects] = await Promise.all([
		db.select({ id: newtonChat.id, title: newtonChat.title, updatedAt: newtonChat.updatedAt })
			.from(newtonChat).where(eq(newtonChat.userId, userId)).orderBy(desc(newtonChat.updatedAt)).limit(5),
		db.select({ id: journal.id, title: journal.title, updatedAt: journal.updatedAt })
			.from(journal).where(eq(journal.userId, userId)).orderBy(desc(journal.updatedAt)).limit(5),
		db.select({ id: practice.id, title: practice.title, updatedAt: practice.updatedAt })
			.from(practice).where(eq(practice.userId, userId)).orderBy(desc(practice.updatedAt)).limit(5),
		db.select({ id: project.id, title: project.title, updatedAt: project.updatedAt })
			.from(project).where(eq(project.userId, userId)).orderBy(desc(project.updatedAt)).limit(5),
	]);

	const all = [
		...chats.map((c) => ({ ...c, type: "chat" as const, href: `/newton/${c.id}` })),
		...journals.map((j) => ({ ...j, type: "journal" as const, href: `/journals/${j.id}` })),
		...practices.map((p) => ({ ...p, type: "practice" as const, href: `/practice/saved/${p.id}` })),
		...projects.map((p) => ({ ...p, type: "project" as const, href: `/projects/${p.id}` })),
	]
		.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
		.slice(0, 5);

	return Response.json({ items: all });
}
