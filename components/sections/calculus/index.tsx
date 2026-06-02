"use client";

import { ConceptMap } from "@/components/sections/calculus/concept-map";
import { Cta } from "@/components/sections/calculus/cta";
import { Faq } from "@/components/sections/calculus/faq";
import { Hero } from "@/components/sections/calculus/hero";
import { HowItWorks } from "@/components/sections/calculus/how-it-works";
import { Practice } from "@/components/sections/calculus/practice";
import { Struggles } from "@/components/sections/calculus/struggles";
import { Topics } from "@/components/sections/calculus/topics";
import { Separator } from "@/components/ui/separator";

export function CalculusSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Separator />
			<HowItWorks />
			<Separator />
			<Topics />
			<Separator />
			<Struggles />
			<Separator />
			<ConceptMap />
			<Separator />
			<Practice />
			<Separator />
			<Faq />
			<Separator />
			<Cta />
			<div className="h-8" />
		</main>
	);
}
