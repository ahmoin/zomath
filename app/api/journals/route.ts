import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { journal } from "@/lib/schema";

export async function GET() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const journals = await db
		.select()
		.from(journal)
		.where(eq(journal.userId, session.user.id))
		.orderBy(desc(journal.updatedAt));

	return Response.json(journals);
}

export async function POST() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new Response("Unauthorized", { status: 401 });

	const id = crypto.randomUUID();
	const [created] = await db
		.insert(journal)
		.values({ id, userId: session.user.id })
		.returning();

	return Response.json(created, { status: 201 });
}
