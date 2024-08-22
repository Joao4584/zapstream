import 'hono';
import type { Context } from 'hono';

declare module 'hono' {
  interface ContextSchema extends Context {
    getData?: any;
  }
}