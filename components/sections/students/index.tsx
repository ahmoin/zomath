"use client";

import { Cta } from "@/components/sections/students/cta";
import { Faq } from "@/components/sections/students/faq";
import { Features } from "@/components/sections/students/features";
import { Hero } from "@/components/sections/students/hero";
import { Newton } from "@/components/sections/students/newton";
import { Steps } from "@/components/sections/students/steps";
import { Subjects } from "@/components/sections/students/subjects";
import { Testimonials } from "@/components/sections/students/testimonials";

export function StudentsSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Features />
			<Newton />
			<Steps />
			<Subjects />
			<Testimonials />
			<Faq />
			<Cta />
		</main>
	);
}
