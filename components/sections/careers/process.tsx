"use client";

import { hireSteps } from "@/components/sections/careers/data";

export function Process() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
						How we hire
					</h2>
					<p className="text-lg text-muted-foreground">
						We believe in a fair, transparent process that respects your time.
					</p>
				</div>

				<div className="grid md:grid-cols-4 gap-8">
					{hireSteps.map((item) => (
						<div key={item.step} className="relative">
							<div className="text-4xl font-medium text-primary/20 mb-4">
								{item.step}
							</div>
							<h3 className="font-medium mb-2">{item.title}</h3>
							<p className="text-sm text-muted-foreground">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
