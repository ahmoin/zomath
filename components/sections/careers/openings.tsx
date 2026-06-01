"use client";

import {
	ArrowRight02Icon,
	Clock01Icon,
	Location01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { openPositions } from "@/components/sections/careers/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Openings() {
	return (
		<section id="openings" className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
						Open positions
					</h2>
					<p className="text-lg text-muted-foreground">
						Join our team and help build the future of math education.
					</p>
				</div>

				<div className="space-y-4">
					{openPositions.map((position) => (
						<div
							key={position.id}
							className="p-6 rounded-xl border bg-background hover:border-primary/50 transition-colors group"
						>
							<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
								<div className="flex-1">
									<div className="flex flex-wrap items-center gap-3 mb-2">
										<h3 className="text-lg font-medium">{position.title}</h3>
										<Badge variant="secondary">{position.department}</Badge>
									</div>
									<p className="text-muted-foreground mb-3">
										{position.description}
									</p>
									<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
										<span className="flex items-center gap-1.5">
											<HugeiconsIcon
												icon={Location01Icon}
												className="size-4"
												strokeWidth={1.5}
											/>
											{position.location}
										</span>
										<span className="flex items-center gap-1.5">
											<HugeiconsIcon
												icon={Clock01Icon}
												className="size-4"
												strokeWidth={1.5}
											/>
											{position.type}
										</span>
									</div>
								</div>
								<Button
									variant="outline"
									className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
								>
									Apply now
									<HugeiconsIcon
										icon={ArrowRight02Icon}
										className="size-4"
										strokeWidth={1.5}
									/>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
