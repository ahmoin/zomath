"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { topics } from "@/components/sections/calculus/data";

export function Topics() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<p className="text-sm font-medium text-primary mb-3">
						What you will learn
					</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Every calculus topic, from limits to differential equations
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						Zomath covers the full breadth of calculus with depth that goes
						beyond what any textbook can offer. Each topic is broken into
						skills, connected to prerequisites, and reinforced through practice.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{topics.map((topic) => (
						<div
							key={topic.title}
							className="rounded-xl border bg-background p-6 flex flex-col gap-4"
						>
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
								<HugeiconsIcon
									icon={topic.icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-lg font-semibold text-foreground">
								{topic.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{topic.description}
							</p>
							<ul className="flex flex-col gap-2 mt-auto pt-2">
								{topic.skills.map((skill) => (
									<li
										key={skill}
										className="flex items-start gap-2 text-sm text-muted-foreground"
									>
										<HugeiconsIcon
											icon={CheckmarkCircle02Icon}
											className="size-4 text-primary mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										<span>{skill}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
