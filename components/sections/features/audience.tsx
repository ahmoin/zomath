"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
	audienceCards,
	competitionCard,
} from "@/components/sections/features/data";

export function Audience() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Built for real students
					</h2>
					<p className="text-lg text-muted-foreground">
						Whether you are catching up, keeping up, or getting ahead, Zomath
						meets you where you are.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-6">
					{audienceCards.map((card) => (
						<div
							key={card.title}
							className="bg-muted/50 border border-border rounded-2xl p-8"
						>
							<HugeiconsIcon
								icon={card.icon}
								className="size-8 text-primary mb-4"
								strokeWidth={1.5}
							/>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								{card.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{card.description}
							</p>
						</div>
					))}
					<div className="bg-muted/50 border border-border rounded-2xl p-8 md:col-span-2">
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div>
								<HugeiconsIcon
									icon={competitionCard.icon}
									className="size-8 text-primary mb-4"
									strokeWidth={1.5}
								/>
								<h3 className="text-xl font-semibold text-foreground mb-2">
									{competitionCard.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{competitionCard.description}
								</p>
							</div>
							<div className="grid grid-cols-2 gap-4">
								{competitionCard.exams.map((exam) => (
									<div
										key={exam.label}
										className="bg-background border border-border rounded-xl p-5 text-center"
									>
										<p className="text-3xl font-semibold text-primary mb-1">
											{exam.label}
										</p>
										<p className="text-sm text-muted-foreground">
											{exam.sublabel}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
