"use client";

import { faqs } from "@/components/sections/schools-marketing/data";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-muted-foreground">
						Common questions from school administrators and teachers.
					</p>
				</div>
				<div className="mx-auto max-w-3xl">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq) => (
							<AccordionItem key={faq.question} value={faq.question}>
								<AccordionTrigger className="text-left text-foreground">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
