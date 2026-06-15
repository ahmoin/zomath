"use client";

import { ArrowRight02Icon, ChartLineData01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-10 text-center lg:p-16">
					<HugeiconsIcon
						icon={ChartLineData01Icon}
						className="mx-auto size-10 text-primary"
						strokeWidth={1.5}
					/>
					<h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Your progress starts now
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Every concept you master, every streak you build, every insight
						Newton shares. It all begins with your first problem. Start
						tracking your real understanding today, and never wonder where you
						stand again.
					</p>
					<div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Button asChild size="lg">
							<Link href="/sign-up">
								Get started free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="ml-2 size-4"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/concept-map">Explore the Concept Map</Link>
						</Button>
					</div>
					<p className="mt-6 text-xs text-muted-foreground">
						Free to start. No credit card required. Track your math journey
						from day one.
					</p>
				</div>
			</div>
		</section>
	);
}
