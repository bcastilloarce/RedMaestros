import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  // En producción (Vercel Edge)
  if (process.env.VERCEL) {
    const { PrismaClient } = require('@prisma/client/edge')
    const { withAccelerate } = require('@prisma/extension-accelerate')
    return new PrismaClient().$extends(withAccelerate())
  }

  // En desarrollo local o Docker
  return new PrismaClient()
}

const globalForPrisma = /** @type {{ prisma: undefined | ReturnType<typeof prismaClientSingleton> }} */ (globalThis)

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma