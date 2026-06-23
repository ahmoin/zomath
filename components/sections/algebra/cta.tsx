"use client";

import { ArrowRight02Icon, Rocket01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="rounded-2xl border bg-card p-12 lg:p-16 text-center">
					<div className="inline-flex items-center justify-center size-14 rounded-2xl bg-primary/10 mb-6">
						<HugeiconsIcon
							icon={Rocket01Icon}
							className="size-7 text-primary"
							strokeWidth={1.5}
						/>
					</div>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Start understanding algebra today
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
						Whether you are starting from scratch or prepping for an exam,
						Newton meets you where you are and helps you get where you need to
						be. No more staring at problems hoping the answer will appear.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 justify-center">
						<Button size="lg" asChild>
							<Link href="/practice?subject=algebra">
								Start practicing now
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<Link href="/solve">Solve a problem</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
