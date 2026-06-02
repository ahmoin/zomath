"use client";

import { AnalyticsUpIcon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl">
					<div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground mb-6">
						<HugeiconsIcon
							icon={AnalyticsUpIcon}
							className="size-4"
							strokeWidth={1.5}
						/>
						Statistics & Probability
					</div>
					<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
						Make sense of the noise.
					</h1>
					<p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
						Statistics is the math of the real world. Master probability,
						distributions, and hypothesis testing with Newton. From AP Stats
						to college-level data analysis, genuinely understand the story
						behind the numbers.
					</p>
					<div className="flex flex-wrap gap-3">
						<Button asChild size="lg">
							<Link href="/practice">
								Start Learning
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="#topics">View Syllabus</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
