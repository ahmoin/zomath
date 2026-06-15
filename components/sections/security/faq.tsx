"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/components/sections/security/data";

export function Faq() {
	return (
		<section id="faq" className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-12">
						<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
							FAQ
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Common security questions
						</h2>
						<p className="mt-4 text-muted-foreground max-w-xl mx-auto">
							We would rather over-communicate about security than leave you
							guessing. If your question is not here, reach out directly.
						</p>
					</div>
					<Accordion type="single" collapsible className="w-full">
						{faqItems.map((item) => (
							<AccordionItem key={item.value} value={item.value}>
								<AccordionTrigger>{item.question}</AccordionTrigger>
								<AccordionContent>{item.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
