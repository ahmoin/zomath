"use client";

import { AtAGlance } from "@/components/sections/privacy/at-a-glance";
import { Contact } from "@/components/sections/privacy/contact";
import { Cta } from "@/components/sections/privacy/cta";
import { Faq } from "@/components/sections/privacy/faq";
import { Hero } from "@/components/sections/privacy/hero";
import { LegalFooter } from "@/components/sections/privacy/legal-footer";
import { PolicyContent } from "@/components/sections/privacy/policy-content";
import { Principles } from "@/components/sections/privacy/principles";
import { Separator } from "@/components/ui/separator";

export function PrivacySection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Principles />
			<AtAGlance />
			<Separator />
			<PolicyContent />
			<Faq />
			<Contact />
			<Cta />
			<LegalFooter />
		</main>
	);
}
