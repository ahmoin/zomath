"use client";

import { AuctionIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/components/sections/privacy/data";

export function Faq() {
	return (
		<section id="faq" className="py-24 lg:py-32 bg-muted/30 scroll-mt-24">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl">
					<div className="flex items-center gap-3 mb-4">
						<div className="flex items-center justify-center size-10 rounded-xl bg-primary/10">
							<HugeiconsIcon
								icon={AuctionIcon}
								className="size-5 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<h2 className="text-2xl font-semibold tracking-tight text-foreground">
							Frequently Asked Questions
						</h2>
					</div>
					<p className="text-muted-foreground mb-8">
						Common questions about how Zomath handles your data and privacy.
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
