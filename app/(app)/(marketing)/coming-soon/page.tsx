import { Home01Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";

export default function ComingSoonPage() {
	return (
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
			<Empty>
				<EmptyHeader>
					<EmptyTitle className="mask-b-from-20% mask-b-to-80% font-extrabold text-9xl">
						Soon
					</EmptyTitle>
					<EmptyDescription className="-mt-8 text-nowrap text-foreground/80">
						This page is still being built. <br />
						Check back soon.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent>
					<div className="flex gap-2">
						<Button asChild>
							<Link href="/">
								<HugeiconsIcon
									icon={Home01Icon}
									strokeWidth={2}
									data-icon="inline-start"
								/>
								Go Home
							</Link>
						</Button>
						<Button asChild variant="outline">
							<Link href="/sign-up">
								<HugeiconsIcon
									icon={SparklesIcon}
									strokeWidth={2}
									data-icon="inline-start"
								/>
								Get Started
							</Link>
						</Button>
					</div>
				</EmptyContent>
			</Empty>
		</div>
	);
}
