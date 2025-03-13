import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { db } from '@repo/database';

const app = new Hono().basePath('/api');

export const route = app.get('/', (c) => {
  const users = db.user.findMany();
  return c.json({ text: 'Hello, World!', users });
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
