"use client";

import { Mail02Icon, UserCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { founders } from "@/components/sections/press/data";

export function Contacts() {
	return (
		<section className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						Media contacts
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						Reach out to the right person directly. We typically respond within
						one business day.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{founders.map((founder) => (
						<div
							key={founder.name}
							className="p-6 rounded-xl border border-border bg-background"
						>
							<div className="flex items-center gap-3 mb-4">
								<div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
									<HugeiconsIcon
										icon={UserCircleIcon}
										className="size-7"
										strokeWidth={1.5}
									/>
								</div>
								<div>
									<p className="font-medium text-foreground">{founder.name}</p>
									<p className="text-sm text-primary">{founder.role}</p>
								</div>
							</div>
							<p className="text-sm text-muted-foreground leading-relaxed mb-4">
								{founder.bio}
							</p>
							<a
								href={`mailto:${founder.email}`}
								className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
							>
								<HugeiconsIcon
									icon={Mail02Icon}
									className="size-4"
									strokeWidth={1.5}
								/>
								{founder.email}
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
