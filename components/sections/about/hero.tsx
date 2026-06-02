"use client";

export function Hero() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 lg:px-12">
				<div className="mx-auto max-w-3xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
						About Zomath
					</p>
					<h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
						Every student deserves to truly understand math
					</h1>
					<p className="text-lg text-muted-foreground leading-relaxed lg:text-xl">
						Zomath was built on a simple belief: math is not about memorizing
						steps and crunching numbers. It is about thinking clearly, seeing
						patterns, and building confidence that extends far beyond the
						classroom.
					</p>
				</div>
			</div>
		</section>
	);
}
