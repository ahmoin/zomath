"use client";

import { Channels } from "@/components/sections/contact/channels";
import { Cta } from "@/components/sections/contact/cta";
import { Faq } from "@/components/sections/contact/faq";
import { ContactForm } from "@/components/sections/contact/form";
import { Hero } from "@/components/sections/contact/hero";
import { Process } from "@/components/sections/contact/process";
import { Resources } from "@/components/sections/contact/resources";

export function ContactSection() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Channels />
			<ContactForm />
			<Process />
			<Resources />
			<Faq />
			<Cta />
		</main>
	);
}
