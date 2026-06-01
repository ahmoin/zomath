"use client";

import { LaptopIcon, Mail02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">
						Don't see a fit?
					</h2>
					<p className="text-lg text-muted-foreground mb-8">
						We're always interested in meeting people who care deeply about
						education. Send us a note and tell us what you'd bring to Zomath.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Button asChild>
							<Link href="mailto:careers@zomath.com">
								<HugeiconsIcon
									icon={Mail02Icon}
									className="size-5"
									strokeWidth={1.5}
								/>
								careers@zomath.com
							</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link
								href="https://linkedin.com/company/zomath"
								target="_blank"
								rel="noopener noreferrer"
							>
								<HugeiconsIcon
									icon={LaptopIcon}
									className="size-5"
									strokeWidth={1.5}
								/>
								Follow on LinkedIn
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
