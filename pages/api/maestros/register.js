import { prisma } from '../../../lib/prisma'
import { z } from 'zod'

const MaestroSchema = z.object({
  nombre: z.string().min(2),
  especialidad: z.string(),
  otraEspecialidad: z.string().optional(),
  telefono: z.string().min(8),
  email: z.string().email(),
  ubicacion: z.string(),
  dispuestoMovilizarse: z.boolean(),
  trabajaConEquipo: z.boolean(),
  tamanoEquipo: z.number().optional(),
  disponibilidad: z.string()
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedData = MaestroSchema.parse(req.body);

    const maestro = await prisma.maestro.create({
      data: validatedData
    });

    res.status(201).json(maestro);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: 'Datos inválidos', errors: error.errors });
    }
    console.error('Error de registro:', error);
    res.status(500).json({ message: 'Error al registrar maestro' });
  }
}