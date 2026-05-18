import type React from "react";
import {
	FillBlankIllustration,
	FlashCardsIllustration,
	FlipTilesIllustration,
	GameshowIllustration,
	MatchUpIllustration,
	PairOrNoPairIllustration,
	QuizIllustration,
	RankOrderIllustration,
	SpeedRoundIllustration,
	SpotErrorIllustration,
	TrueOrFalseIllustration,
	TypeAnswerIllustration,
} from "@/components/sections/practice-hero/illustrations";

export const templates: Array<{
	id: string;
	title: string;
	description: string;
	Illustration: () => React.JSX.Element;
}> = [
	{
		id: "quiz",
		title: "Quiz",
		description:
			"Multiple choice questions. Tap the correct answer to proceed.",
		Illustration: QuizIllustration,
	},
	{
		id: "match-up",
		title: "Match Up",
		description: "Drag and drop each keyword next to its correct definition.",
		Illustration: MatchUpIllustration,
	},
	{
		id: "flash-cards",
		title: "Flash Cards",
		description:
			"Test yourself using cards with prompts on the front and answers on the back.",
		Illustration: FlashCardsIllustration,
	},
	{
		id: "gameshow-quiz",
		title: "Gameshow Quiz",
		description:
			"A multiple choice quiz with time pressure, lifelines, and a bonus round.",
		Illustration: GameshowIllustration,
	},
	{
		id: "true-or-false",
		title: "True or False",
		description:
			"Items fly by at speed. Get as many right as you can before time runs out.",
		Illustration: TrueOrFalseIllustration,
	},
	{
		id: "fill-in-the-blank",
		title: "Fill in the Blank",
		description:
			"Complete each equation or statement by typing the missing value.",
		Illustration: FillBlankIllustration,
	},
	{
		id: "rank-order",
		title: "Rank Order",
		description: "Drag and drop the steps or values into their correct order.",
		Illustration: RankOrderIllustration,
	},
	{
		id: "flip-tiles",
		title: "Flip Tiles",
		description:
			"Explore two-sided tiles by tapping to reveal the answer underneath.",
		Illustration: FlipTilesIllustration,
	},
	{
		id: "speed-round",
		title: "Speed Round",
		description:
			"Rapid-fire questions against the clock. How many can you answer correctly?",
		Illustration: SpeedRoundIllustration,
	},
	{
		id: "spot-the-error",
		title: "Spot the Error",
		description:
			"Find the mistake in a worked solution before the timer runs out.",
		Illustration: SpotErrorIllustration,
	},
	{
		id: "pair-or-no-pair",
		title: "Pair or No Pair",
		description: "Decide whether two expressions or values are equivalent.",
		Illustration: PairOrNoPairIllustration,
	},
	{
		id: "type-the-answer",
		title: "Type the Answer",
		description: "Type the correct answer for each prompt or equation.",
		Illustration: TypeAnswerIllustration,
	},
];
