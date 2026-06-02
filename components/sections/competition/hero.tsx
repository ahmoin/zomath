"use client";

import { ArrowRight02Icon, CopyIcon } from "@hugeicons/core-free-icons";
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
							icon={CopyIcon}
							className="size-4"
							strokeWidth={1.5}
						/>
						For AMC, AIME, USAMO, and MathCounts
					</div>
					<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
						Competition math, unlocked.
					</h1>
					<p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
						From your first AMC to a USAMO proof, Newton trains you to think
						like a competitor, not just a student. Strategic problem solving,
						targeted drills, and AI coaching built for the students who want
						more.
					</p>
					<div className="flex flex-wrap gap-3">
						<Button asChild size="lg">
							<Link href="/practice">
								Start Training
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="#topics">Explore Topics</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
