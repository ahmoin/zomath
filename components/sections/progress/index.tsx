"use client";

import { Comparison } from "@/components/sections/progress/comparison";
import { Cta } from "@/components/sections/progress/cta";
import { Faq } from "@/components/sections/progress/faq";
import { Features } from "@/components/sections/progress/features";
import { ForLearners } from "@/components/sections/progress/for-learners";
import { Hero } from "@/components/sections/progress/hero";
import { HowItWorks } from "@/components/sections/progress/how-it-works";
import { MasteryLevels } from "@/components/sections/progress/mastery-levels";
import { Metrics } from "@/components/sections/progress/metrics";
import { ProofStats } from "@/components/sections/progress/proof-stats";
import { Weekly } from "@/components/sections/progress/weekly";
import { Separator } from "@/components/ui/separator";

export function ProgressSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Separator />
			<Metrics />
			<Separator />
			<Comparison />
			<Separator />
			<HowItWorks />
			<Separator />
			<Features />
			<Separator />
			<MasteryLevels />
			<Separator />
			<ForLearners />
			<Separator />
			<ProofStats />
			<Separator />
			<Faq />
			<Separator />
			<Weekly />
			<Separator />
			<Cta />
		</main>
	);
}
