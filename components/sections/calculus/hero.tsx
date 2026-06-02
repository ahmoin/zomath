"use client";

import { ArrowRight02Icon, CalculatorIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl">
					<div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
						<HugeiconsIcon
							icon={CalculatorIcon}
							className="size-4"
							strokeWidth={1.5}
						/>
						<span>Calculus on Zomath</span>
					</div>
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
						Stop memorizing calculus. Start understanding it.
					</h1>
					<p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
						Limits, derivatives, integrals, and series are not a list of
						formulas to cram. They are a way of seeing change and
						accumulation. Newton, your AI tutor, helps you build that vision
						from the ground up.
					</p>
					<div className="flex flex-wrap gap-3">
						<Button size="lg" asChild>
							<Link href="/sign-up">
								Start learning calculus free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/ask">Ask Newton a question</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
