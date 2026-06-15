"use client";

import { conceptNodes } from "@/components/sections/concepts/data";

export function MapVisual() {
	return (
		<section className="py-24 lg:py-32 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
						Your map. Your mastery.
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Every node is a concept. Every line is a connection. The more you
						learn, the more your map lights up with understanding.
					</p>
				</div>
				<div className="relative bg-background border rounded-2xl p-8 lg:p-12 overflow-hidden min-h-[480px]">
					<div
						className="absolute inset-0 opacity-[0.07]"
						style={{
							backgroundImage:
								"radial-gradient(circle, currentColor 1px, transparent 1px)",
							backgroundSize: "24px 24px",
						}}
					/>
					<svg
						className="absolute inset-0 w-full h-full"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.15"
						opacity="0.2"
					>
						<line x1="50" y1="15" x2="25" y2="35" />
						<line x1="50" y1="15" x2="75" y2="35" />
						<line x1="25" y1="35" x2="50" y2="55" />
						<line x1="75" y1="35" x2="50" y2="55" />
						<line x1="50" y1="55" x2="30" y2="75" />
						<line x1="50" y1="55" x2="70" y2="75" />
						<line x1="50" y1="15" x2="50" y2="55" />
					</svg>
					{conceptNodes.map((node) => (
						<div
							key={node.label}
							className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
							style={{ left: node.x, top: node.y }}
						>
							<div
								className={`flex flex-col items-center gap-1.5 ${node.size === "lg" ? "scale-110" : node.size === "sm" ? "scale-90" : ""}`}
							>
								<div
									className={`rounded-full border-2 border-primary/60 bg-primary/10 flex items-center justify-center ${node.size === "lg" ? "size-10" : node.size === "sm" ? "size-6" : "size-8"}`}
								>
									<div
										className={`rounded-full bg-primary ${node.size === "lg" ? "size-4" : node.size === "sm" ? "size-2" : "size-3"}`}
									/>
								</div>
								<span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap bg-background/80 px-2 py-0.5 rounded">
									{node.label}
								</span>
							</div>
						</div>
					))}
				</div>
				<p className="text-sm text-muted-foreground text-center mt-6">
					A simplified view of the quadratic equations cluster. The full map
					contains thousands of interconnected concepts.
				</p>
			</div>
		</section>
	);
}
