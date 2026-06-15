"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { comparisonRows } from "@/components/sections/progress/data";

function ComparisonRow({ left, right }: { left: string; right: string }) {
	return (
		<div className="grid grid-cols-2 gap-4 rounded-lg px-4 py-3 text-sm">
			<div className="flex items-center gap-2 text-muted-foreground">
				<span>{left}</span>
			</div>
			<div className="flex items-center gap-2 font-medium text-primary">
				<HugeiconsIcon
					icon={CheckmarkCircle02Icon}
					className="size-4 shrink-0 text-primary"
					strokeWidth={1.5}
				/>
				<span>{right}</span>
			</div>
		</div>
	);
}

export function Comparison() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Not your typical progress bar
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Most platforms count correct answers and call it progress. Zomath
						measures genuine mathematical understanding, because getting lucky
						on a multiple choice question is not the same as knowing why the
						answer works.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-3xl">
					<div className="overflow-hidden rounded-2xl border border-border bg-background">
						<div className="grid grid-cols-2 border-b border-border">
							<div className="border-r border-border bg-muted/50 px-6 py-4 text-sm font-semibold text-muted-foreground">
								Typical platforms
							</div>
							<div className="px-6 py-4 text-sm font-semibold text-primary">
								Zomath
							</div>
						</div>
						{comparisonRows.map((row, idx) => (
							<div key={row.left}>
								{idx > 0 && <div className="border-t border-border" />}
								<ComparisonRow left={row.left} right={row.right} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
