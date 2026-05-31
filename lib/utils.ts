import { type ClassValue, clsx } from "clsx";
import { formatDistanceToNow } from "date-fns";
import { twMerge } from "tailwind-merge";
import type { LexicalJsonNode } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string) {
	return new Date(date).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	});
}

export function timeAgo(date: Date) {
	return formatDistanceToNow(date, { addSuffix: true });
}

export function lexicalToText(node: LexicalJsonNode): string {
	if (node.type === "equation") return `$${node.equation ?? ""}$`;
	if (node.type === "text") return node.text ?? "";
	if (!node.children?.length) return "";
	const childText = node.children.map(lexicalToText).join("");
	const block = ["paragraph", "heading", "quote", "listitem", "root"];
	return block.includes(node.type) ? `${childText}\n` : childText;
}

export function parseJournalContent(content: string): string {
	try {
		const json = JSON.parse(content) as { root: LexicalJsonNode };
		return lexicalToText(json.root).trim();
	} catch {
		return content;
	}
}
