import Link from "next/link";
import { templates } from "@/components/sections/practice-hero/data";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "@/components/ui/item";

export function PracticeFormatSelect({ name }: { name: string }) {
	const firstName = name.split(" ")[0];

	return (
		<div className="flex flex-col gap-8 px-4 py-12 max-w-7xl mx-auto lg:px-12 lg:py-16">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
					How do you want to practice today, {firstName}?
				</h1>
				<p className="text-muted-foreground text-lg">
					Pick a format and Newton will generate a session on any topic you
					choose.
				</p>
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
				{templates.map(({ id, title, description, Illustration }) => (
					<Item
						key={id}
						asChild
						variant="outline"
						size="default"
						className="group cursor-pointer overflow-hidden p-0 gap-0 hover:border-primary/40 hover:bg-accent/50 transition-colors"
					>
						<Link href={`/practice/${id}`}>
							<div className="w-28 self-stretch shrink-0 bg-primary/10 flex items-center justify-center">
								<Illustration />
							</div>
							<ItemContent className="px-4 py-4">
								<ItemTitle className="text-sm font-semibold text-foreground whitespace-normal">
									{title}
								</ItemTitle>
								<ItemDescription className="line-clamp-3">
									{description}
								</ItemDescription>
							</ItemContent>
						</Link>
					</Item>
				))}
			</div>
		</div>
	);
}
