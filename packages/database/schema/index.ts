import { z } from 'zod';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'name',
  'createdAt',
  'updatedAt',
]);

export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'content',
  'authorId',
  'createdAt',
  'updatedAt',
]);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const NullsOrderSchema = z.enum(['first', 'last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string(),
  name: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Post = z.infer<typeof PostSchema>;
