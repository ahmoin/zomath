"use client";

import { stats } from "@/components/sections/schools-marketing/data";

export function Stats() {
	return (
		<section className="border-y bg-muted/30 py-12">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{stats.map((stat) => (
						<div key={stat.label} className="text-center">
							<div className="text-3xl font-bold text-foreground lg:text-4xl">
								{stat.value}
							</div>
							<div className="mt-1 text-sm text-muted-foreground">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
