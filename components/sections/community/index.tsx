"use client";

import { Challenges } from "@/components/sections/community/challenges";
import { Cta } from "@/components/sections/community/cta";
import { Faq } from "@/components/sections/community/faq";
import { Features } from "@/components/sections/community/features";
import { Hero } from "@/components/sections/community/hero";
import { Leaderboard } from "@/components/sections/community/leaderboard";
import { Stats } from "@/components/sections/community/stats";
import { Testimonials } from "@/components/sections/community/testimonials";
import { Values } from "@/components/sections/community/values";
import { Separator } from "@/components/ui/separator";

export function CommunitySection() {
	return (
		<main>
			<Hero />
			<Separator />
			<Stats />
			<Separator />
			<Features />
			<Separator />
			<Challenges />
			<Leaderboard />
			<Separator />
			<Testimonials />
			<Separator />
			<Values />
			<Separator />
			<Faq />
			<Cta />
		</main>
	);
}
