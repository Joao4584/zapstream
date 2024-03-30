import { NextRequest, NextResponse } from "next/server";
import AuthJWT, { TokenPayloadJWT } from "../services/jwt";

export default function checkVerifyJwt(req: NextRequest): TokenPayloadJWT | any {
    const { headers } = req;
    const authToken = headers.get('Authorization')?.replace('Bearer ', '');
    if(authToken && authToken != 'Bearer' && authToken != undefined){
        const payload = AuthJWT.verify(authToken);
        if(payload == false){
            return NextResponse.json({ code: "token_invalid", message: "Token invalid." }, { status: 401 });
        }
        return payload;
    } else {
        return NextResponse.json({ code: "token_not_found", message: "Token not found." }, { status: 401 });
    }

}