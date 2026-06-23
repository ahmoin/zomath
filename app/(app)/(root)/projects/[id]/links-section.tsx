import { Delete01Icon, Link01Icon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ProjectResource } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./section-header";
import { EmptySection } from "./empty-section";

export function LinksSection({
	links,
	setAddLinkOpen,
	setResources,
	performDeleteResource,
}: {
	links: ProjectResource[];
	setAddLinkOpen: (open: boolean) => void;
	setResources: (resources: ProjectResource[] | ((prev: ProjectResource[]) => ProjectResource[])) => void;
	performDeleteResource: (id: string) => Promise<boolean>;
}) {
	return (
		<section className="flex flex-col gap-3">
			<SectionHeader icon={Link01Icon} label="Links" count={links.length}>
				<Button size="sm" variant="outline" onClick={() => setAddLinkOpen(true)}>
					<HugeiconsIcon icon={PlusSignIcon} className="size-3.5" strokeWidth={2} />
					Add link
				</Button>
			</SectionHeader>

			{links.length === 0 ? (
				<EmptySection
					label="Add lecture recordings, article links, or reference URLs"
					onClick={() => setAddLinkOpen(true)}
				/>
			) : (
				<div className="flex flex-col gap-2">
					{links.map((l) => (
						<div
							key={l.id}
							className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/30 hover:bg-accent/50"
						>
							<HugeiconsIcon
								icon={Link01Icon}
								className="size-4 shrink-0 text-muted-foreground"
								strokeWidth={1.5}
							/>
							<div className="min-w-0 flex-1">
								<a
									href={l.url ?? "#"}
									target="_blank"
									rel="noopener noreferrer"
									className="block truncate text-sm font-medium hover:underline"
								>
									{l.title}
								</a>
								{l.url && (
									<span className="block truncate text-xs text-muted-foreground">{l.url}</span>
								)}
							</div>
							<button
								onClick={() =>
									performDeleteResource(l.id).then((ok) => {
										if (ok) setResources((prev) => prev.filter((r) => r.id !== l.id));
									})
								}
								className="hidden shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive group-hover:block"
							>
								<HugeiconsIcon icon={Delete01Icon} className="size-3.5" strokeWidth={2} />
							</button>
						</div>
					))}
				</div>
			)}
		</section>
	);
}
