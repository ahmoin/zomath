"use client";

import { Audience } from "@/components/sections/features/audience";
import { CoreFeatures } from "@/components/sections/features/core-features";
import { Cta } from "@/components/sections/features/cta";
import { Differentiators } from "@/components/sections/features/differentiators";
import { Faq } from "@/components/sections/features/faq";
import { Hero } from "@/components/sections/features/hero";
import { Newton } from "@/components/sections/features/newton";

export function FeaturesSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<CoreFeatures />
			<Newton />
			<Differentiators />
			<Audience />
			<Faq />
			<Cta />
		</main>
	);
}
