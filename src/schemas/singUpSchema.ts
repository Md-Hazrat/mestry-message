import { z } from "zod";


export const usernameValidation = z
  .string()
  .min(2, "Username must be at least 2 characters")
  .max(20, "Username must be at most 20 characters")
  .regex(/^[A-Za-z]+$/, "username must contain only letters");

export const signUpSchema = z.object({
  username: usernameValidation,
  password: z.string().min(6, "Password must be at least 6 characters"),
  email: z.string().email({
    message: "Invalid email address",
  }),
});
