"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Ready to learn math the way it was meant to be learned?
					</h2>
					<p className="mb-10 text-lg text-muted-foreground leading-relaxed">
						Join the students who are trading memorization for understanding.
						Newton is ready whenever you are.
					</p>
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Button asChild size="lg" className="gap-2 text-base">
							<Link href="/sign-up">
								Start learning for free
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="gap-2 text-base"
						>
							<Link href="/features">
								Explore features
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
