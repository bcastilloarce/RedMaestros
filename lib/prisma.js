import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prismaClientSingleton = () => {
  if (process.env.VERCEL) {
    // Ensure we're using edge-optimized client
    return new PrismaClient().$extends(withAccelerate())
  }
  return new PrismaClient()
}

const globalForPrisma = /** @type {{ prisma: undefined | ReturnType<typeof prismaClientSingleton> }} */ (globalThis)

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma