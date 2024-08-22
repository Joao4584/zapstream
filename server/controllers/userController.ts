// * Modules * //
import { NextRequest, NextResponse } from "next/server";
import { UserModel } from "../models/user";
import { TokenPayloadJWT } from "../services/jwt";

// * Exports * //

// * Components * //

export const userInfo = async(req: Request, payload: TokenPayloadJWT) =>{
    // const ip = req.headers.get('x-forwarded-for');

    // try {
    //     const user = new UserModel();
    //     const userResponse = await user.list(payload.id);
    //     if (userResponse) {
    //         return NextResponse.json({ status: 'success', data: userResponse });
    //     } else {
    //         return NextResponse.json({ status: 'error', message: "Não foi possível buscar o usuario." }, { status: 400 });
    //     }
    // } catch (error: any) {
    //     return NextResponse.json({ status: 'fail', message: error.message }, { status: 400 });
    // }
};
