import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import handleServer from '@/server/server';

const app = new Hono().basePath('/api/');

handleServer(app);
export const POST = handle(app);
export const GET = handle(app);