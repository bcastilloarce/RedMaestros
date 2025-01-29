import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const { tipo } = router.query;
  const [timeline, setTimeline] = useState([
    {
      fecha: '2024-01-28',
      estado: 'En espera',
      descripcion: 'Registro inicial'
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">
        Portal de {tipo}
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-6">Línea de Tiempo</h2>
        
        <div className="space-y-6">
          {timeline.map((event, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-600 last:pb-0">
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-500 mb-1">{event.fecha}</div>
                <div className="font-medium text-gray-900 mb-1">{event.estado}</div>
                <div className="text-gray-600">{event.descripcion}</div>
              </div>
            </div>
          ))}
        </div>

        {timeline.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No hay eventos registrados
          </div>
        )}
      </div>
    </div>
  );
}
