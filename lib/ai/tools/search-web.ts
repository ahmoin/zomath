import { tavily } from "@tavily/core";
import { tool } from "ai";
import { z } from "zod";
import type { SourceTracker } from "@/lib/ai/tools/read-journal";

export const searchWeb = ({ tracker }: { tracker: SourceTracker }) =>
	tool({
		description:
			"Search the web for up-to-date information on a topic using Tavily.",
		inputSchema: z.object({
			query: z.string().describe("The search query"),
		}),
		execute: async ({ query }) => {
			const tv = tavily({ apiKey: process.env.TAVILY_API_KEY ?? "" });
			const searchResult = await tv.search(query, { maxResults: 8 });
			return searchResult.results.map((r) => {
				tracker.count += 1;
				tracker.sources.push({
					number: String(tracker.count),
					title: r.title,
					url: r.url,
					type: "web",
				});
				return {
					sourceNumber: tracker.count,
					title: r.title,
					url: r.url,
					content: r.content,
				};
			});
		},
	});
