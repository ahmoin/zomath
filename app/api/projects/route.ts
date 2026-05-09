import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { project } from "@/lib/schema";

export async function GET() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const projects = await db
		.select()
		.from(project)
		.where(eq(project.userId, session.user.id))
		.orderBy(desc(project.updatedAt));

	return Response.json(projects);
}

export async function POST() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const id = crypto.randomUUID();
	const [created] = await db
		.insert(project)
		.values({ id, userId: session.user.id })
		.returning();

	return Response.json(created, { status: 201 });
}
