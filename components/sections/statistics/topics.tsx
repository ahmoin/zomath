"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { topics } from "@/components/sections/statistics/data";

export function Topics() {
	return (
		<section id="topics" className="py-24 lg:py-32 bg-muted">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
					<div>
						<p className="text-sm font-medium text-primary mb-3">
							Comprehensive Syllabus
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Everything from the mean to the margin of error.
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Whether you are building a foundation in probability or
							preparing for the rigor of the AP Statistics exam, our
							curriculum is designed to connect the dots between data
							collection and statistical inference.
						</p>
					</div>
					<div>
						<Accordion type="single" collapsible className="w-full">
							{topics.map((topic, i) => (
								<AccordionItem key={topic.title} value={`topic-${i}`}>
									<AccordionTrigger className="text-lg font-semibold">
										{topic.title}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground leading-relaxed">
										{topic.content}
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
