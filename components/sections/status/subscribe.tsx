"use client";

import { ArrowRight02Icon, Call02Icon, Notification01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Subscribe() {
	return (
		<section className="pb-24 lg:pb-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="rounded-2xl bg-primary/5 border border-primary/10 p-8 lg:p-12">
					<div className="grid lg:grid-cols-2 gap-8 items-center">
						<div>
							<div className="flex items-center gap-3 mb-4">
								<HugeiconsIcon
									icon={Notification01Icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
								<span className="text-sm font-medium text-primary uppercase tracking-wider">
									Stay Informed
								</span>
							</div>
							<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-foreground mb-3">
								Get Notified About Status Changes
							</h2>
							<p className="text-muted-foreground leading-relaxed">
								Subscribe to real-time updates so you are the first to know
								when something changes. We only send notifications for actual
								incidents and resolutions, never spam.
							</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
							<Button size="lg" className="gap-2">
								<HugeiconsIcon
									icon={Call02Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
								Subscribe to Updates
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/" className="gap-2">
									Back to Zomath
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
			</div>
		</section>
	);
}
