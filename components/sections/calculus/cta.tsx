"use client";

import { ArrowRight02Icon, PaintBoardIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="rounded-2xl border bg-primary/5 p-8 lg:p-16 text-center">
					<div className="flex justify-center mb-6">
						<div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
							<HugeiconsIcon
								icon={PaintBoardIcon}
								className="size-6 text-primary"
								strokeWidth={1.5}
							/>
						</div>
					</div>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4 max-w-xl mx-auto">
						The moment calculus clicks is closer than you think
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto mb-8">
						Whether you are just starting limits or deep into multivariable,
						Newton is ready to help you understand, not just compute. Start
						for free today.
					</p>
					<div className="flex flex-wrap justify-center gap-3">
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
							<Link href="/ask">Talk to Newton</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
