"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { values } from "@/components/sections/community/data";

export function Values() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
							Built on respect, driven by curiosity
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8">
							The Zomath community is a space where every question matters and
							every learner belongs. Our guidelines are simple but we take them
							seriously.
						</p>
						<Button variant="outline" asChild>
							<Link href="/community/guidelines">
								Read the full guidelines
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
					</div>
					<div className="space-y-6">
						{values.map((value) => (
							<div key={value.title} className="flex gap-4">
								<div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
									<HugeiconsIcon
										icon={value.icon}
										className="size-5 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<h3 className="font-semibold text-foreground mb-1">
										{value.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{value.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
