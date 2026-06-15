"use client";

import { Comparison } from "@/components/sections/concepts/comparison";
import { ConceptChain } from "@/components/sections/concepts/concept-chain";
import { Cta } from "@/components/sections/concepts/cta";
import { Faq } from "@/components/sections/concepts/faq";
import { Hero } from "@/components/sections/concepts/hero";
import { HowItWorks } from "@/components/sections/concepts/how-it-works";
import { MapVisual } from "@/components/sections/concepts/map-visual";
import { Newton } from "@/components/sections/concepts/newton";
import { Subjects } from "@/components/sections/concepts/subjects";
import { UseCases } from "@/components/sections/concepts/use-cases";
import { WhyMap } from "@/components/sections/concepts/why-map";
import { Separator } from "@/components/ui/separator";

export function ConceptsSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<MapVisual />
			<Comparison />
			<Separator />
			<HowItWorks />
			<WhyMap />
			<Subjects />
			<Separator />
			<UseCases />
			<Newton />
			<ConceptChain />
			<Separator />
			<Faq />
			<Cta />
		</main>
	);
}
