"use client";

import { FileDownloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { pressKitAssets } from "@/components/sections/press/data";

export function PressKit() {
	return (
		<section id="press-kit" className="py-24 lg:py-32 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="max-w-2xl mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">
						Press kit
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						Download brand assets, screenshots, and guidelines for media
						coverage. All assets are provided royalty-free for editorial use.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-4">
					{pressKitAssets.map((asset) => (
						<button
							key={asset.title}
							className="flex items-start gap-4 p-6 rounded-xl border border-border bg-background hover:bg-muted/50 transition-colors text-left group"
						>
							<div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
								<HugeiconsIcon
									icon={asset.icon}
									className="size-6"
									strokeWidth={1.5}
								/>
							</div>
							<div className="flex-1 min-w-0">
								<h3 className="font-medium text-foreground mb-1">
									{asset.title}
								</h3>
								<p className="text-sm text-muted-foreground mb-2">
									{asset.description}
								</p>
								<p className="text-xs text-muted-foreground">
									{asset.format}
								</p>
							</div>
							<HugeiconsIcon
								icon={FileDownloadIcon}
								className="size-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
								strokeWidth={1.5}
							/>
						</button>
					))}
				</div>
				<p className="mt-6 text-sm text-muted-foreground">
					Need a different format or additional assets? Reach out to{" "}
					<a
						href="mailto:press@zomath.com"
						className="text-primary hover:underline"
					>
						press@zomath.com
					</a>
					.
				</p>
			</div>
		</section>
	);
}
