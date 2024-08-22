import { Context, MiddlewareHandler, type ContextSchema } from 'hono';
import { z, ZodSchema } from 'zod';

export const validateSchema = (schema: ZodSchema, ): MiddlewareHandler => {
  return async (c: ContextSchema, next) => {
    try {
      let data: any;
      if (c.req.method === 'GET') {
        data = c.req.query();
      } else if (c.req.method === 'POST' || c.req.method === 'PUT') {
        data = await c.req.json();
      } else {
        return c.json({
          message: 'Método não suportado para validação',
        }, 405); 
      }
      c.getData = schema.parse(data);

      await next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return c.json({
          message: 'Validation failed',
          errors: error.errors,
        }, 400);
      }

      return c.json({
        message: 'Internal server error',
      }, 500);
    }
  };
};
