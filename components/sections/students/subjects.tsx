"use client";

import { BookOpen02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { subjects } from "@/components/sections/students/data";

export function Subjects() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div>
						<p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
							Subjects
						</p>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
							From basic algebra to competition math
						</h2>
						<p className="mt-4 text-muted-foreground text-lg leading-relaxed">
							Zomath covers the full range of middle school through university
							math. Whether you are catching up, keeping up, or getting ahead,
							Newton adapts to your level and goals.
						</p>
					</div>
					<div className="flex flex-wrap gap-2.5">
						{subjects.map((subject) => (
							<span
								key={subject}
								className="inline-flex items-center gap-1.5 rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground"
							>
								<HugeiconsIcon
									icon={BookOpen02Icon}
									className="size-3.5 text-primary"
									strokeWidth={1.5}
								/>
								{subject}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
