"use client";

import { useState } from "react";
import { Browse } from "@/components/sections/help/browse";
import { Contact } from "@/components/sections/help/contact";
import { Cta } from "@/components/sections/help/cta";
import { Faq } from "@/components/sections/help/faq";
import { FeatureGuides } from "@/components/sections/help/feature-guides";
import { Hero } from "@/components/sections/help/hero";
import { QuickStart } from "@/components/sections/help/quick-start";
import { Shortcuts } from "@/components/sections/help/shortcuts";
import { Troubleshooting } from "@/components/sections/help/troubleshooting";

export function HelpSection() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<main className="flex flex-col">
			<Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<Browse />
			<QuickStart />
			<FeatureGuides />
			<Troubleshooting />
			<Shortcuts />
			<Faq searchQuery={searchQuery} />
			<Contact />
			<Cta />
		</main>
	);
}
