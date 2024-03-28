import { z } from "zod";

export const LoginUserSchema = z.object({
    user: z
    .string({
      required_error: "User is required",
    })
    .min(7, "Full user is required"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
  });
  
export type LoginUserInput = z.infer<typeof LoginUserSchema>;