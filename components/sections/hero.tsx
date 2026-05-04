import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
	return (
		<section className="flex flex-col h-[calc(100dvh-11.5rem)] lg:max-w-7xl mx-auto max-lg:items-center justify-center relative w-full pt-12 lg:pt-0 pointer-events-none">
			{/* <Image
				alt=""
				className="pointer-events-none absolute inset-0 -top-40 z-3 scale-150 select-none mix-blend-lighten lg:opacity-30"
				fill
				priority
				src="/static/bg.png"
			/> */}

			<div className="w-full lg:w-176 z-10 px-4 lg:px-12 pointer-events-auto">
				<div className="mb-8 flex justify-center lg:justify-start">
					{/* <Image
						alt="Zomath Logo"
						height="100"
						src="/brand/logo.png"
						width="100"
					/> */}
				</div>
				<h1 className="relative mb-8 text-center lg:text-left text-balance font-medium text-5xl">
					Math that makes sense
				</h1>
				<div className="max-w-xl max-lg:mx-auto text-center lg:text-left">
					<p className="text-pretty text-xl">
						Unlike traditional math apps that just give answers, Zomath builds
						genuine understanding through personalized explanations, visual
						learning, and adaptive practice.
					</p>
				</div>
				<div className="mt-10 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
					<Button asChild size="lg">
						<Link href="/sign-up">
							Try for free
							<HugeiconsIcon
								icon={ArrowRight02Icon}
								size={16}
								strokeWidth={2}
							/>
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
