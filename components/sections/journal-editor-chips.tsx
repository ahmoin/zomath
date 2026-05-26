"use client";

import { AiMagicIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function JournalEditorChips({
	onAskNewton,
}: {
	onAskNewton: () => void;
}) {
	return (
		<div className="mb-4">
			<p className="text-sm text-muted-foreground mb-2">Start with</p>
			<div className="flex items-center gap-2 flex-wrap">
				<button
					type="button"
					onClick={onAskNewton}
					className="group relative flex items-center gap-2 px-2 py-1 rounded-md text-sm font-normal transition-all duration-150 bg-muted hover:bg-muted/60"
				>
					<HugeiconsIcon
						icon={AiMagicIcon}
						className="size-[18px] shrink-0 text-green-600"
						strokeWidth={1.5}
					/>
					Ask Newton
				</button>
			</div>
		</div>
	);
}
