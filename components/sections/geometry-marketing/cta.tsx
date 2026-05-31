import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

export function CallToAction() {
	return (
		<div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 rounded-4xl border bg-card px-4 py-8 shadow-sm md:py-10 dark:bg-card/50">
			<div className="space-y-2">
				<h2 className="text-center font-semibold text-lg tracking-tight md:text-2xl">
					Stop memorizing. Start understanding.
				</h2>
				<p className="text-balance text-center text-muted-foreground text-sm md:text-base">
					Geometry makes sense when you can see it, explain it, and connect it
					to everything else. Whether you are proving your first triangle
					congruence or training for national competitions, Newton is ready to
					help.
				</p>
			</div>
			<div className="flex items-center justify-center gap-2">
				<Button className="shadow">
					Start learning geometry
					<HugeiconsIcon
						icon={ArrowRight02Icon}
						strokeWidth={2}
						data-icon="inline-end"
					/>
				</Button>
			</div>
		</div>
	);
}
