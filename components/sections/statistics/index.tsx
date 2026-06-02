"use client";

import { Benefits } from "@/components/sections/statistics/benefits";
import { Cta } from "@/components/sections/statistics/cta";
import { Features } from "@/components/sections/statistics/features";
import { Hero } from "@/components/sections/statistics/hero";
import { Process } from "@/components/sections/statistics/process";
import { Testimonials } from "@/components/sections/statistics/testimonials";
import { Topics } from "@/components/sections/statistics/topics";

export function StatisticsSection() {
	return (
		<main>
			<Hero />
			<Features />
			<Process />
			<Topics />
			<Benefits />
			<Testimonials />
			<Cta />
		</main>
	);
}
