"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
	complianceBadges,
	integrations,
} from "@/components/sections/schools-marketing/data";

export function Integrations() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mx-auto max-w-2xl text-center mb-12">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Fits Into Your Existing Stack
					</h2>
					<p className="text-lg text-muted-foreground">
						Zomath connects with the tools your school already uses. No
						disruptive migrations, no duplicate logins, no headaches.
					</p>
				</div>
				<div className="mb-16">
					<div className="flex flex-wrap items-center justify-center gap-3">
						{integrations.map((name) => (
							<div
								key={name}
								className="rounded-full border bg-muted/50 px-5 py-2.5 text-sm font-medium text-foreground"
							>
								{name}
							</div>
						))}
					</div>
					<p className="mt-4 text-center text-sm text-muted-foreground">
						Need a different integration? We add new ones regularly based on
						partner requests.
					</p>
				</div>
				<div className="mx-auto max-w-3xl rounded-xl border bg-background p-8">
					<h3 className="mb-6 text-center text-lg font-semibold text-foreground">
						Privacy and Compliance
					</h3>
					<div className="grid gap-6 sm:grid-cols-3">
						{complianceBadges.map((badge) => (
							<div
								key={badge.label}
								className="flex flex-col items-center gap-2 text-center"
							>
								<div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
									<HugeiconsIcon
										icon={badge.icon}
										className="size-6 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<span className="text-sm font-medium text-foreground">
									{badge.label}
								</span>
								<p className="text-xs text-muted-foreground">
									{badge.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
