import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      nombre,
      especialidad,
      otraEspecialidad,
      telefono,
      email,
      ubicacion,
      dispuestoMovilizarse,
      trabajaConEquipo,
      tamanoEquipo,
      disponibilidad
    } = req.body;

    const maestro = await prisma.maestro.create({
      data: {
        nombre,
        especialidad,
        otraEspecialidad,
        telefono,
        email,
        ubicacion,
        dispuestoMovilizarse,
        trabajaConEquipo,
        tamanoEquipo,
        disponibilidad
      }
    });

    res.status(201).json(maestro);
  } catch (error) {
    console.error('Error de registro:', error);
    res.status(500).json({ message: 'Error al registrar maestro', error: error.message });
  }
}