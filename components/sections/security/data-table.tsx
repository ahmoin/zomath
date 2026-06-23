"use client";

import { dataTableRows } from "@/components/sections/security/data";

export function DataTable() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
						What We Collect
					</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Honest about what we see and why
					</h2>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						We believe you should never be surprised by what a service knows
						about you. Here is every category of data Zomath collects, what we
						use it for, and how long we keep it.
					</p>
				</div>
				<div className="max-w-4xl mx-auto">
					<div className="rounded-2xl border bg-card overflow-hidden">
						<div className="grid grid-cols-3 gap-4 px-6 py-4 bg-muted/50 border-b text-sm font-medium text-muted-foreground">
							<span>Data Type</span>
							<span>Purpose</span>
							<span>Retention</span>
						</div>
						{dataTableRows.map((row, idx) => (
							<div
								key={row.type}
								className={`grid grid-cols-3 gap-4 px-6 py-4 text-sm ${idx < dataTableRows.length - 1 ? "border-b" : ""}`}
							>
								<span className="text-foreground font-medium">{row.type}</span>
								<span className="text-muted-foreground">{row.purpose}</span>
								<span className="text-muted-foreground">{row.retention}</span>
							</div>
						))}
					</div>
					<p className="mt-4 text-xs text-muted-foreground text-center">
						We never collect keystroke patterns, browsing history outside
						Zomath, contact lists, or location data. If it is not on this list,
						we do not have it.
					</p>
				</div>
			</div>
		</section>
	);
}
