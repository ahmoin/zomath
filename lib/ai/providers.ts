import { customProvider } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { titleModel } from "@/lib/ai/models";
import { isTestEnvironment } from "@/lib/constants";

const openrouter = createOpenRouter({
	apiKey: process.env.OPENROUTER_API_KEY,
});

export const myProvider = isTestEnvironment
	? (() => {
			const { chatModel, titleModel } = require("./models.mock");
			return customProvider({
				languageModels: {
					"chat-model": chatModel,
					"title-model": titleModel,
				},
			});
		})()
	: null;

export function getLanguageModel(modelId: string) {
	if (isTestEnvironment && myProvider) {
		return myProvider.languageModel(modelId);
	}

	return openrouter.chat(modelId);
}

export function getTitleModel() {
	if (isTestEnvironment && myProvider) {
		return myProvider.languageModel("title-model");
	}
	return openrouter.chat(titleModel.id);
}
