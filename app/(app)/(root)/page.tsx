import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";

export default function Page() {
	return (
		<main className="flex min-h-svh flex-col">
			<HeroSection />
			<FeaturesSection />
		</main>
	);
}
