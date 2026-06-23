"use client";

import {
	AlertCircleIcon,
	BeaterIcon,
	CheckmarkBadge01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { services } from "@/components/sections/status/data";

function OverallStatusBanner() {
	const allOperational = services.every((s) => s.status === "operational");

	return (
		<div
			className={`rounded-2xl p-6 lg:p-8 ${
				allOperational
					? "bg-emerald-500/10 border border-emerald-500/20"
					: "bg-amber-500/10 border border-amber-500/20"
			}`}
		>
			<div className="flex items-center gap-4">
				<div
					className={`rounded-full p-3 ${
						allOperational ? "bg-emerald-500/20" : "bg-amber-500/20"
					}`}
				>
					<HugeiconsIcon
						icon={allOperational ? CheckmarkBadge01Icon : AlertCircleIcon}
						className={`size-8 ${allOperational ? "text-emerald-500" : "text-amber-500"}`}
						strokeWidth={1.5}
					/>
				</div>
				<div>
					<p
						className={`text-xl font-semibold ${
							allOperational
								? "text-emerald-600 dark:text-emerald-400"
								: "text-amber-600 dark:text-amber-400"
						}`}
					>
						{allOperational
							? "All Systems Operational"
							: "Some Services Experiencing Issues"}
					</p>
					<p className="text-muted-foreground mt-1">
						{allOperational
							? "Every Zomath service is running smoothly. No incidents detected."
							: "We are aware of the issue and working on a fix. Check below for details."}
					</p>
				</div>
			</div>
		</div>
	);
}

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-3xl">
					<div className="flex items-center gap-3 mb-6">
						<div className="rounded-lg bg-primary/10 p-2">
							<HugeiconsIcon
								icon={BeaterIcon}
								className="size-5 text-primary"
								strokeWidth={1.5}
							/>
						</div>
						<span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
							System Status
						</span>
					</div>
					<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
						Zomath Status
					</h1>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Real-time information about Zomath service availability and
						performance. We track every incident transparently so you always
						know where things stand.
					</p>
				</div>
				<div className="mt-10">
					<OverallStatusBanner />
				</div>
			</div>
		</section>
	);
}
