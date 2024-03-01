// * Modules * //
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

// * Exports * //
import { getErrorResponse } from "@/server/helpers";
import { RegisterUserInput, RegisterUserSchema } from "./register.schema";
import * as AuthController from "@/server/controllers/authController";
 
// * Components * //
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RegisterUserInput;
    const data = RegisterUserSchema.parse(body);

    return AuthController.register(req, data);
  }catch (error: any) {
    if (error instanceof ZodError) {
      return getErrorResponse(400, "failed validations", error );
    }

    if (error.code === "P2002") {
      return getErrorResponse(409, "user with that email already exists");
    }

    return getErrorResponse(500, error.message);
  }
}
