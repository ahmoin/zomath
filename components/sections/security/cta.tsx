"use client";

import { ArrowRight02Icon, MailSend02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
	return (
		<section className="py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-4 lg:px-12">
				<div className="rounded-2xl border bg-card p-8 lg:p-16 text-center">
					<div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-6">
						<HugeiconsIcon
							icon={MailSend02Icon}
							className="size-8 text-primary"
							strokeWidth={1.5}
						/>
					</div>
					<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
						Have a security concern?
					</h2>
					<p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
						Our security team is here to help. Whether you have found a
						vulnerability, have questions about our practices, or need
						assistance exercising your data rights, we want to hear from you. We
						respond to every inquiry.
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
						<Button asChild size="lg">
							<Link href="mailto:security@zomath.com">
								Contact Security Team
								<HugeiconsIcon
									icon={ArrowRight02Icon}
									className="size-4 ml-1"
									strokeWidth={1.5}
								/>
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link href="/privacy">Read Our Privacy Policy</Link>
						</Button>
					</div>
					<p className="mt-6 text-xs text-muted-foreground">
						For general support, visit{" "}
						<Link
							href="/help"
							className="underline underline-offset-4 hover:text-foreground transition-colors"
						>
							help.zomath.com
						</Link>
						. For vulnerability reports, please use{" "}
						<Link
							href="mailto:security@zomath.com"
							className="underline underline-offset-4 hover:text-foreground transition-colors"
						>
							security@zomath.com
						</Link>
						.
					</p>
				</div>
			</div>
		</section>
	);
}
