import { hc } from 'hono/client';

import type { AppType } from '../index.ts';

// biome-ignore lint/complexity/useLiteralKeys: <explanation>
// biome-ignore lint/style/noNonNullAssertion: <explanation>
export const client = hc<AppType>(process.env['API_URL']!);
