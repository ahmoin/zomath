import { headers } from "next/headers";
import { SolveInterface } from "@/components/sections/solve-interface";
import { SolveMarketing } from "@/components/sections/solve-marketing";
import { auth } from "@/lib/auth";

export default async function SolvePage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) {
		return (
			<>
				<div className="h-8" />
				<SolveInterface />
			</>
		);
	}

	return <SolveMarketing />;
}
