"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/components/sections/algebra/data";

export function Faq() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Common questions about learning algebra on Zomath
						</h2>
					</div>
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
