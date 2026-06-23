import {
	Delete01Icon,
	HelpCircleIcon,
	PlusSignIcon,
	QuestionIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ProjectResource } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./section-header";
import { EmptySection } from "./empty-section";

export function QuestionsSection({
	questions,
	setAddQuestionOpen,
	setResources,
	performDeleteResource,
}: {
	questions: ProjectResource[];
	setAddQuestionOpen: (open: boolean) => void;
	setResources: (
		resources:
			| ProjectResource[]
			| ((prev: ProjectResource[]) => ProjectResource[]),
	) => void;
	performDeleteResource: (id: string) => Promise<boolean>;
}) {
	return (
		<section className="flex flex-col gap-3">
			<SectionHeader
				icon={QuestionIcon}
				label="Questions"
				count={questions.length}
			>
				<Button
					size="sm"
					variant="outline"
					onClick={() => setAddQuestionOpen(true)}
				>
					<HugeiconsIcon
						icon={PlusSignIcon}
						className="size-3.5"
						strokeWidth={2}
					/>
					New question
				</Button>
			</SectionHeader>

			{questions.length === 0 ? (
				<EmptySection
					label="Track questions to research or ask your teacher"
					onClick={() => setAddQuestionOpen(true)}
				/>
			) : (
				<div className="flex flex-col gap-2">
					{questions.map((q) => (
						<div
							key={q.id}
							className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/30 hover:bg-accent/50"
						>
							<HugeiconsIcon
								icon={HelpCircleIcon}
								className="size-4 shrink-0 text-muted-foreground"
								strokeWidth={1.5}
							/>
							<span className="min-w-0 flex-1 text-sm">{q.title}</span>
							<button
								onClick={() =>
									performDeleteResource(q.id).then((ok) => {
										if (ok)
											setResources((prev) => prev.filter((r) => r.id !== q.id));
									})
								}
								className="hidden shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive group-hover:block"
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
