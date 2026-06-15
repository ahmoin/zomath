"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/components/sections/concepts/data";

export function Faq() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4 text-center">
						Frequently asked questions
					</h2>
					<p className="text-lg text-muted-foreground text-center mb-12">
						Everything you want to know about the Concept Map.
					</p>
					<Accordion type="single" collapsible className="w-full">
						{faqItems.map((item) => (
							<AccordionItem key={item.question} value={item.question}>
								<AccordionTrigger className="text-left text-foreground font-medium">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
