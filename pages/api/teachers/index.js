import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const maestros = await prisma.maestro.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.status(200).json(maestros);
  } catch (error) {
    console.error('Error fetching maestros:', error);
    res.status(500).json({ message: 'Error fetching maestros', error: error.message });
  }
}