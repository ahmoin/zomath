"use client";

import { ChartBarLineIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { uptimeHistory } from "@/components/sections/status/data";

function UptimeBar({ value }: { value: number }) {
	const days = 30;
	const bars = Array.from({ length: days }, (_, i) => ({
		day: i,
		hasIncident: Math.random() < (100 - value) / 100 && i > 20,
	}));

	return (
		<div className="flex gap-px items-end h-8">
			{bars.map((bar) => (
				<div
					key={bar.day}
					className={`flex-1 rounded-sm min-w-1 ${
						bar.hasIncident ? "bg-amber-400" : "bg-emerald-500"
					}`}
					style={{ height: "100%" }}
				/>
			))}
		</div>
	);
}

export function UptimeOverview() {
	return (
		<section className="pb-24 lg:pb-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="flex items-center gap-3 mb-8">
					<HugeiconsIcon
						icon={ChartBarLineIcon}
						className="size-5 text-muted-foreground"
						strokeWidth={1.5}
					/>
					<h2 className="text-2xl font-semibold tracking-tight">
						Uptime Overview
					</h2>
				</div>
				<div className="rounded-xl border bg-card p-6 lg:p-8">
					<div className="flex items-end justify-between mb-8">
						<div>
							<p className="text-3xl font-semibold text-foreground">99.97%</p>
							<p className="text-sm text-muted-foreground mt-1">
								Aggregate uptime over the last 6 months
							</p>
						</div>
						<div className="flex items-center gap-4 text-xs text-muted-foreground">
							<div className="flex items-center gap-1.5">
								<span className="size-2.5 rounded-sm bg-emerald-500" />
								<span>Operational</span>
							</div>
							<div className="flex items-center gap-1.5">
								<span className="size-2.5 rounded-sm bg-amber-400" />
								<span>Incident</span>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
						{uptimeHistory.map((month) => (
							<div key={month.month}>
								<UptimeBar value={month.uptime} />
								<div className="flex items-center justify-between mt-2">
									<span className="text-sm text-muted-foreground">
										{month.month}
									</span>
									<span className="text-sm font-medium text-foreground">
										{month.uptime}%
									</span>
								</div>
							</div>
						))}
					</div>
					<p className="text-xs text-muted-foreground mt-6">
						Uptime is measured across all core services. Each bar represents
						one day. Hover for details.
					</p>
				</div>
			</div>
		</section>
	);
}
