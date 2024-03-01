import { z } from "zod";

export const RegisterUserSchema = z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1, "Full name is required"),
    user: z
      .string({
        required_error: "User is required",
      })
      .min(7, "Full user is required"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .min(1, "Email is required")
      .email("Email is invalid"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1, "Password is required")
      .min(5, "Password must be more than 5 characters")
      .max(32, "Password must be less than 32 characters"),
})

export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
