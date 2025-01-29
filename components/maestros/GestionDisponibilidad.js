import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import es from 'date-fns/locale/es';

export default function GestionDisponibilidad({ onSubmit }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHours, setSelectedHours] = useState([]);
  
  // Generar horas disponibles desde 8am hasta 8pm
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
        horas: selectedHours
      });
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <div className="space-y-6">
        {/* Selector de día */}
        <section className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Selecciona el día
          </h3>
          <div className="flex justify-center">
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
              locale={es}
              className="!w-auto"
              fromDate={new Date()}
              modifiersClassNames={{
                selected: 'bg-blue-600 text-white',
                today: 'font-bold border border-blue-600'
              }}
              styles={{
                caption: { color: '#2563eb' },
                head: { color: '#4b5563' },
                day: { margin: '0.2em' }
              }}
            />
          </div>
        </section>

        {/* Selector de horas */}
        <section className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            {selectedDay ? 'Selecciona tus horas disponibles' : 'Primero selecciona un día'}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {horasDisponibles.map((hora) => (
              <button
                key={hora}
                onClick={() => handleHourToggle(hora)}
                disabled={!selectedDay}
                className={`
                  py-2 px-3 rounded-md text-sm font-medium transition-colors
                  ${selectedHours.includes(hora)
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  ${!selectedDay && 'opacity-50 cursor-not-allowed'}
                `}
              >
                {hora}
              </button>
            ))}
          </div>
        </section>

        {/* Resumen y botones */}
        <section className="bg-white rounded-lg shadow-sm p-4">
          <div className="space-y-4">
            {selectedDay && selectedHours.length > 0 && (
              <div className="text-sm text-gray-600">
                <p>Has seleccionado {selectedHours.length} hora(s) para el día seleccionado.</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => onSubmit(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Volver
              </button>
              <button
                onClick={handleSubmit}
                disabled={!selectedDay || selectedHours.length === 0}
                className={`
                  px-4 py-2 text-sm font-medium text-white rounded-md
                  ${selectedDay && selectedHours.length > 0
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-400 cursor-not-allowed'}
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                `}
              >
                Registrarse
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
