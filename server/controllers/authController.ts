// * Modules * //
import { NextRequest, NextResponse } from "next/server";
import moment from "moment";

// * Exports * //
import Logs from "../services/logs";
import { RegisterUserInput } from "@/src/app/api/auth/register/register.schema";
import { AuthenticateLogin } from "../models/authenticate";
import { LoginUserInput } from "@/src/app/api/auth/login/login.schema";
import AuthJWT from "../services/jwt";
// import { UseJsonWebToken } from "../models/usageJsonWebToken";

// * Components * //

export const login = async(req: Request, data: LoginUserInput) =>{
    const ip = req.headers.get('x-forwarded-for');

    try {
        const login = new AuthenticateLogin(data.user, data.password, ip);
        const user = await login.verify();
        if (user) {
            Logs.create(
                "Logado no sistema",
                "logged_sucess",
                "Usuário logado com <b>Sucesso</b> no sistema!",
                user.id
            );

            const hash = AuthJWT.create({ user: user.user, name: user.name, id: user.id})
            
            if(hash){
                return NextResponse.json({ message: "Logado com sucesso.", hash: hash });
            } else{
                return NextResponse.json({ message: "Token hash não foi gerado." }, { status: 400 });
            }
        } else {
            return NextResponse.json({ message: "Não foi possível fazer o login." }, { status: 400 });
        }
    } catch (error: any) {
        return NextResponse.json({ status: 'fail', message: error.message }, { status: 400 });
    }
};

	
export const register = async (req: NextRequest, data: RegisterUserInput) => {
    const ip = req.headers.get('x-forwarded-for');

    try {
        const register = new AuthenticateLogin(data.user, data.password, ip, data.email, data.name);
        const user = await register.createUser();
        if (user) {
            Logs.create(
                "Cadastrado no sistema", 
                "register_success",
                "Usuário cadastrado no sistema.",
                user.id,
                null
            );
            
            return NextResponse.json({ message: "Cadastrado com sucesso.", data: { identify: user.id} });
        } else {
            return NextResponse.json({ message: "Não foi possível criar o usuário" }, { status: 400 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};