"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32 bg-primary">
			<div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
				<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary-foreground mb-4">
					Ready to understand math, not just pass it?
				</h2>
				<p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
					Start learning with Newton today. Your first week is completely free,
					no credit card required. See how it feels to actually get math.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button
						size="lg"
						variant="secondary"
						className="text-base px-8"
						asChild
					>
						<Link href="/sign-up">
							Start free trial
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								className="size-4 ml-2"
								strokeWidth={1.5}
							/>
						</Link>
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
						asChild
					>
						<Link href="/pricing">View pricing</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
