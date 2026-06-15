"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { complianceCerts } from "@/components/sections/security/data";

export function Compliance() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
						Compliance
					</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Standards we meet and exceed
					</h2>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Zomath is designed to meet the strictest requirements for
						educational technology, because students and educators deserve
						nothing less.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{complianceCerts.map((cert) => (
						<div
							key={cert.name}
							className="rounded-xl border bg-card p-8 text-center hover:border-primary/30 transition-colors"
						>
							<div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-5">
								<HugeiconsIcon
									icon={cert.icon}
									className="size-8 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-xl font-semibold text-foreground mb-3">
								{cert.name}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{cert.detail}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
