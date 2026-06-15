"use client";

import { Calendar01Icon, Clock01Icon, CloudIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "@/components/ui/separator";

export function Maintenance() {
	return (
		<section className="pb-24 lg:pb-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="flex items-center gap-3 mb-8">
					<HugeiconsIcon
						icon={Calendar01Icon}
						className="size-5 text-muted-foreground"
						strokeWidth={1.5}
					/>
					<h2 className="text-2xl font-semibold tracking-tight">
						Scheduled Maintenance
					</h2>
				</div>
				<div className="rounded-xl border bg-card p-6 lg:p-8">
					<div className="flex items-center gap-4">
						<div className="rounded-lg bg-sky-500/10 p-2.5">
							<HugeiconsIcon
								icon={Clock01Icon}
								className="size-5 text-sky-500"
								strokeWidth={1.5}
							/>
						</div>
						<div className="flex-1">
							<p className="font-medium text-foreground">
								No Scheduled Maintenance
							</p>
							<p className="text-sm text-muted-foreground mt-0.5">
								There are no planned maintenance windows. We perform rolling
								updates with zero downtime whenever possible.
							</p>
						</div>
					</div>
					<Separator className="my-6" />
					<div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
						<p className="text-sm text-muted-foreground">
							When maintenance is necessary, we schedule it during low-traffic
							hours and notify users at least 48 hours in advance.
						</p>
						<div className="flex items-center gap-2 shrink-0">
							<HugeiconsIcon
								icon={CloudIcon}
								className="size-4 text-muted-foreground"
								strokeWidth={1.5}
							/>
							<span className="text-sm text-muted-foreground">
								Last maintenance: May 5, 2026
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
