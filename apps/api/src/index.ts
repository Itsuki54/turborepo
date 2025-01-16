import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

const route = app.get('/', (c) => {
  return c.json({ text: 'Hello, World!' });
});

const port = 4000;

serve({
  fetch: app.fetch,
  port,
});

export type AppType = typeof route;

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
