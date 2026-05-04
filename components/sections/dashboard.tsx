import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DashboardSectionProps {
	name: string;
}

export function DashboardSection({ name }: DashboardSectionProps) {
	return (
		<main className="flex min-h-svh flex-col items-center justify-center gap-6">
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-3xl font-semibold">Welcome back, {name}</h1>
				<p className="text-muted-foreground">Ready to continue learning?</p>
			</div>
			<div className="flex gap-3">
				<Button asChild>
					<Link href="/learn">Start learning</Link>
				</Button>
				<Button variant="outline" asChild>
					<Link href="/progress">View progress</Link>
				</Button>
			</div>
		</main>
	);
}
