import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { newtonChat } from "@/lib/schema";
import { ChatbotError } from "@/lib/errors";

export async function POST(request: Request) {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) return new ChatbotError("unauthorized:auth").toResponse();

	const { id, title, messages } = await request.json();
	if (!id || !title) return new ChatbotError("bad_request:api").toResponse();

	const serialized = JSON.stringify(messages ?? []);

	const existing = await db
		.select({ id: newtonChat.id })
		.from(newtonChat)
		.where(eq(newtonChat.id, id))
		.then((r) => r[0] ?? null);

	if (existing) {
		await db
			.update(newtonChat)
			.set({ messages: serialized, updatedAt: new Date() })
			.where(eq(newtonChat.id, id));
	} else {
		await db.insert(newtonChat).values({
			id,
			title: title.slice(0, 100),
			messages: serialized,
			userId: session.user.id,
		});
	}

	return Response.json({ ok: true });
}
