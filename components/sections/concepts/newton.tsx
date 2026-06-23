"use client";

import {
	ArrowRight02Icon,
	BrainIcon,
	CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const bullets = [
	"Newton traces learning paths between any two concepts on the map",
	"Prerequisites are automatically identified and sequenced for you",
	"Practice sessions target the specific nodes that will unlock your next goal",
	"Concept explanations reference connected ideas to build holistic understanding",
];

export function Newton() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
							Newton knows the way
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-6">
							The Concept Map is not just a reference tool. It is the foundation
							for how Newton guides your learning. When you ask Newton a
							question, it does not just answer. It places that answer in
							context, showing you where the concept lives on the map and what
							you need to understand it deeply.
						</p>
						<div className="space-y-4 mb-8">
							{bullets.map((item) => (
								<div key={item} className="flex gap-3 items-start">
									<HugeiconsIcon
										icon={CheckmarkCircle02Icon}
										className="size-5 text-primary mt-0.5 shrink-0"
										strokeWidth={1.5}
									/>
									<span className="text-foreground leading-relaxed">
										{item}
									</span>
								</div>
							))}
						</div>
						<Button size="lg" asChild>
							<Link href="/sign-up">
								Start learning with Newton
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
					</div>
					<div className="rounded-2xl border bg-muted/30 p-8 lg:p-10">
						<div className="rounded-xl border bg-background p-6 shadow-sm mb-4">
							<div className="flex items-center gap-2 mb-3">
								<div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
									<HugeiconsIcon
										icon={BrainIcon}
										className="size-4 text-primary"
										strokeWidth={1.5}
									/>
								</div>
								<span className="font-semibold text-foreground">Newton</span>
							</div>
							<p className="text-sm text-muted-foreground mb-4">
								You asked about the quadratic formula. Here is where it sits on
								your map:
							</p>
							<div className="space-y-2 text-sm">
								<div className="flex items-center gap-3">
									<div className="size-3 rounded-full bg-primary/30" />
									<span className="text-muted-foreground line-through">
										Factoring
									</span>
									<span className="text-xs text-primary font-medium">
										Mastered
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="size-3 rounded-full bg-primary/30" />
									<span className="text-muted-foreground line-through">
										Completing the Square
									</span>
									<span className="text-xs text-primary font-medium">
										Mastered
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="size-3 rounded-full bg-primary" />
									<span className="text-foreground font-medium">
										Quadratic Formula
									</span>
									<span className="text-xs text-primary font-medium">
										Ready to learn
									</span>
								</div>
								<div className="flex items-center gap-3">
									<div className="size-3 rounded-full bg-muted-foreground/20" />
									<span className="text-muted-foreground">Discriminant</span>
									<span className="text-xs text-muted-foreground">Locked</span>
								</div>
							</div>
						</div>
						<div className="rounded-xl border bg-background p-6 shadow-sm">
							<p className="text-sm text-foreground leading-relaxed">
								Since you have mastered both factoring and completing the
								square, you have all the prerequisites for the quadratic
								formula. Would you like me to walk you through the derivation,
								or jump straight into practice?
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
