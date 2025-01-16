import { hc } from 'hono/client';

import type { AppType } from '../index.ts';

export const client = hc<AppType>(process.env.API_URL!);
