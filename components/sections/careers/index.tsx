"use client";

import { Benefits } from "@/components/sections/careers/benefits";
import { Cta } from "@/components/sections/careers/cta";
import { Culture } from "@/components/sections/careers/culture";
import { Hero } from "@/components/sections/careers/hero";
import { Mission } from "@/components/sections/careers/mission";
import { Openings } from "@/components/sections/careers/openings";
import { Process } from "@/components/sections/careers/process";
import { Separator } from "@/components/ui/separator";

export function CareersSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Mission />
			<Culture />
			<Separator />
			<Benefits />
			<Openings />
			<Process />
			<Separator />
			<Cta />
		</main>
	);
}
