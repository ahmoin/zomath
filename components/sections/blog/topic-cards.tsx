"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { topicCards } from "@/components/sections/blog/data";

interface TopicCardsProps {
	onCategorySelect: (categoryId: string) => void;
}

export function TopicCards({ onCategorySelect }: TopicCardsProps) {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-12">
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Topics we cover
					</h2>
					<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
						Whether you are looking for study tips, product news, or deep
						mathematical explorations, we have something for you.
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{topicCards.map((topic) => (
						<button
							key={topic.title}
							type="button"
							onClick={() => {
								onCategorySelect(topic.categoryId);
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
							className="text-left p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors group"
						>
							<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
								<HugeiconsIcon
									icon={topic.icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
								{topic.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
								{topic.description}
							</p>
							<p className="mt-3 text-xs text-muted-foreground">
								{topic.postCount} article{topic.postCount !== 1 ? "s" : ""}
							</p>
						</button>
					))}
				</div>
			</div>
		</section>
	);
}
