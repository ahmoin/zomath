"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { contactReasons } from "@/components/sections/contact/data";

export function Channels() {
	return (
		<section className="py-24 lg:py-32 bg-muted">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="mb-16">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						Reach the right team
					</h2>
					<p className="text-muted-foreground text-lg max-w-xl">
						Pick the channel that matches your need so we can connect you with
						the person who can help fastest.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{contactReasons.map((reason) => (
						<div
							key={reason.title}
							className="group bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
						>
							<div className="flex items-start gap-4">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<HugeiconsIcon
										icon={reason.icon}
										className="size-5"
										strokeWidth={1.5}
									/>
								</div>
								<div className="flex-1 min-w-0">
									<h3 className="text-lg font-semibold text-foreground mb-1">
										{reason.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed mb-3">
										{reason.description}
									</p>
									<div className="flex items-center gap-3 flex-wrap">
										<a
											href={`mailto:${reason.email}`}
											className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
										>
											{reason.email}
											<HugeiconsIcon
												icon={ArrowRight02Icon}
												className="size-3.5"
												strokeWidth={2}
											/>
										</a>
										<span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
											{reason.detail}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
