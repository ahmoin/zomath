"use client";

import { Benefits } from "@/components/sections/competition/benefits";
import { Competitions } from "@/components/sections/competition/competitions";
import { Cta } from "@/components/sections/competition/cta";
import { Features } from "@/components/sections/competition/features";
import { Hero } from "@/components/sections/competition/hero";
import { Testimonials } from "@/components/sections/competition/testimonials";
import { Topics } from "@/components/sections/competition/topics";
import { Training } from "@/components/sections/competition/training";

export function CompetitionSection() {
	return (
		<main>
			<Hero />
			<Competitions />
			<Training />
			<Features />
			<Topics />
			<Testimonials />
			<Benefits />
			<Cta />
		</main>
	);
}
