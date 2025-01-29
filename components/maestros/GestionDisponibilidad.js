import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import es from 'date-fns/locale/es';

export default function GestionDisponibilidad({ onSubmit }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHours, setSelectedHours] = useState([]);
  const [horarioRegular, setHorarioRegular] = useState({
    lunes: { activo: true, inicio: '09:00', fin: '18:00', pausas: [] },
    martes: { activo: true, inicio: '09:00', fin: '18:00', pausas: [] },
    miercoles: { activo: true, inicio: '09:00', fin: '18:00', pausas: [] },
    jueves: { activo: true, inicio: '09:00', fin: '18:00', pausas: [] },
    viernes: { activo: true, inicio: '09:00', fin: '18:00', pausas: [] },
    sabado: { activo: false, inicio: '09:00', fin: '13:00', pausas: [] },
    domingo: { activo: false, inicio: '09:00', fin: '13:00', pausas: [] },
  });
  const [diasNoDisponibles, setDiasNoDisponibles] = useState([]);
  const [configuracionServicios, setConfiguracionServicios] = useState({
    duracionMinima: 2,
    duracionMaxima: 8,
    tiempoTraslado: 30,
    preferenciaHorario: 'mañana',
  });

  const diasSemana = [
    'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'
  ];

  const handleHorarioChange = (dia, campo, valor) => {
    setHorarioRegular(prev => ({
      ...prev,
      [dia]: { ...prev[dia], [campo]: valor }
    }));
  };

  const handleConfiguracionChange = (campo, valor) => {
    setConfiguracionServicios(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const horasDisponibles = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 8;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  const handleHourToggle = (hora) => {
    setSelectedHours(prev => {
      if (prev.includes(hora)) {
        return prev.filter(h => h !== hora);
      } else {
        return [...prev, hora].sort();
      }
    });
  };

  const handleSubmit = () => {
    if (selectedDay && selectedHours.length > 0) {
      onSubmit({
        fecha: selectedDay,
        horas: selectedHours,
        horarioRegular,
        diasNoDisponibles,
        configuracionServicios
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Gestión de Disponibilidad</h2>
      
      {/* Horario Regular */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Horario Regular</h3>
        <div className="grid gap-4">
          {diasSemana.map(dia => (
            <div key={dia} className="flex items-center gap-4 p-2 bg-gray-50 rounded">
              <label className="flex items-center gap-2 w-40">
                <input
                  type="checkbox"
                  checked={horarioRegular[dia].activo}
                  onChange={(e) => handleHorarioChange(dia, 'activo', e.target.checked)}
                  className="rounded text-blue-600"
                />
                <span className="capitalize">{dia}</span>
              </label>
              <div className="flex gap-4">
                <input
                  type="time"
                  value={horarioRegular[dia].inicio}
                  onChange={(e) => handleHorarioChange(dia, 'inicio', e.target.value)}
                  disabled={!horarioRegular[dia].activo}
                  className="rounded border-gray-300"
                />
                <span>a</span>
                <input
                  type="time"
                  value={horarioRegular[dia].fin}
                  onChange={(e) => handleHorarioChange(dia, 'fin', e.target.value)}
                  disabled={!horarioRegular[dia].activo}
                  className="rounded border-gray-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Excepciones */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Días No Disponibles</h3>
        <div className="border rounded-lg p-4">
          <DayPicker
            mode="multiple"
            selected={diasNoDisponibles}
            onSelect={setDiasNoDisponibles}
            locale={es}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Configuración de Servicios */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Configuración de Servicios</h3>
        <div className="grid gap-4 max-w-xl">
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700">Duración mínima (horas)</span>
              <input
                type="number"
                min="1"
                max="24"
                value={configuracionServicios.duracionMinima}
                onChange={(e) => handleConfiguracionChange('duracionMinima', parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Duración máxima (horas)</span>
              <input
                type="number"
                min="1"
                max="24"
                value={configuracionServicios.duracionMaxima}
                onChange={(e) => handleConfiguracionChange('duracionMaxima', parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
          </div>
          
          <label className="block">
            <span className="text-gray-700">Tiempo de traslado (minutos)</span>
            <input
              type="number"
              min="0"
              max="120"
              value={configuracionServicios.tiempoTraslado}
              onChange={(e) => handleConfiguracionChange('tiempoTraslado', parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
          
          <label className="block">
            <span className="text-gray-700">Preferencia de horario</span>
            <select
              value={configuracionServicios.preferenciaHorario}
              onChange={(e) => handleConfiguracionChange('preferenciaHorario', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="mañana">Mañana</option>
              <option value="tarde">Tarde</option>
              <option value="indistinto">Indistinto</option>
            </select>
          </label>
        </div>
      </section>

      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h3 className="text-lg font-semibold mb-4">Selecciona el día</h3>
            <div className="border rounded-lg p-4">
              <DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                locale={es}
                className="mx-auto"
                fromDate={new Date()}
              />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4">Selecciona las horas disponibles</h3>
            <div className="grid grid-cols-3 gap-2">
              {horasDisponibles.map((hora) => (
                <button
                  key={hora}
                  onClick={() => handleHourToggle(hora)}
                  className={`p-2 rounded ${
                    selectedHours.includes(hora)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  disabled={!selectedDay}
                >
                  {hora}
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => onSubmit(null)}
            className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50"
          >
            Volver
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedDay || selectedHours.length === 0}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
