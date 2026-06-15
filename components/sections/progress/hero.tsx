"use client";

import { ArrowRight02Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-3xl text-center">
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
						<HugeiconsIcon
							icon={ArrowUp01Icon}
							className="size-4 text-primary"
							strokeWidth={1.5}
						/>
						Track your growth
					</div>
					<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
						See how far you&apos;ve come
					</h1>
					<p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
						Understanding math is a journey. Zomath&apos;s progress tracking
						shows you every step forward, every concept mastered, and every
						streak you&apos;ve built. Because real learning deserves real
						visibility.
					</p>
					<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Button asChild size="lg">
							<Link href="/sign-up">
								Start tracking for free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="ml-2 size-4"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/practice">See it in action</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
