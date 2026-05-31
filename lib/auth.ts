import { dash } from "@better-auth/infra";
import { checkout, polar, portal, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import * as schema from "@/lib/schema";
import { user } from "@/lib/schema";

const polarClient = new Polar({
	accessToken: process.env.POLAR_ACCESS_TOKEN ?? "",
	server: process.env.NODE_ENV === "production" ? "production" : "sandbox",
});

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",
		schema,
	}),
	plugins: [
		dash(),
		polar({
			client: polarClient,
			createCustomerOnSignUp: true,
			use: [
				checkout({
					products: [
						{
							productId: process.env.POLAR_PLUS_MONTHLY_ID ?? "",
							slug: "plus-monthly",
						},
						{
							productId: process.env.POLAR_PLUS_YEARLY_ID ?? "",
							slug: "plus-yearly",
						},
					],
					successUrl: "/dashboard?checkout=success",
					authenticatedUsersOnly: true,
				}),
				portal(),
				webhooks({
					secret: process.env.POLAR_WEBHOOK_SECRET ?? "",
					onSubscriptionActive: async (payload) => {
						const userId = payload.data.customer.externalId;
						if (!userId) return;
						await db
							.update(user)
							.set({ plan: "plus" })
							.where(eq(user.id, userId));
					},
					onSubscriptionCanceled: async (payload) => {
						const userId = payload.data.customer.externalId;
						if (!userId) return;
						await db
							.update(user)
							.set({ plan: "free" })
							.where(eq(user.id, userId));
					},
					onSubscriptionRevoked: async (payload) => {
						const userId = payload.data.customer.externalId;
						if (!userId) return;
						await db
							.update(user)
							.set({ plan: "free" })
							.where(eq(user.id, userId));
					},
				}),
			],
		}),
	],
	baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
	trustedOrigins: ["http://localhost:3000", "https://zomath.vercel.app"],
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
});
