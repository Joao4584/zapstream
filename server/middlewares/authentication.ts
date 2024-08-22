import { Context, MiddlewareHandler } from 'hono';
import AuthJWT, { TokenPayloadJWT } from '../services/jwt';

// Middleware para verificar o JWT
export const authenticationJWT = (): MiddlewareHandler => {
  return async (c: Context, next) => {
    const authToken = c.req.header('Authorization')?.replace('Bearer ', '');

    if (authToken && authToken !== 'Bearer' && authToken !== undefined) {
      try {
        const payload: TokenPayloadJWT | false = AuthJWT.verify(authToken);
        if (payload === false) {
          return c.json({ code: 'token_invalid', message: 'Token invalid.' }, 401);
        }
        c.req.validTokenPayload = payload;
        await next(); // Passa para o próximo middleware ou rota
      } catch (error) {
        return c.json({ code: 'token_invalid', message: 'Token invalid.' }, 401);
      }
    } else {
      return c.json({ code: 'token_invalid', message: 'Token not found.' }, 401);
    }
  };
};
