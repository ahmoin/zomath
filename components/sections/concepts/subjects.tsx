"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { subjectAreas } from "@/components/sections/concepts/data";

export function Subjects() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Every major subject, mapped
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						From first year algebra to competition problem solving, the
						Concept Map covers the territory you need.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{subjectAreas.map((subject) => (
						<div
							key={subject.title}
							className="p-6 lg:p-8 rounded-2xl border bg-background"
						>
							<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
								<HugeiconsIcon
									icon={subject.icon}
									className="size-6 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								{subject.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed mb-4">
								{subject.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{subject.concepts.map((concept) => (
									<span
										key={concept}
										className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border"
									>
										{concept}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
