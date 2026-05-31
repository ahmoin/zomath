"use client";

import { whatHappensSteps } from "@/components/sections/contact/data";

export function Process() {
	return (
		<section className="py-24 lg:py-32 bg-muted">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						What happens after you reach out
					</h2>
					<p className="text-muted-foreground text-lg max-w-xl mx-auto">
						We believe support should be transparent. Here is exactly what to
						expect after you hit send.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
					<div className="hidden md:block absolute top-10 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-border" />
					{whatHappensSteps.map((item) => (
						<div key={item.step} className="relative text-center">
							<div className="flex size-10 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm mb-6 relative z-10">
								{item.step}
							</div>
							<h3 className="text-lg font-semibold text-foreground mb-2">
								{item.title}
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
