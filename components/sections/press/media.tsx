"use client";

import { ArrowUpRight02Icon, Message02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { mediaMentions } from "@/components/sections/press/data";

export function Media() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						In the news
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						Coverage of Zomath from leading technology and education
						publications.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{mediaMentions.map((mention) => (
						<a
							key={mention.title}
							href={mention.url}
							className="group flex flex-col p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-colors"
						>
							<div className="flex items-center gap-2 mb-3">
								<HugeiconsIcon
									icon={Message02Icon}
									className="size-4 text-primary"
									strokeWidth={1.5}
								/>
								<span className="text-sm font-medium text-primary">
									{mention.outlet}
								</span>
								<span className="text-xs text-muted-foreground ml-auto">
									{mention.date}
								</span>
							</div>
							<h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug mb-4">
								{mention.title}
							</h3>
							<div className="mt-auto flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
								Read article
								<HugeiconsIcon
									icon={ArrowUpRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
