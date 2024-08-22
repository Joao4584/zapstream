// * Modules * //
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

// * Exports * //
import { getErrorResponse } from "@/server/helpers";
import { LoginUserSchema, LoginUserInput } from "@schema/server/auth.schema";
import * as AuthController from "@server/controllers/authController";

// * Components * //
export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as LoginUserInput;
        const data = LoginUserSchema.parse(body);
        return AuthController.login(req, data);
    }catch (error: any) {
        if (error instanceof ZodError) return getErrorResponse(400, "failed validations", error )
        return getErrorResponse(500, error.message);
    }
  }