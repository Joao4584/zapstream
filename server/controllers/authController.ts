// * Modules * //
import { NextRequest, NextResponse } from "next/server";
import moment from "moment";

// * Exports * //
import Logs from "../services/logs";
import { AuthenticateLogin } from "../models/authenticate";
import AuthJWT from "../services/jwt";
import { Hono, type Context, type ContextSchema } from "hono";
import { validateSchema } from "../middlewares/validationSchema";
import { LoginUserSchema, RegisterUserSchema, type LoginUserInput, type RegisterUserInput } from "@/schema/server/auth.schema";
import { authenticationJWT } from "../middlewares/authentication";
import * as HeaderHelper from "@/server/helpers/getHeaders";
export const authController = new Hono();

authController.post('/login', validateSchema(LoginUserSchema), async (c : ContextSchema) => {
  const data: LoginUserInput = c.getData;
  const ip = HeaderHelper.getIP(c);

  try {
      const login = new AuthenticateLogin(data.user, data.password, ip);
      const user = await login.verify();
      if (user) {
          const hash = AuthJWT.create({ user: user.user, name: user.name, id: user.id})

          if(hash){
            Logs.create({
                title: "Logado no sistema",
                reference: "logged_success",
                content: "Usuário logado com <b>Sucesso</b> no sistema!",
                user_id: user.id,
                context: c
            });

            return c.json({ code: "success" , message: "Logado com sucesso.", hash: hash }, 200);
          } else{
            return c.json({ code: 'invalid_login',  message: "Token hash não foi gerado." }, 400);
          }
      } else {
          return c.json({ code: 'invalid_login',  message: "Não foi possível fazer o login." }, 400);
      }
  } catch (error: any) {
    return c.json({ code: 'fail', message: error.message }, 400);
  }
  
});

authController.post('/register', validateSchema(RegisterUserSchema), async (c : ContextSchema) => {
  const data: RegisterUserInput = c.getData;
  const ip = HeaderHelper.getIP(c);

  try {
      const register = new AuthenticateLogin(data.user, data.password, ip, data.email, data.name);
      const user = await register.createUser();

      if (user) {
          Logs.create({
              title: "Cadastrado no sistema",
              reference: "register_success",
              content: "Usuário cadastrado no sistema.",
              user_id: user.id,
              context: c
          });

          return c.json({ code: 'success', message: "Cadastrado com sucesso.", data: { identify: user.id} }, 200);
      } else {
          return c.json({ code: 'invalid_register',  message: "Não foi possível criar o usuário." }, 400);
      }
  } catch (error: any) {
    return c.json({ code: 'fail', message: error.message }, 400);
  }
});