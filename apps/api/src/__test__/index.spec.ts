import { testClient } from 'hono/testing';
import { expect, it } from 'vitest';
import { route } from '../index.js';

it('test', async () => {
  const res = await testClient(route).api.$get();
  const data = await res.json();
  // console.log(data);
  expect(data.text).toStrictEqual('Hello, World!');
});
