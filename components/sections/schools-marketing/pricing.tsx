"use client";

import { PricingSection } from "@/components/pricing-section";

export function Pricing() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<PricingSection
					title="Plans for Every School"
					description="Whether you are a single classroom or an entire district, we have a plan that fits your needs and budget."
				/>
			</div>
		</section>
	);
}
