import { useState } from 'react';

export default function RegistroCliente() {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    tipoProyecto: '',
    descripcion: '',
  });

  const tiposProyecto = [
    'Construcción',
    'Remodelación',
    'Reparación',
    'Mantenimiento',
    'Instalación',
    'Otro',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Datos del cliente:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Registro de Cliente</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Nombre completo</label>
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Dirección</label>
          <input
            type="text"
            value={formData.direccion}
            onChange={(e) => setFormData({...formData, direccion: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Tipo de Proyecto</label>
          <select
            value={formData.tipoProyecto}
            onChange={(e) => setFormData({...formData, tipoProyecto: e.target.value})}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione un tipo de proyecto</option>
            {tiposProyecto.map((tipo) => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Descripción del Proyecto</label>
          <textarea
            value={formData.descripcion}
            onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
            className="w-full p-2 border rounded h-32"
            required
            placeholder="Describa brevemente el proyecto o trabajo que necesita realizar..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Registrarse como Cliente
        </button>
      </form>
    </div>
  );
}
