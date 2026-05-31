import { headers } from "next/headers";
import { PricingSection } from "@/components/pricing-section";
import { auth } from "@/lib/auth";

export default async function PricingPage() {
	const session = await auth.api.getSession({ headers: await headers() });
	const isLoggedIn = !!session?.user;
	const isPlus = (session?.user as { plan?: string } | undefined)?.plan === "plus";

	return (
		<main className="flex min-h-svh flex-col items-center justify-center">
			<PricingSection isLoggedIn={isLoggedIn} isPlus={isPlus} />
		</main>
	);
}
