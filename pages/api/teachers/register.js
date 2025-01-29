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
      tamañoEquipo,
      disponibilidad
    } = req.body;

    const teacher = await prisma.teacher.create({
      data: {
        name: nombre,
        specialty: especialidad,
        otherSpecialty: otraEspecialidad,
        phone: telefono,
        email: email,
        location: ubicacion,
        willingToTravel: dispuestoMovilizarse,
        worksWithTeam: trabajaConEquipo,
        teamSize: tamañoEquipo,
        availability: disponibilidad
      }
    });

    res.status(201).json(teacher);
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering teacher', error: error.message });
  }
}