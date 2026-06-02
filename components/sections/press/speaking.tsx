"use client";

import { Megaphone02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { speakingTopics } from "@/components/sections/press/data";

export function Speaking() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						Speaking & interview topics
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						Our founders regularly speak at conferences, on podcasts, and in
						the press about the intersection of AI and education. Here are the
						topics we care about most.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					{speakingTopics.map((topic) => (
						<div
							key={topic.title}
							className="flex gap-4 p-6 rounded-xl border border-border"
						>
							<div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary shrink-0">
								<HugeiconsIcon
									icon={topic.icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							</div>
							<div>
								<h3 className="font-medium text-foreground mb-2">
									{topic.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{topic.description}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
					<HugeiconsIcon
						icon={Megaphone02Icon}
						className="size-4 text-primary"
						strokeWidth={1.5}
					/>
					<span>
						To book a speaker or request an interview, email{" "}
						<a
							href="mailto:press@zomath.com"
							className="text-primary hover:underline"
						>
							press@zomath.com
						</a>
					</span>
				</div>
			</div>
		</section>
	);
}
