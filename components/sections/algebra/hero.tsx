"use client";

import { ArrowRight02Icon, CourseIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative overflow-hidden py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl">
					<div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
						<HugeiconsIcon
							icon={CourseIcon}
							className="size-4"
							strokeWidth={1.5}
						/>
						Zomath Subject Guide
					</div>
					<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
						Finally understand algebra, not just survive it
					</h1>
					<p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
						Algebra is the language of mathematics. Newton helps you speak it
						fluently, from your first variable to your last quadratic. No
						memorization tricks, no shortcuts that break down. Just real
						understanding, built step by step.
					</p>
					<div className="flex flex-col sm:flex-row gap-3">
						<Button size="lg" asChild>
							<Link href="/practice?subject=algebra">
								Start learning algebra
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<Link href="/ask">Ask Newton a question</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
