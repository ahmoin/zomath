export type TextSegment =
	| { type: "text"; content: string }
	| { type: "equation"; content: string };

const EQUATION_REGEX = /\$([^$\n]+?)\$/g;

export function parseEquations(text: string): TextSegment[] {
	const segments: TextSegment[] = [];
	let lastIndex = 0;
	let match = EQUATION_REGEX.exec(text);

	while (match !== null) {
		if (match.index > lastIndex) {
			const textBefore = text.slice(lastIndex, match.index);
			if (textBefore.trim()) {
				segments.push({ type: "text", content: textBefore });
			}
		}

		segments.push({ type: "equation", content: match[1] });
		lastIndex = EQUATION_REGEX.lastIndex;
		match = EQUATION_REGEX.exec(text);
	}

	if (lastIndex < text.length) {
		const textAfter = text.slice(lastIndex);
		if (textAfter.trim()) {
			segments.push({ type: "text", content: textAfter });
		}
	}

	if (segments.length === 0 && text.trim()) {
		segments.push({ type: "text", content: text });
	}

	return segments;
}
