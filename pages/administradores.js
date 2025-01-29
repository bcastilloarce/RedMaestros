import { useState } from 'react';

export default function Administradores() {
  // Ejemplo de datos (en producción, estos vendrían de una API)
  const [maestros] = useState([]);
  const [clientes] = useState([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Panel de Administradores</h1>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Columna de Maestros */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Maestros Registrados</h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Especialidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {maestros.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                      No hay maestros registrados
                    </td>
                  </tr>
                ) : (
                  maestros.map((maestro, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{maestro.nombre}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{maestro.especialidad}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{maestro.estado}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Columna de Clientes */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Clientes Registrados</h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solicitudes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clientes.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                      No hay clientes registrados
                    </td>
                  </tr>
                ) : (
                  clientes.map((cliente, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{cliente.nombre}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{cliente.solicitudes}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{cliente.estado}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
