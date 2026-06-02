"use client";

import { AbacusIcon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { topics } from "@/components/sections/algebra/data";

export function Topics() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Every algebra topic, covered deeply
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						From foundational equations to advanced quadratics, Newton guides
						you through each topic with explanations that actually make sense
						and practice that adapts to you.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{topics.map((topic) => (
						<div
							key={topic.title}
							className="group rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors"
						>
							<div className="rounded-lg bg-muted p-2.5 w-fit mb-4">
								<HugeiconsIcon icon={AbacusIcon} className="size-5 text-primary" strokeWidth={1.5} />
							</div>
							<h3 className="font-semibold text-foreground mb-2">{topic.title}</h3>
							<p className="text-sm text-muted-foreground leading-relaxed mb-4">
								{topic.description}
							</p>
							<ul className="space-y-1.5">
								{topic.skills.map((skill) => (
									<li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
										<HugeiconsIcon
											icon={CheckmarkCircle02Icon}
											className="size-4 text-primary shrink-0 mt-0.5"
											strokeWidth={1.5}
										/>
										{skill}
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
