"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/components/sections/features/data";

export function Faq() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto mb-12">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Frequently asked questions
					</h2>
					<p className="text-lg text-muted-foreground">
						Common questions about Zomath and how it works.
					</p>
				</div>
				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="space-y-3">
						{faqItems.map((item) => (
							<AccordionItem
								key={item.question}
								value={item.question}
								className="bg-background border border-border rounded-xl px-6"
							>
								<AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
