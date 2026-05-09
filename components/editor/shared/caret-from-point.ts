export function caretFromPoint(
	x: number,
	y: number,
): null | {
	offset: number;
	node: Node;
} {
	if (typeof document.caretRangeFromPoint !== "undefined") {
		const range = document.caretRangeFromPoint(x, y);
		if (range === null) {
			return null;
		}
		return {
			node: range.startContainer,
			offset: range.startOffset,
		};
		// @ts-expect-error
	} else if (document.caretPositionFromPoint !== "undefined") {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const range = (document as any).caretPositionFromPoint(x, y);
		if (range === null) {
			return null;
		}
		return {
			node: range.offsetNode,
			offset: range.offset,
		};
	} else {
		// Gracefully handle IE
		return null;
	}
}
