import {
	BookOpen01Icon,
	Delete01Icon,
	PlusSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import type { Journal } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EditorPreview } from "@/components/sections/editor-preview";
import { SectionHeader } from "./section-header";
import { EmptySection } from "./empty-section";

type AvailableJournal = { id: string; title: string };

export function JournalsSection({
	journals,
	creatingJournal,
	setAddJournalOpen,
	setJournals,
	setAvailableJournals,
	performCreateJournal,
	performRemoveJournal,
}: {
	journals: Journal[];
	creatingJournal: boolean;
	setAddJournalOpen: (open: boolean) => void;
	setJournals: (journals: Journal[] | ((prev: Journal[]) => Journal[])) => void;
	setAvailableJournals: (
		journals:
			| AvailableJournal[]
			| ((prev: AvailableJournal[]) => AvailableJournal[]),
	) => void;
	performCreateJournal: () => void;
	performRemoveJournal: (journalId: string) => Promise<boolean>;
}) {
	return (
		<section className="flex flex-col gap-3">
			<SectionHeader
				icon={BookOpen01Icon}
				label="Journals"
				count={journals.length}
			>
				<Button
					size="sm"
					variant="outline"
					onClick={() => setAddJournalOpen(true)}
				>
					<HugeiconsIcon
						icon={BookOpen01Icon}
						className="size-3.5"
						strokeWidth={2}
					/>
					Add existing
				</Button>
				<Button
					size="sm"
					variant="outline"
					onClick={performCreateJournal}
					disabled={creatingJournal}
				>
					<HugeiconsIcon
						icon={PlusSignIcon}
						className="size-3.5"
						strokeWidth={2}
					/>
					{creatingJournal ? "Creating..." : "New journal"}
				</Button>
			</SectionHeader>

			{journals.length === 0 ? (
				<EmptySection
					label="Add the first journal to this project"
					onClick={performCreateJournal}
					disabled={creatingJournal}
				/>
			) : (
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{journals.map((j) => (
						<div key={j.id} className="group relative">
							<Link
								href={`/journals/${j.id}`}
								className="flex flex-col rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/30 hover:bg-accent/50"
							>
								<div className="line-clamp-3 text-muted-foreground">
									{j.content ? (
										<EditorPreview content={j.content} />
									) : (
										<span className="text-xs">Empty journal</span>
									)}
								</div>
								<div className="mt-3 flex items-center justify-between">
									<span className="text-sm font-medium text-foreground">
										{j.title}
									</span>
									<span className="text-xs text-muted-foreground">
										{formatDate(j.updatedAt)}
									</span>
								</div>
							</Link>
							<button
								onClick={() =>
									performRemoveJournal(j.id).then((ok) => {
										if (ok) {
											setJournals((prev) =>
												prev.filter((j2) => j2.id !== j.id),
											);
											setAvailableJournals((prev) => [
												...prev,
												{ id: j.id, title: j.title },
											]);
										}
									})
								}
								className="absolute right-2 top-2 hidden rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive group-hover:flex"
								title="Remove from project"
							>
								<HugeiconsIcon
									icon={Delete01Icon}
									className="size-3.5"
									strokeWidth={2}
								/>
							</button>
						</div>
					))}
				</div>
			)}
		</section>
	);
}
