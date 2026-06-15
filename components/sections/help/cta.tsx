"use client";

import { ArrowRight02Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto text-center">
					<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
						<HugeiconsIcon
							icon={SparklesIcon}
							className="size-7 text-primary"
							strokeWidth={1.5}
						/>
					</div>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Ready to understand math, not just get answers?
					</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Start your first session with Newton and see how learning feels
						when the focus is on genuine understanding.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
						<Link href="/solve">
							<Button size="lg" className="gap-2">
								Start learning for free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							</Button>
						</Link>
						<Link href="/concept-map">
							<Button size="lg" variant="outline">
								Explore the Concept Map
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
