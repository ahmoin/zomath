/* eslint-disable react-refresh/only-export-components */
import * as React from "react";

export type ToolbarItemKey =
	| "undoRedo"
	| "blockFormat"
	| "fontFamily"
	| "fontSize"
	| "fontFormat"
	| "subSuper"
	| "link"
	| "clearFormatting"
	| "fontColor"
	| "fontBackground"
	| "fontAlignment"
	| "blockInsert";

export type FooterItemKey =
	| "characterCount"
	| "speechToText"
	| "shareContent"
	| "exportImport"
	| "markdownToggle"
	| "viewOnly"
	| "clearEditor"
	| "treeView";

export type PluginItemKey =
	| "componentPicker"
	| "emojiPicker"
	| "autoEmbed"
	| "mentions"
	| "draggableBlock"
	| "autoComplete"
	| "autoLink"
	| "floatingTextToolbar"
	| "floatingLinkToolbar"
	| "contextMenu"
	| "specialText"
	| "tabFocus"
	| "tabIndentation";

export type BlockFormatItemKey =
	| "paragraph"
	| "h1"
	| "h2"
	| "h3"
	| "numberList"
	| "bulletList"
	| "checkList"
	| "codeBlock"
	| "blockquote";

export type BlockInsertItemKey =
	| "divider"
	| "image"
	| "table"
	| "columnsLayout"
	| "embeds";

export type ComponentPickerItemKey =
	| "paragraph"
	| "h1"
	| "h2"
	| "h3"
	| "numberList"
	| "bulletList"
	| "checkList"
	| "blockquote"
	| "codeBlock"
	| "divider"
	| "image"
	| "table"
	| "columnsLayout"
	| "tweetEmbed"
	| "youtubeEmbed"
	| "dateTime"
	| "alignLeft"
	| "alignCenter"
	| "alignRight"
	| "alignJustify";

export const TOOLBAR_ITEM_LABELS: Record<ToolbarItemKey, string> = {
	undoRedo: "Undo / Redo",
	blockFormat: "Block Format",
	fontFamily: "Font Family",
	fontSize: "Font Size",
	fontFormat: "Font Format",
	subSuper: "Subscript / Superscript",
	link: "Link",
	clearFormatting: "Clear Formatting",
	fontColor: "Font Color",
	fontBackground: "Font Background",
	fontAlignment: "Font Alignment",
	blockInsert: "Block Insert",
};

export const FOOTER_ITEM_LABELS: Record<FooterItemKey, string> = {
	characterCount: "Character Count",
	speechToText: "Speech to Text",
	shareContent: "Share Content",
	exportImport: "Export / Import",
	markdownToggle: "Markdown Toggle",
	viewOnly: "View Only",
	clearEditor: "Clear Editor",
	treeView: "Tree View",
};

export const PLUGIN_ITEM_LABELS: Record<PluginItemKey, string> = {
	componentPicker: "Component Picker",
	emojiPicker: "Emoji Picker",
	autoEmbed: "Auto Embed",
	mentions: "Mentions",
	draggableBlock: "Draggable Block",
	autoComplete: "Auto Complete",
	autoLink: "Auto Link",
	floatingTextToolbar: "Floating Text Toolbar",
	floatingLinkToolbar: "Floating Link Toolbar",
	contextMenu: "Context Menu",
	specialText: "Special Text",
	tabFocus: "Tab Focus",
	tabIndentation: "Tab Indentation",
};

export const BLOCK_FORMAT_ITEM_LABELS: Record<BlockFormatItemKey, string> = {
	paragraph: "Paragraph",
	h1: "Heading 1",
	h2: "Heading 2",
	h3: "Heading 3",
	numberList: "Numbered List",
	bulletList: "Bullet List",
	checkList: "Check List",
	codeBlock: "Code Block",
	blockquote: "Blockquote",
};

export const BLOCK_INSERT_ITEM_LABELS: Record<BlockInsertItemKey, string> = {
	divider: "Horizontal Rule",
	image: "Image",
	table: "Table",
	columnsLayout: "Columns Layout",
	embeds: "Embeds",
};

export const COMPONENT_PICKER_ITEM_LABELS: Record<
	ComponentPickerItemKey,
	string
> = {
	paragraph: "Paragraph",
	h1: "Heading 1",
	h2: "Heading 2",
	h3: "Heading 3",
	numberList: "Numbered List",
	bulletList: "Bullet List",
	checkList: "Check List",
	blockquote: "Blockquote",
	codeBlock: "Code Block",
	divider: "Horizontal Rule",
	image: "Image",
	table: "Table",
	columnsLayout: "Columns Layout",
	tweetEmbed: "Tweet Embed",
	youtubeEmbed: "YouTube Embed",
	dateTime: "Date / Time",
	alignLeft: "Align Left",
	alignCenter: "Align Center",
	alignRight: "Align Right",
	alignJustify: "Align Justify",
};

