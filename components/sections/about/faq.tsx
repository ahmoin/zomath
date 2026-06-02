"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/components/sections/about/data";

export function Faq() {
	return (
		<section className="bg-muted py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl">
					<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
						Common questions
					</p>
					<h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						About Zomath and Newton
					</h2>

					<Accordion type="single" collapsible className="space-y-3">
						{faqItems.map((item) => (
							<AccordionItem
								key={item.value}
								value={item.value}
								className="rounded-xl border bg-background px-6"
							>
								<AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
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
