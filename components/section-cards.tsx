"use client";

import {
	BookOpen01Icon,
	BrainIcon,
	ChartUpIcon,
	FireIcon,
	Target01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
	return (
		<div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Problems solved</CardDescription>
					<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
						0
					</CardTitle>
					<CardAction>
						<Badge variant="outline">
							<HugeiconsIcon icon={Target01Icon} strokeWidth={2} />
							All time
						</Badge>
					</CardAction>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						Start solving to see progress
					</div>
					<div className="text-muted-foreground">Snap a problem to begin</div>
				</CardFooter>
			</Card>
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Current streak</CardDescription>
					<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
						0 days
					</CardTitle>
					<CardAction>
						<Badge variant="outline">
							<HugeiconsIcon icon={FireIcon} strokeWidth={2} />
							Daily
						</Badge>
					</CardAction>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						No streak yet
					</div>
					<div className="text-muted-foreground">
						Practice daily to build a streak
					</div>
				</CardFooter>
			</Card>
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Topics mastered</CardDescription>
					<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
						0
					</CardTitle>
					<CardAction>
						<Badge variant="outline">
							<HugeiconsIcon icon={BookOpen01Icon} strokeWidth={2} />
							Topics
						</Badge>
					</CardAction>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						No topics mastered yet
					</div>
					<div className="text-muted-foreground">
						Reach 80% to master a topic
					</div>
				</CardFooter>
			</Card>
			<Card className="@container/card">
				<CardHeader>
					<CardDescription>Newton conversations</CardDescription>
					<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
						0
					</CardTitle>
					<CardAction>
						<Badge variant="outline">
							<HugeiconsIcon icon={ChartUpIcon} strokeWidth={2} />
							All time
						</Badge>
					</CardAction>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1.5 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						Ask Newton anything{" "}
						<HugeiconsIcon
							icon={BrainIcon}
							strokeWidth={2}
							className="size-4"
						/>
					</div>
					<div className="text-muted-foreground">
						Get explanations, not just answers
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
