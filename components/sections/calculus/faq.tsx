"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/components/sections/calculus/data";

export function Faq() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-12">
					<p className="text-sm font-medium text-primary mb-3">FAQ</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Common questions about learning calculus on Zomath
					</h2>
				</div>
				<div className="max-w-2xl">
					<Accordion type="single" collapsible className="flex flex-col gap-3">
						{faqs.map((faq) => (
							<AccordionItem
								key={faq.question}
								value={faq.question}
								className="rounded-xl border bg-background px-6"
							>
								<AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
