// * Modules * //
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import moment from "moment";

// * Exports * //
import Logs from "../services/logs";
import { RegisterUserInput } from "@/src/app/api/auth/register/register.schema";
import { AuthenticateLogin } from "../models/authenticateLogin";
// import { UseJsonWebToken } from "../models/usageJsonWebToken";

// * Components * //

// export const login = (req: Request, data: RegisterUserInput) =>{
// 	const { user, password } = req.body;

// 	const verifyLogin = new AuthenticateLogin(user, password, getIpClient(req));

// 	verifyLogin.verifyAuth()
// 		.then((user) => {
// 			if(user){
// 				if(user?.id, user?.name, user?.user ){
// 					const token = UseJsonWebToken.createJWT({id: user?.id, name: user?.name, user: user?.user});
// 					Logs.create(
// 						"Logado no sistema",
// 						"logged_sucess",
// 						"Usuário logado com <b>Sucesso</b> no sistema!",
// 						user.id,
// 						null
// 					);

// 					res.json({ token: token, message: "Logado com sucesso!" });
// 				}else{
// 					res.status(500).json({ message: "Ocorreu um erro interno." });
// 				}
// 			}else{
// 				res.status(400).json({ message: "Usuario ou senha incorretos" });
// 			}
// 		})
// 		.catch((error) => {
// 			res.status(500).json({ message: error });
// 		});
// };

export const register = async (req: NextRequest, data: RegisterUserInput) => {
    try {
		const ip = req.headers.get('x-forwarded-for');
        const register = new AuthenticateLogin(data.user, data.password, ip, data.email, data.email);
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

// export const searchMyUser = async (req: AuthenticatedRequest, res: Response) => {
// 	const payload= req.user;

// 	if(payload){
// 		const user = await prisma.users.findUnique({
// 			where: {
// 				id: payload.id,
// 			},
// 			select: {
// 				email: true,
// 				name: true,
// 				user: true,
// 				ip_acess: true,
// 				image_url: true,
// 				status: true,
// 				created_at: true
// 			}
// 		});
	
// 		if (user) {
// 			moment.locale("pt-br");
// 			const formattedCreatedAt = moment(user.created_at).format("DD/MM/YYYY");
// 			const timeCreatedAt = moment(user.created_at).startOf("day").fromNow();

// 			const userResponse = {
// 				...user,
// 				formatted_created_at: formattedCreatedAt,
// 				timeCreatedAt: timeCreatedAt
// 			};
		
// 			res.json({ data: userResponse });
// 		} else {
// 			res.status(401).json({ message: "Usuário não encontrado" });
// 		}
// 	}else{
// 		res.status(401).json({ message: "Usuário não iniciado." });
// 	}
	
// };