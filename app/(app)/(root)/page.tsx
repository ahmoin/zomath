import { AudienceSection } from "@/components/sections/audience";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { StackSection } from "@/components/sections/stack";
import { TestimonialSection } from "@/components/sections/testimonial";
import { WhySection } from "@/components/sections/why";

export default function Page() {
	return (
		<main className="flex min-h-svh flex-col">
			<HeroSection />
			<FeaturesSection />
			<WhySection />
			<TestimonialSection
				quote="I've never understood math this deeply. Newton explains the why behind every step, not just the answer."
				name="Pierre"
				role="High school junior"
			/>
			<AudienceSection />
			<StackSection />
			<TestimonialSection
				quote="Newton noticed I kept making the same algebra mistake before I even realized it. Now I catch myself every time. It's like having a tutor who actually pays attention."
				name="Alex"
				role="High school sophomore"
			/>
		</main>
	);
}
