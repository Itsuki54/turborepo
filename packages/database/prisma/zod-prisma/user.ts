import * as z from 'zod';

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
