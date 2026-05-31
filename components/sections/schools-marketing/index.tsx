"use client";

import { Contact } from "@/components/sections/schools-marketing/contact";
import { Cta } from "@/components/sections/schools-marketing/cta";
import { EducatorTools } from "@/components/sections/schools-marketing/educator-tools";
import { Faq } from "@/components/sections/schools-marketing/faq";
import { Features } from "@/components/sections/schools-marketing/features";
import { Hero } from "@/components/sections/schools-marketing/hero";
import { Implementation } from "@/components/sections/schools-marketing/implementation";
import { Integrations } from "@/components/sections/schools-marketing/integrations";
import { Newton } from "@/components/sections/schools-marketing/newton";
import { Pricing } from "@/components/sections/schools-marketing/pricing";
import { Stats } from "@/components/sections/schools-marketing/stats";
import { Testimonials } from "@/components/sections/schools-marketing/testimonials";
import { Separator } from "@/components/ui/separator";

export function SchoolsMarketingSection() {
	return (
		<main className="flex min-h-screen flex-col">
			<Hero />
			<Stats />
			<Features />
			<Newton />
			<EducatorTools />
			<Integrations />
			<Implementation />
			<Testimonials />
			<Pricing />
			<Faq />
			<Separator />
			<Contact />
			<Cta />
		</main>
	);
}
