import { Pool } from "@neondatabase/serverless";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
	database: new Pool({ connectionString: process.env.DATABASE_URL }),
	baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
	emailAndPassword: { enabled: true },
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		},
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		},
	},
});
