"use client";

import {
	ArrowRight02Icon,
	CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { coreFeatures } from "@/components/sections/features/data";

export function CoreFeatures() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Five features, one goal
					</h2>
					<p className="text-lg text-muted-foreground">
						Every feature in Zomath works together toward a single purpose:
						helping you genuinely understand mathematics, from the ground up.
					</p>
				</div>

				<div className="space-y-12">
					{coreFeatures.map((feature, index) => (
						<div key={feature.title}>
							<div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
								<div>
									<div className="flex items-center gap-4 mb-4">
										<div className="flex items-center justify-center size-12 rounded-xl bg-primary/10">
											<HugeiconsIcon
												icon={feature.icon}
												className="size-6 text-primary"
												strokeWidth={1.5}
											/>
										</div>
										<div>
											<h3 className="text-2xl font-semibold text-foreground">
												{feature.title}
											</h3>
											<p className="text-sm text-muted-foreground">
												{feature.subtitle}
											</p>
										</div>
									</div>
									<p className="text-muted-foreground leading-relaxed mb-6">
										{feature.description}
									</p>
									<Link href="/pricing">
										<Button variant="outline" className="group">
											Try {feature.title}
											<HugeiconsIcon
												icon={ArrowRight02Icon}
												className="size-4 ml-1 group-hover:translate-x-0.5 transition-transform"
												strokeWidth={1.5}
											/>
										</Button>
									</Link>
								</div>
								<div className="bg-background border border-border rounded-2xl p-6 lg:p-8">
									<ul className="space-y-4">
										{feature.details.map((detail) => (
											<li key={detail} className="flex items-start gap-3">
												<HugeiconsIcon
													icon={CheckmarkCircle02Icon}
													className="size-5 text-primary shrink-0 mt-0.5"
													strokeWidth={1.5}
												/>
												<span className="text-foreground">{detail}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
							{index < coreFeatures.length - 1 && (
								<Separator className="mt-12" />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
