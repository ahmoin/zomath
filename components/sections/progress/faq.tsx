"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/components/sections/progress/data";

export function Faq() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Common questions about progress tracking
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Everything you want to know about how Zomath measures and reports
						your learning.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl">
					<Accordion type="single" collapsible className="flex flex-col gap-2">
						{faqItems.map((item) => (
							<AccordionItem
								key={item.value}
								value={item.value}
								className="rounded-xl border border-border bg-background px-6"
							>
								<AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-sm text-muted-foreground leading-relaxed">
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
