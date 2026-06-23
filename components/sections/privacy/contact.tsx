"use client";

import {
	Cash02Icon,
	Mail01Icon,
	MobileProtectionIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "@/components/ui/separator";

export function Contact() {
	return (
		<section id="contact" className="py-24 lg:py-32 scroll-mt-24">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
					<div>
						<div className="flex items-center gap-3 mb-6">
							<div className="flex items-center justify-center size-10 rounded-xl bg-primary/10">
								<HugeiconsIcon
									icon={Mail01Icon}
									className="size-5 text-primary"
									strokeWidth={1.5}
								/>
							</div>
							<h2 className="text-2xl font-semibold tracking-tight text-foreground">
								Contact Us
							</h2>
						</div>
						<p className="text-muted-foreground leading-relaxed mb-6">
							If you have any questions, concerns, or requests about this
							privacy policy or how your data is handled, we want to hear from
							you.
						</p>
						<p className="text-sm text-muted-foreground">
							We aim to respond to all privacy-related inquiries within 5
							business days. Data deletion requests are processed within 30
							days.
						</p>
					</div>
					<div className="rounded-2xl border bg-background p-8 space-y-5">
						<div className="flex items-start gap-3">
							<HugeiconsIcon
								icon={MobileProtectionIcon}
								className="size-5 text-primary mt-0.5 shrink-0"
								strokeWidth={1.5}
							/>
							<div>
								<p className="text-sm font-medium text-foreground">
									Privacy inquiries
								</p>
								<a
									href="mailto:privacy@zomath.com"
									className="text-sm text-primary hover:underline"
								>
									privacy@zomath.com
								</a>
							</div>
						</div>
						<Separator />
						<div className="flex items-start gap-3">
							<HugeiconsIcon
								icon={Cash02Icon}
								className="size-5 text-primary mt-0.5 shrink-0"
								strokeWidth={1.5}
							/>
							<div>
								<p className="text-sm font-medium text-foreground">
									Data deletion requests
								</p>
								<a
									href="mailto:privacy@zomath.com"
									className="text-sm text-primary hover:underline"
								>
									privacy@zomath.com
								</a>
							</div>
						</div>
						<Separator />
						<div className="flex items-start gap-3">
							<HugeiconsIcon
								icon={Mail01Icon}
								className="size-5 text-primary mt-0.5 shrink-0"
								strokeWidth={1.5}
							/>
							<div>
								<p className="text-sm font-medium text-foreground">
									General support
								</p>
								<a
									href="mailto:hello@zomath.com"
									className="text-sm text-primary hover:underline"
								>
									hello@zomath.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
