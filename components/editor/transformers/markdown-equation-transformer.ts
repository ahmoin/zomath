import type { TextMatchTransformer } from "@lexical/markdown";
import {
	$createEquationNode,
	$isEquationNode,
} from "@/components/editor/nodes/equation-node";

export const EQUATION: TextMatchTransformer = {
	dependencies: [],
	export: (node) => {
		if (!$isEquationNode(node)) return null;
		return `$${node.getEquation()}$`;
	},
	importRegExp: /\$([^$\n]+?)\$/,
	regExp: /\$([^$\n]+?)\$$/,
	replace: (textNode, [, equation]) => {
		const equationNode = $createEquationNode(equation, true);
		textNode.replace(equationNode);
	},
	trigger: "$",
	type: "text-match",
};
