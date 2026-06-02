"use client";

import { Cta } from "@/components/sections/about/cta";
import { Faq } from "@/components/sections/about/faq";
import { Hero } from "@/components/sections/about/hero";
import { Newton } from "@/components/sections/about/newton";
import { Personas } from "@/components/sections/about/personas";
import { Problem } from "@/components/sections/about/problem";
import { Values } from "@/components/sections/about/values";

export function AboutSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Problem />
			<Newton />
			<Values />
			<Personas />
			<Faq />
			<Cta />
		</main>
	);
}
