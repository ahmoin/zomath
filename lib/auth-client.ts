import { sentinelClient } from "@better-auth/infra/client";
import { polarClient } from "@polar-sh/better-auth/client";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	plugins: [sentinelClient(), polarClient()],
});

export type Session = typeof authClient.$Infer.Session;
