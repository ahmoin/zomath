"use client";

import { Cta } from "@/components/sections/algebra/cta";
import { Faq } from "@/components/sections/algebra/faq";
import { Features } from "@/components/sections/algebra/features";
import { Hero } from "@/components/sections/algebra/hero";
import { LearningPath } from "@/components/sections/algebra/learning-path";
import { Stats } from "@/components/sections/algebra/stats";
import { Testimonials } from "@/components/sections/algebra/testimonials";
import { Topics } from "@/components/sections/algebra/topics";
import { Separator } from "@/components/ui/separator";

export function AlgebraSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Separator />
			<Topics />
			<Separator />
			<Features />
			<Separator />
			<LearningPath />
			<Separator />
			<Stats />
			<Separator />
			<Testimonials />
			<Separator />
			<Faq />
			<Separator />
			<Cta />
		</main>
	);
}
