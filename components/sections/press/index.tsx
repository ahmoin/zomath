"use client";

import { About } from "@/components/sections/press/about";
import { Contacts } from "@/components/sections/press/contacts";
import { Cta } from "@/components/sections/press/cta";
import { Facts } from "@/components/sections/press/facts";
import { Hero } from "@/components/sections/press/hero";
import { Media } from "@/components/sections/press/media";
import { PressKit } from "@/components/sections/press/press-kit";
import { Quotes } from "@/components/sections/press/quotes";
import { Releases } from "@/components/sections/press/releases";
import { Speaking } from "@/components/sections/press/speaking";
import { Separator } from "@/components/ui/separator";

export function PressSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Facts />
			<About />
			<Separator />
			<Quotes />
			<Separator />
			<PressKit />
			<Releases />
			<Separator />
			<Media />
			<Speaking />
			<Separator />
			<Contacts />
			<Cta />
		</main>
	);
}
