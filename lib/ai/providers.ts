import { customProvider, gateway } from "ai";
import { titleModel } from "@/lib/ai/models";
import { isTestEnvironment } from "@/lib/constants";

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

	return gateway.languageModel(modelId);
}

export function getTitleModel() {
	if (isTestEnvironment && myProvider) {
		return myProvider.languageModel("title-model");
	}
	return gateway.languageModel(titleModel.id);
}
