import { $createTextNode, $getSelection, $isRangeSelection } from "lexical";
import { useToolbarContext } from "@/components/editor/context/toolbar-context";
import { $createEquationNode } from "@/components/editor/nodes/equation-node";
import { blockTypeToBlockName } from "@/components/editor/plugins/toolbar/block-format/block-format-data";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const BLOCK_FORMAT_VALUE = "equation";

export function FormatEquation() {
	const { activeEditor } = useToolbarContext();

	function insertEquation() {
		activeEditor.update(() => {
			const selection = $getSelection();
			if (!$isRangeSelection(selection)) return;

			const text = selection.getTextContent();
			if (text) {
				const equationNode = $createEquationNode(text, true);
				selection.insertNodes([equationNode]);
			} else {
				const open = $createTextNode("$");
				selection.insertNodes([open]);
				open.select(1, 1);
			}
		});
	}

	return (
		<DropdownMenuItem onClick={insertEquation}>
			<div className="flex items-center gap-1 font-normal">
				{blockTypeToBlockName[BLOCK_FORMAT_VALUE].icon}
				{blockTypeToBlockName[BLOCK_FORMAT_VALUE].label}
			</div>
		</DropdownMenuItem>
	);
}
