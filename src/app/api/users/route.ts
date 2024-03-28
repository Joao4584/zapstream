// * Modules * //
import { NextRequest, NextResponse } from "next/server";

// * Exports * //
import { getErrorResponse } from "@/server/helpers";
import * as UserController from '@/server/controllers/userController';
import checkVerifyJwt from "@/server/helpers/checkVerifyJwt";

// * Components * //
export async function GET(req: NextRequest) {
    try {
        const payload = checkVerifyJwt(req);
        return NextResponse.json({ status: 'success', data: payload });
        return UserController.userInfo(req, payload)
    }catch (error: any) {
       return getErrorResponse(500, error.message);
    }
  }