"use client";

import { useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const AUDIENCES = [
	{
		id: "students",
		label: "For students",
		description:
			"Consolidate your lecture notes, homework, and textbook readings. When something does not click, Newton breaks it down and drills you until it does.",
		quote:
			"I've never understood math this deeply. Newton explains the why behind every step, not just the answer.",
		name: "Pierre",
		role: "High school junior",
	},
	{
		id: "self-learners",
		label: "For self-learners",
		description:
			"Pick up calculus, statistics, or any math topic with guidance that meets you exactly where you are. No syllabus required.",
		quote:
			"I wanted to learn linear algebra from scratch. Newton filled in every gap the textbooks glossed over.",
		name: "Samuel",
		role: "Software developer",
	},
	{
		id: "competitors",
		label: "For competition prep",
		description:
			"Train on AMC, AIME, and olympiad problems. Newton spots the patterns in your mistakes and builds targeted practice to sharpen your instincts.",
		quote:
			"My AMC score jumped 20 points after two months. The mistake pattern feature is unlike anything else.",
		name: "Maya",
		role: "Math olympiad competitor",
	},
];

export function AudienceSection() {
	const [open, setOpen] = useState(AUDIENCES[0].id);
	const active = AUDIENCES.find((a) => a.id === open) ?? AUDIENCES[0];

	return (
		<section className="w-full py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="grid gap-16 lg:grid-cols-2 lg:items-start">
					<div>
						<h2 className="text-4xl font-medium lg:text-5xl mb-12 text-balance">
							Built for how you learn
						</h2>
						<Accordion
							type="single"
							value={open}
							onValueChange={(v) => v && setOpen(v)}
							className="border-none rounded-none bg-transparent"
						>
							{AUDIENCES.map((a) => (
								<AccordionItem
									key={a.id}
									value={a.id}
									className="border-b-0 border-t"
								>
									<AccordionTrigger className="text-base font-medium hover:no-underline">
										{a.label}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground text-sm leading-relaxed">
										{a.description}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>

					<div className="flex flex-col justify-end gap-4 rounded-2xl border bg-muted/30 p-8 min-h-64">
						<p className="text-xl font-medium text-balance leading-snug">
							"{active.quote}"
						</p>
						<p className="text-sm text-muted-foreground">
							{active.name}, {active.role}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
