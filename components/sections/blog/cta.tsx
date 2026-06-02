"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32 bg-primary/5">
			<div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
				<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
					Ready to learn math differently?
				</h2>
				<p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
					Start for free and see how Newton, Concept Maps, and targeted
					practice can change the way you understand math.
				</p>
				<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
					<Link href="/sign-up">
						<Button size="lg" className="rounded-xl">
							Get started free
							<HugeiconsIcon icon={ArrowRight02Icon} className="size-4 ml-2" strokeWidth={1.5} />
						</Button>
					</Link>
					<Link href="/ask">
						<Button size="lg" variant="outline" className="rounded-xl">
							Try Newton
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
