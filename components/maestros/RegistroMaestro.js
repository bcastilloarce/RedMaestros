import { useState } from 'react';
import GestionDisponibilidad from './GestionDisponibilidad';

export default function RegistroMaestro() {
  const [formData, setFormData] = useState({
    nombre: '',
    especialidad: '',
    otraEspecialidad: '',
    telefono: '',
    ubicacion: '',
    dispuestoMovilizarse: false,
    trabajaConEquipo: false,
    tamañoEquipo: 1,
  });
  const [step, setStep] = useState('form'); // 'form', 'disponibilidad', 'success'
  const [disponibilidad, setDisponibilidad] = useState(null);

  const especialidades = [
    'Albañilería',
    'Pintura',
    'Carpintería',
    'Electricidad',
    'Plomería',
    'Terminaciones',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('disponibilidad');
  };

  const handleDisponibilidadSubmit = (disponibilidadData) => {
    setDisponibilidad(disponibilidadData);
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Datos del maestro:', { ...formData, disponibilidad: disponibilidadData });
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">¡Registro exitoso!</h2>
        <p className="text-gray-700 mb-4">Revisa tu correo para más información.</p>
        <p className="text-gray-600">Te contactaremos pronto para verificar tus datos.</p>
      </div>
    );
  }

  if (step === 'disponibilidad') {
    return (
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Indica tu Disponibilidad</h2>
        <GestionDisponibilidad onSubmit={handleDisponibilidadSubmit} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Registro de Maestro</h2>
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
          <label className="block text-gray-700 mb-2">Especialidad</label>
          <select
            value={formData.especialidad}
            onChange={(e) => setFormData({...formData, especialidad: e.target.value})}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione una especialidad</option>
            {especialidades.map((esp) => (
              <option key={esp} value={esp}>{esp}</option>
            ))}
            <option value="otra">Otra especialidad</option>
          </select>
        </div>

        {formData.especialidad === 'otra' && (
          <div>
            <label className="block text-gray-700 mb-2">Especifique su especialidad</label>
            <input
              type="text"
              value={formData.otraEspecialidad}
              onChange={(e) => setFormData({...formData, otraEspecialidad: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            value={formData.telefono}
            onChange={(e) => setFormData({...formData, telefono: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Comuna</label>
          <input
            type="text"
            value={formData.ubicacion}
            onChange={(e) => setFormData({...formData, ubicacion: e.target.value})}
            className="w-full p-2 border rounded"
            required
            placeholder="Indique su comuna"
          />
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.dispuestoMovilizarse}
              onChange={(e) => setFormData({...formData, dispuestoMovilizarse: e.target.checked})}
              className="mr-2"
            />
            <span className="text-gray-700">Dispuesto a movilizarse a otras comunas</span>
          </label>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.trabajaConEquipo}
              onChange={(e) => setFormData({...formData, trabajaConEquipo: e.target.checked})}
              className="mr-2"
            />
            <span className="text-gray-700">Trabaja con equipo</span>
          </label>
        </div>

        {formData.trabajaConEquipo && (
          <div>
            <label className="block text-gray-700 mb-2">Tamaño del equipo</label>
            <input
              type="number"
              min="1"
              value={formData.tamañoEquipo}
              onChange={(e) => setFormData({...formData, tamañoEquipo: parseInt(e.target.value)})}
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Indicar Disponibilidad
        </button>
      </form>
    </div>
  );
}
