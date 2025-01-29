import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const teachers = await prisma.teacher.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.status(200).json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ message: 'Error fetching teachers', error: error.message });
  }
}