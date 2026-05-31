"use client";

import { QuestionIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { faqItems } from "@/components/sections/contact/data";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
	return (
		<section className="py-24 lg:py-32 bg-muted">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
					<div className="lg:col-span-2">
						<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
							<HugeiconsIcon
								icon={QuestionIcon}
								className="size-5"
								strokeWidth={1.5}
							/>
						</div>
						<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
							Frequently asked questions
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Before you write, check if your question is answered below. We
							keep this list updated based on what learners ask most often.
						</p>
					</div>
					<div className="lg:col-span-3">
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
			</div>
		</section>
	);
}
