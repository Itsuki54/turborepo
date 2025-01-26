import { testClient } from 'hono/testing';
import { expect, it } from 'vitest';
import { route } from '../index.js';

it('test', async () => {
  const res = await testClient(route).api.$get();
  const data = await res.json();
  expect(data).toStrictEqual({ text: 'Hello, World!' });
});
