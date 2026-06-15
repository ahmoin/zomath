"use client";

import { LightbulbOffIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "@/components/ui/separator";
import { featureHelp } from "@/components/sections/help/data";

export function FeatureGuides() {
	return (
		<section id="feature-guides" className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<p className="text-sm font-medium text-primary mb-2">
						Feature guides
					</p>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						How each feature works
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Learn how each part of Zomath works so you can spend less time
						figuring out the app and more time understanding math.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-8">
					{featureHelp.map((feature) => (
						<div
							key={feature.title}
							className="p-8 rounded-2xl border bg-card hover:border-primary/20 transition-colors"
						>
							<div className="flex items-start gap-4 mb-5">
								<div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
									<HugeiconsIcon
										icon={feature.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-foreground">
										{feature.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{feature.subtitle}
									</p>
								</div>
							</div>
							<p className="text-muted-foreground leading-relaxed mb-5">
								{feature.description}
							</p>
							<Separator className="mb-5" />
							<div>
								<div className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
									<HugeiconsIcon
										icon={LightbulbOffIcon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
									Tips
								</div>
								<ul className="space-y-2">
									{feature.tips.map((tip) => (
										<li
											key={tip}
											className="text-sm text-muted-foreground pl-5 relative before:content-[''] before:absolute before:left-1.5 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/40"
										>
											{tip}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
