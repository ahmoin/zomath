import { headers } from "next/headers";
import { SolveInterface } from "@/components/sections/solve-interface";
import { SolveMarketing } from "@/components/sections/solve-marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@/lib/auth";

export default async function SolvePage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) {
		return (
			<div className="flex min-h-svh flex-col">
				<SiteHeader />
				<SolveInterface />
				<SiteFooter />
			</div>
		);
	}

	return (
		<div className="flex min-h-svh flex-col">
			<SiteHeader />
			<SolveMarketing />
			<SiteFooter />
		</div>
	);
}
