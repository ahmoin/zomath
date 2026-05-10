import { desc, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { createJournalSchema } from "@/app/api/journals/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ChatbotError } from "@/lib/errors";
import { journal } from "@/lib/schema";

export async function GET() {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	const journals = await db
		.select()
		.from(journal)
		.where(eq(journal.userId, session.user.id))
		.orderBy(desc(journal.updatedAt));

	return Response.json(journals);
}

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	let body: { projectId?: string };
	try {
		body = createJournalSchema.parse(await request.json().catch(() => ({})));
	} catch (_) {
		return new ChatbotError("bad_request:api").toResponse();
	}

	const id = crypto.randomUUID();
	const [created] = await db
		.insert(journal)
		.values({ id, userId: session.user.id, projectId: body.projectId ?? null })
		.returning();

	return Response.json(created, { status: 201 });
}
