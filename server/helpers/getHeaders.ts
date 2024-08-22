import { Context } from 'hono';

export const getIP = (c: Context): string | null => {
  const forwarded = c.req.header('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0] : c.req.header('remote-addr') || null;
}
