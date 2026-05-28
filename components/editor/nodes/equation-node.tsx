"use client";

import katex from "katex";
import type {
	DOMConversionMap,
	DOMConversionOutput,
	DOMExportOutput,
	EditorConfig,
	LexicalEditor,
	LexicalNode,
	NodeKey,
	SerializedLexicalNode,
	Spread,
} from "lexical";
import { $getNodeByKey, DecoratorNode } from "lexical";
import type React from "react";
import { useEffect, useRef, useState } from "react";

export type SerializedEquationNode = Spread<
	{
		equation: string;
		inline: boolean;
	},
	SerializedLexicalNode
>;

function EquationComponent({
	equation,
	inline,
	nodeKey,
	editor,
}: {
	equation: string;
	inline: boolean;
	nodeKey: NodeKey;
	editor: LexicalEditor;
}) {
	const [editing, setEditing] = useState(false);
	const [draft, setDraft] = useState(equation);
	const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
	const katexRef = useRef<HTMLSpanElement>(null);
	const savedScrollRef = useRef<{ el: Element; top: number } | null>(null);

	useEffect(() => {
		if (katexRef.current) {
			try {
				katex.render(equation, katexRef.current, {
					displayMode: !inline,
					throwOnError: false,
					output: "html",
				});
			} catch {
				katexRef.current.textContent = equation;
			}
		}
	}, [equation, inline, editing]);

	useEffect(() => {
		if (equation === "") {
			enterEdit();
		}
		// biome-ignore lint/correctness/useExhaustiveDependencies: only runs on mount
	}, []);

	useEffect(() => {
		if (editing) {
			inputRef.current?.focus({ preventScroll: true });
			inputRef.current?.select();
		}
	}, [editing]);

	function saveScroll() {
		let el: Element | null = katexRef.current;
		while (el && el !== document.documentElement) {
			if (el.scrollHeight > el.clientHeight) {
				savedScrollRef.current = { el, top: el.scrollTop };
				return;
			}
			el = el.parentElement;
		}
	}

	function restoreScroll() {
		if (savedScrollRef.current) {
			savedScrollRef.current.el.scrollTop = savedScrollRef.current.top;
			savedScrollRef.current = null;
		}
	}

	function enterEdit(e?: React.MouseEvent | React.KeyboardEvent) {
		e?.stopPropagation();
		saveScroll();
		setEditing(true);
	}

	function commitEdit(refocus = false) {
		setEditing(false);
		if (draft !== equation) {
			editor.update(() => {
				const node = $getNodeByKey(nodeKey);
				if ($isEquationNode(node)) node.setEquation(draft);
			});
		}
		if (refocus) editor.focus();
		requestAnimationFrame(restoreScroll);
	}

	if (editing) {
		const sharedClass =
			"border border-primary rounded px-2 py-0.5 text-sm font-mono bg-background focus:outline-none";
		return inline ? (
			<input
				ref={inputRef}
				className={`${sharedClass} inline w-48`}
				value={draft}
				onChange={(e) => setDraft(e.target.value)}
				onBlur={() => commitEdit()}
				onKeyDown={(e) => {
					if (e.key === "Enter") commitEdit(true);
					if (e.key === "Escape") {
						setEditing(false);
						editor.focus();
					}
				}}
			/>
		) : (
			<textarea
				ref={inputRef}
				className={`${sharedClass} block w-full min-h-[60px] resize-y`}
				value={draft}
				onChange={(e) => setDraft(e.target.value)}
				onBlur={() => commitEdit()}
				onKeyDown={(e) => {
					if (e.key === "Escape") {
						setEditing(false);
						editor.focus();
					}
					if (e.key === "Enter" && e.shiftKey) {
						e.preventDefault();
						commitEdit(true);
					}
				}}
			/>
		);
	}

	return (
		<span
			role="button"
			tabIndex={0}
			onClick={(e) => enterEdit(e)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") enterEdit(e);
			}}
			className={`equation-node cursor-pointer rounded px-1 hover:bg-muted transition-colors ${inline ? "inline" : "block my-2 text-center"}`}
		>
			{equation ? (
				<span ref={katexRef} />
			) : (
				<span className="text-muted-foreground text-sm italic">
					Enter equation...
				</span>
			)}
		</span>
	);
}

export class EquationNode extends DecoratorNode<JSX.Element> {
	__equation: string;
	__inline: boolean;

	static getType(): string {
		return "equation";
	}

	static clone(node: EquationNode): EquationNode {
		return new EquationNode(node.__equation, node.__inline, node.__key);
	}

	constructor(equation: string, inline = true, key?: NodeKey) {
		super(key);
		this.__equation = equation;
		this.__inline = inline;
	}

	static importJSON(serialized: SerializedEquationNode): EquationNode {
		return $createEquationNode(serialized.equation, serialized.inline);
	}

	exportJSON(): SerializedEquationNode {
		return {
			...super.exportJSON(),
			equation: this.__equation,
			inline: this.__inline,
			type: "equation",
			version: 1,
		};
	}

	createDOM(_config: EditorConfig): HTMLElement {
		const el = document.createElement(this.__inline ? "span" : "div");
		return el;
	}

	updateDOM(prev: this): boolean {
		return prev.__inline !== this.__inline;
	}

	static importDOM(): DOMConversionMap | null {
		return {
			span: () => ({
				conversion: (el): DOMConversionOutput => {
					const equation = el.getAttribute("data-lexical-equation");
					const inline = el.getAttribute("data-lexical-inline") !== "false";
					if (!equation) return { node: null };
					return { node: $createEquationNode(equation, inline) };
				},
				priority: 2,
			}),
		};
	}

	exportDOM(): DOMExportOutput {
		const el = document.createElement("span");
		el.setAttribute("data-lexical-equation", this.__equation);
		el.setAttribute("data-lexical-inline", String(this.__inline));
		katex.render(this.__equation, el, {
			displayMode: !this.__inline,
			throwOnError: false,
		});
		return { element: el };
	}

	getEquation(): string {
		return this.getLatest().__equation;
	}

	setEquation(eq: string): this {
		const writable = this.getWritable();
		writable.__equation = eq;
		return writable;
	}

	isInline(): boolean {
		return this.__inline;
	}

	decorate(editor: LexicalEditor, _config: EditorConfig): JSX.Element {
		return (
			<EquationComponent
				equation={this.__equation}
				inline={this.__inline}
				nodeKey={this.__key}
				editor={editor}
			/>
		);
	}
}

export function $createEquationNode(
	equation = "",
	inline = true,
): EquationNode {
	return new EquationNode(equation, inline);
}

export function $isEquationNode(
	node: LexicalNode | null | undefined,
): node is EquationNode {
	return node instanceof EquationNode;
}
