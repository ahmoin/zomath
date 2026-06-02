"use client";

import { PaintBoardIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { practiceTypes } from "@/components/sections/calculus/data";

export function Practice() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-16">
					<p className="text-sm font-medium text-primary mb-3">Practice</p>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Drills that adapt to you, not the other way around
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed">
						Every calculus skill needs practice. But not all practice is
						equal. Zomath generates problems calibrated to your current level,
						gradually increasing difficulty so you are always challenged but
						never overwhelmed.
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{practiceTypes.map((item) => (
						<div
							key={item.title}
							className="rounded-xl border bg-background p-6 flex flex-col gap-3"
						>
							<div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
								<HugeiconsIcon
									icon={PaintBoardIcon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h3 className="text-base font-semibold text-foreground">
								{item.title}
							</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
