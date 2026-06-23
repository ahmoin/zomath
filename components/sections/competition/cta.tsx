"use client";

import { AnalyticsUpIcon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32 bg-muted">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="rounded-2xl border border-border bg-background p-12 lg:p-16 text-center">
					<HugeiconsIcon
						icon={AnalyticsUpIcon}
						className="size-12 text-primary mx-auto mb-6"
						strokeWidth={1.5}
					/>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Your next competition starts here.
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
						Join thousands of students preparing for their next competition with
						Newton. Whether you are aiming for your first AIME qualifier or a
						USAMO medal, the training starts now.
					</p>
					<Button asChild size="lg">
						<Link href="/practice">
							Start Training for Free
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
