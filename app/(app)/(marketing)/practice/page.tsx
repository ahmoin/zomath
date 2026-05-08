import { headers } from "next/headers";
import { PracticeHeroSection } from "@/components/sections/practice-hero";
import { PracticeMarketingSection } from "@/components/sections/practice-marketing";
import { auth } from "@/lib/auth";

export default async function PracticePage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) {
		return <PracticeHeroSection name={session.user.name} />;
	}

	return <PracticeMarketingSection />;
}
