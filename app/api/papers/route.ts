import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { paper } from "@/lib/schema";

export async function GET() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const papers = await db
		.select()
		.from(paper)
		.where(eq(paper.userId, session.user.id))
		.orderBy(desc(paper.updatedAt));

	return Response.json(papers);
}

export async function POST() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const id = crypto.randomUUID();
	const [created] = await db
		.insert(paper)
		.values({ id, userId: session.user.id })
		.returning();

	return Response.json(created, { status: 201 });
}
