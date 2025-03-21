import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prismaClient = global.prisma || new PrismaClient();

// biome-ignore lint/complexity/useLiteralKeys: <explanation>
if (process.env['NODE_ENV'] === 'development') global.prisma = prismaClient;

export const db = prismaClient;
