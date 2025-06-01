import { z } from "zod";
export const messageSchema = z.object({
  Content: z
    .string()
    .min(10, { message: "must be at least 10 charactures" })
    .max(300, { message: "must be at most 300 charactures" }),
});
