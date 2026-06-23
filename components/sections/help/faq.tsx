"use client";

import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/components/sections/help/data";

interface FaqProps {
	searchQuery: string;
}

export function Faq({ searchQuery }: FaqProps) {
	const filteredFaq = faqItems.filter(
		(item) =>
			item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const displayedFaq = searchQuery ? filteredFaq : faqItems;

	return (
		<section id="faq" className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-12">
					<p className="text-sm font-medium text-primary mb-2">FAQ</p>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Frequently asked questions
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Quick answers to the things students and parents ask us most.
					</p>
				</div>
				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="space-y-3">
						{displayedFaq.map((item) => (
							<AccordionItem
								key={item.question}
								value={item.question}
								className="border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:bg-card transition-colors"
							>
								<AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-4">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed pb-4">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
					{searchQuery && filteredFaq.length === 0 && (
						<div className="text-center py-16">
							<div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
								<HugeiconsIcon
									icon={Search01Icon}
									className="size-5 text-muted-foreground"
									strokeWidth={1.5}
								/>
							</div>
							<p className="text-base font-medium text-foreground mb-1">
								No results found for &quot;{searchQuery}&quot;
							</p>
							<p className="text-sm text-muted-foreground">
								Try different keywords or browse all questions above by clearing
								your search.
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
