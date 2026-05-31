import { and, eq, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { usageLog } from "@/lib/schema";

export const FREE_LIMITS = {
	newton: 10,
	solve: 5,
	practice: 3,
} as const;

export type UsageFeature = keyof typeof FREE_LIMITS;

export async function checkAndIncrementUsage(
	userId: string,
	feature: UsageFeature,
): Promise<{ allowed: boolean; remaining: number }> {
	const today = new Date().toISOString().split("T")[0];
	const limit = FREE_LIMITS[feature];

	const [row] = await db
		.select({ count: usageLog.count })
		.from(usageLog)
		.where(
			and(
				eq(usageLog.userId, userId),
				eq(usageLog.feature, feature),
				eq(usageLog.date, today),
			),
		);

	const current = row?.count ?? 0;
	if (current >= limit) {
		return { allowed: false, remaining: 0 };
	}

	await db
		.insert(usageLog)
		.values({ id: crypto.randomUUID(), userId, feature, date: today, count: 1 })
		.onConflictDoUpdate({
			target: [usageLog.userId, usageLog.feature, usageLog.date],
			set: { count: sql`${usageLog.count} + 1` },
		});

	return { allowed: true, remaining: limit - current - 1 };
}