export type BlockViewerContextType = {
	toolbarItems: Record<ToolbarItemKey, boolean>;
	footerItems: Record<FooterItemKey, boolean>;
	pluginItems: Record<PluginItemKey, boolean>;
	blockFormatItems: Record<BlockFormatItemKey, boolean>;
	blockInsertItems: Record<BlockInsertItemKey, boolean>;
	componentPickerItems: Record<ComponentPickerItemKey, boolean>;
	toggleToolbarItem: (key: ToolbarItemKey) => void;
	toggleFooterItem: (key: FooterItemKey) => void;
	togglePluginItem: (key: PluginItemKey) => void;
	toggleBlockFormatItem: (key: BlockFormatItemKey) => void;
	toggleBlockInsertItem: (key: BlockInsertItemKey) => void;
	toggleComponentPickerItem: (key: ComponentPickerItemKey) => void;
};

const BlockViewerContext = React.createContext<BlockViewerContextType | null>(
	null,
);

function BlockViewerProvider({ children }: { children: React.ReactNode }) {
	const [toolbarItems, setToolbarItems] = React.useState<
		Record<ToolbarItemKey, boolean>
	>({
		undoRedo: true,
		blockFormat: true,
		fontFamily: true,
		fontSize: true,
		fontFormat: true,
		subSuper: true,
		link: true,
		clearFormatting: true,
		fontColor: true,
		fontBackground: true,
		fontAlignment: true,
		blockInsert: true,
	});

	const [footerItems, setFooterItems] = React.useState<
		Record<FooterItemKey, boolean>
	>({
		characterCount: false,
		speechToText: true,
		shareContent: true,
		exportImport: true,
		markdownToggle: true,
		viewOnly: true,
		clearEditor: true,
		treeView: true,
	});

	const [pluginItems, setPluginItems] = React.useState<
		Record<PluginItemKey, boolean>
	>({
		componentPicker: true,
		emojiPicker: true,
		autoEmbed: true,
		mentions: true,
		draggableBlock: true,
		autoComplete: true,
		autoLink: true,
		floatingTextToolbar: true,
		floatingLinkToolbar: true,
		contextMenu: true,
		specialText: true,
		tabFocus: true,
		tabIndentation: true,
	});

	const [blockFormatItems, setBlockFormatItems] = React.useState<
		Record<BlockFormatItemKey, boolean>
	>({
		paragraph: true,
		h1: true,
		h2: true,
		h3: true,
		numberList: true,
		bulletList: true,
		checkList: true,
		codeBlock: true,
		blockquote: true,
	});

	const [blockInsertItems, setBlockInsertItems] = React.useState<
		Record<BlockInsertItemKey, boolean>
	>({
		divider: true,
		image: true,
		table: true,
		columnsLayout: true,
		embeds: true,
	});

	const [componentPickerItems, setComponentPickerItems] = React.useState<
		Record<ComponentPickerItemKey, boolean>
	>({
		paragraph: true,
		h1: true,
		h2: true,
		h3: true,
		numberList: true,
		bulletList: true,
		checkList: true,
		blockquote: true,
		codeBlock: true,
		divider: true,
		image: true,
		table: true,
		columnsLayout: true,
		tweetEmbed: true,
		youtubeEmbed: true,
		dateTime: true,
		alignLeft: true,
		alignCenter: true,
		alignRight: true,
		alignJustify: true,
	});

	const toggleToolbarItem = React.useCallback((key: ToolbarItemKey) => {
		setToolbarItems((prev) => ({ ...prev, [key]: !prev[key] }));
	}, []);

	const toggleFooterItem = React.useCallback((key: FooterItemKey) => {
		setFooterItems((prev) => ({ ...prev, [key]: !prev[key] }));
	}, []);

	const togglePluginItem = React.useCallback((key: PluginItemKey) => {
		setPluginItems((prev) => ({ ...prev, [key]: !prev[key] }));
	}, []);

	const toggleBlockFormatItem = React.useCallback((key: BlockFormatItemKey) => {
		setBlockFormatItems((prev) => ({ ...prev, [key]: !prev[key] }));
	}, []);

	const toggleBlockInsertItem = React.useCallback((key: BlockInsertItemKey) => {
		setBlockInsertItems((prev) => ({ ...prev, [key]: !prev[key] }));
	}, []);

	const toggleComponentPickerItem = React.useCallback(
		(key: ComponentPickerItemKey) => {
			setComponentPickerItems((prev) => ({ ...prev, [key]: !prev[key] }));
		},
		[],
	);

	return (
		<BlockViewerContext.Provider
			value={{
				toolbarItems,
				footerItems,
				pluginItems,
				blockFormatItems,
				blockInsertItems,
				componentPickerItems,
				toggleToolbarItem,
				toggleFooterItem,
				togglePluginItem,
				toggleBlockFormatItem,
				toggleBlockInsertItem,
				toggleComponentPickerItem,
			}}
		>
			{children}
		</BlockViewerContext.Provider>
	);
}

function useBlockViewer() {
	const context = React.useContext(BlockViewerContext);
	if (!context) {
		throw new Error("useBlockViewer must be used within a BlockViewerProvider");
	}
	return context;
}

export { BlockViewerProvider, useBlockViewer };
