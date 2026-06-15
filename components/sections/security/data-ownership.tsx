"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dataRights, ownershipChecklist } from "@/components/sections/security/data";

export function DataOwnership() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16">
					<div>
						<p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
							Data Ownership
						</p>
						<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
							Your math journey belongs to you
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Every problem you solve, every concept you master, every
							conversation with Newton is yours. We help you learn, but the
							record of your growth is your property. That is not a slogan. It
							is a commitment.
						</p>
						<div className="mt-8 space-y-4">
							{ownershipChecklist.map((item) => (
								<div key={item} className="flex items-start gap-3">
									<HugeiconsIcon
										icon={CheckmarkCircle02Icon}
										className="size-5 text-primary flex-shrink-0 mt-0.5"
										strokeWidth={1.5}
									/>
									<span className="text-sm text-muted-foreground">{item}</span>
								</div>
							))}
						</div>
					</div>
					<div className="rounded-2xl border bg-card p-8 flex flex-col justify-center">
						<h3 className="text-lg font-semibold text-foreground mb-6">
							Your Data Rights
						</h3>
						<div className="space-y-0">
							{dataRights.map((right, i) => (
								<div
									key={right.label}
									className={`flex items-center justify-between py-3 ${i < dataRights.length - 1 ? "border-b" : ""}`}
								>
									<div>
										<p className="text-sm font-medium text-foreground">
											{right.label}
										</p>
										<p className="text-xs text-muted-foreground mt-0.5">
											{right.description}
										</p>
									</div>
									<Button variant="outline" size="sm" asChild>
										<Link href="/account/privacy">Exercise</Link>
									</Button>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
