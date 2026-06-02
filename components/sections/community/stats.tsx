"use client";

import { stats } from "@/components/sections/community/data";

export function Stats() {
	return (
		<section className="py-16 lg:py-20">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
					{stats.map((stat) => (
						<div key={stat.label}>
							<p className="text-3xl lg:text-4xl font-semibold text-foreground">
								{stat.value}
							</p>
							<p className="text-sm text-muted-foreground mt-1">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
