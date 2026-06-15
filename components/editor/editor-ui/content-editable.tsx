"use client";

import { ContentEditable as LexicalContentEditable } from "@lexical/react/LexicalContentEditable";
import type { JSX } from "react";
import { useEffect, useRef } from "react";

type Props = {
	placeholder: string;
	className?: string;
	placeholderClassName?: string;
	scrollToTop?: boolean;
	noScroll?: boolean;
};

export function ContentEditable({
	placeholder,
	className,
	placeholderClassName,
	scrollToTop,
	noScroll,
}: Props): JSX.Element {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!scrollToTop) return;
		const el = ref.current;
		if (!el) return;
		const t = setTimeout(() => {
			el.scrollTop = 0;
		}, 50);
		return () => clearTimeout(t);
	}, [scrollToTop]);

	return (
		<LexicalContentEditable
			ref={ref}
			className={`ContentEditable__root relative min-h-72 ${noScroll ? "overflow-visible" : "overflow-auto"} px-4 py-2 focus:outline-none ${className ?? ""}`.trim()}
			aria-placeholder={placeholder}
			placeholder={
				<div
					className={`text-muted-foreground pointer-events-none absolute top-0 left-0 overflow-hidden px-4 py-2 text-ellipsis select-none ${placeholderClassName ?? ""}`.trim()}
				>
					{placeholder}
				</div>
			}
		/>
	);
}
