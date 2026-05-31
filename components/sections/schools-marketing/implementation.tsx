"use client";

import { implementationSteps } from "@/components/sections/schools-marketing/data";

export function Implementation() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Simple Implementation, Lasting Results
					</h2>
					<p className="text-lg text-muted-foreground">
						We have refined our partnership process across hundreds of school
						deployments. Your team stays focused on teaching while we handle the
						rest.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{implementationSteps.map((item, index) => (
						<div key={item.step} className="relative">
							<div className="mb-4 text-5xl font-bold text-primary/20">
								{item.step}
							</div>
							<h3 className="mb-2 text-lg font-semibold text-foreground">
								{item.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{item.description}
							</p>
							{index < implementationSteps.length - 1 && (
								<div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-8" />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
