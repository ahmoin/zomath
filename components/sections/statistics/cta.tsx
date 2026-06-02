"use client";

import { ArrowRight02Icon, CrownIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="rounded-2xl border border-border bg-muted p-12 lg:p-16 text-center">
					<HugeiconsIcon
						icon={CrownIcon}
						className="size-12 text-primary mx-auto mb-6"
						strokeWidth={1.5}
					/>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Ready to conquer statistics?
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
						Join the thousands of students using Newton to demystify
						probability, ace their AP exams, and build real mathematical
						intuition.
					</p>
					<Button asChild size="lg">
						<Link href="/practice">
							Start Learning for Free
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className="size-4 ml-1"
								strokeWidth={1.5}
							/>
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
