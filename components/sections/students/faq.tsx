"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/components/sections/students/data";

export function Faq() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight text-center">
						Common questions
					</h2>
					<p className="mt-4 text-muted-foreground text-lg text-center mb-10">
						Everything you want to know before getting started.
					</p>
					<Accordion type="single" collapsible className="w-full">
						{faqItems.map((item) => (
							<AccordionItem key={item.question} value={item.question}>
								<AccordionTrigger className="text-left text-foreground">
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
