"use client";

import {
	ArrowRight02Icon,
	Building03Icon,
	Call02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative mx-auto w-full max-w-5xl">
			<div
				aria-hidden="true"
				className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
			>
				<div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,--theme(--color-foreground/.08),transparent)] contain-strict" />
			</div>
			<div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">
				<div className="fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-500 duration-500 ease-out mx-auto flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow">
					<HugeiconsIcon
						icon={Building03Icon}
						strokeWidth={2}
						className="size-3 text-muted-foreground"
					/>
					<span className="text-xs">For Schools and Districts</span>
				</div>
				<h1 className="fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards text-balance text-center text-4xl tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl text-shadow-[0_0px_50px_theme(--color-foreground/.2)]">
					Every Student Deserves a Math Tutor <br /> That Actually Gets Them
				</h1>
				<p className="fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards mx-auto max-w-md text-center text-base text-foreground/80 tracking-wider delay-200 duration-500 ease-out sm:text-lg md:text-xl">
					Newton adapts to each student's pace in real time. Give your teachers
					the tools to differentiate at scale, so no learner falls through the
					cracks.
				</p>
				<div className="fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards flex flex-row flex-wrap items-center justify-center gap-3 pt-2 delay-300 duration-500 ease-out">
					<Button
						className="rounded-full"
						size="lg"
						variant="secondary"
						asChild
					>
						<Link href="#contact">
							<HugeiconsIcon icon={Call02Icon} strokeWidth={2} />
							Book a Call
						</Link>
					</Button>
					<Button className="rounded-full" size="lg" asChild>
						<Link href="/sign-up">
							Get started
							<HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2} />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
