import { z } from "zod";

export const uploadRequestSchema = z.object({
	type: z.enum(["blob.generate-client-token", "blob.upload-completed"]),
	payload: z.record(z.string(), z.unknown()),
});

export type UploadRequestBody = z.infer<typeof uploadRequestSchema>;
