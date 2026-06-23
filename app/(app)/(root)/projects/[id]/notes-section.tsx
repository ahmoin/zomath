import { Delete01Icon, NoteEditIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ProjectResource } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./section-header";
import { EmptySection } from "./empty-section";

export function NotesSection({
	notes,
	setAddNoteOpen,
	setResources,
	performDeleteResource,
}: {
	notes: ProjectResource[];
	setAddNoteOpen: (open: boolean) => void;
	setResources: (resources: ProjectResource[] | ((prev: ProjectResource[]) => ProjectResource[])) => void;
	performDeleteResource: (id: string) => Promise<boolean>;
}) {
	return (
		<section className="flex flex-col gap-3">
			<SectionHeader icon={NoteEditIcon} label="Notes" count={notes.length}>
				<Button size="sm" variant="outline" onClick={() => setAddNoteOpen(true)}>
					<HugeiconsIcon icon={PlusSignIcon} className="size-3.5" strokeWidth={2} />
					New note
				</Button>
			</SectionHeader>

			{notes.length === 0 ? (
				<EmptySection
					label="Add quick notes, summaries, or reminders"
					onClick={() => setAddNoteOpen(true)}
				/>
			) : (
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{notes.map((n) => (
						<div
							key={n.id}
							className="group relative flex flex-col gap-1 rounded-xl border border-border bg-card p-4"
						>
							<span className="text-sm font-medium">{n.title}</span>
							{n.body && (
								<p className="line-clamp-4 text-xs text-muted-foreground">{n.body}</p>
							)}
							<button
								onClick={() =>
									performDeleteResource(n.id).then((ok) => {
										if (ok) setResources((prev) => prev.filter((r) => r.id !== n.id));
									})
								}
								className="absolute right-2 top-2 hidden rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive group-hover:block"
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
