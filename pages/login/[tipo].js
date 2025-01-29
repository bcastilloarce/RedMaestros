import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Header from '../../components/diseño/Header';
import Footer from '../../components/diseño/Footer';
import Link from 'next/link';

export default function PortalUsuario() {
  const router = useRouter();
  const { tipo } = router.query;
  const [userData, setUserData] = useState({
    nombre: 'Usuario Test',
    email: 'test@redmaestros.com'
  });

  // Configuración específica para cada tipo de usuario
  const portalConfig = {
    maestro: {
      color: 'blue',
      icon: '👷‍♂️',
      sections: [
        {
          title: 'Mis Servicios',
          items: [
            { label: 'Gestionar Disponibilidad', href: '/maestros/disponibilidad' },
            { label: 'Ver Solicitudes Pendientes', href: '#' },
            { label: 'Historial de Trabajos', href: '#' }
          ]
        },
        {
          title: 'Mi Perfil Profesional',
          items: [
            { label: 'Actualizar Especialidades', href: '#' },
            { label: 'Gestionar Certificaciones', href: '#' },
            { label: 'Zona de Trabajo', href: '#' }
          ]
        }
      ]
    },
    cliente: {
      color: 'green',
      icon: '👤',
      sections: [
        {
          title: 'Mis Solicitudes',
          items: [
            { label: 'Nueva Solicitud', href: '#' },
            { label: 'Solicitudes Activas', href: '#' },
            { label: 'Historial de Servicios', href: '#' }
          ]
        },
        {
          title: 'Mi Cuenta',
          items: [
            { label: 'Direcciones Guardadas', href: '#' },
            { label: 'Métodos de Pago', href: '#' },
            { label: 'Preferencias', href: '#' }
          ]
        }
      ]
    },
    administrador: {
      color: 'purple',
      icon: '👨‍💼',
      sections: [
        {
          title: 'Gestión de Usuarios',
          items: [
            { label: 'Verificar Maestros', href: '#' },
            { label: 'Gestionar Clientes', href: '#' },
            { label: 'Reportes de Usuario', href: '#' }
          ]
        },
        {
          title: 'Sistema',
          items: [
            { label: 'Panel de Control', href: '#' },
            { label: 'Métricas y Estadísticas', href: '#' },
            { label: 'Configuración', href: '#' }
          ]
        }
      ]
    }
  };

  // Timeline específico para cada tipo
  const [timeline, setTimeline] = useState([
    {
      fecha: new Date().toLocaleDateString(),
      estado: 'Activo',
      descripcion: `Sesión iniciada como ${tipo}`
    }
  ]);

  // Verificar autenticación
  useEffect(() => {
    if (!router.isReady) return;

    // Aquí podrías verificar la autenticación real
    const isAuthenticated = true; // Por ahora siempre true para el usuario test
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [router.isReady]);

  if (!tipo || !portalConfig[tipo]) {
    return <div>Cargando...</div>;
  }

  const config = portalConfig[tipo];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Encabezado del Portal */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-4xl">{config.icon}</span>
            <div>
              <h1 className={`text-2xl font-bold text-${config.color}-600 capitalize`}>
                Portal de {tipo}
              </h1>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
        </div>

        {/* Secciones del Portal */}
        <div className="grid md:grid-cols-2 gap-8">
          {config.sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className={`text-xl font-semibold text-${config.color}-600 mb-4`}>
                {section.title}
              </h2>
              <nav className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className={`block p-2 rounded hover:bg-${config.color}-50 text-gray-700 hover:text-${config.color}-600 transition-colors`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Línea de Tiempo */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Actividad Reciente</h2>
          <div className="space-y-4">
            {timeline.map((event, index) => (
              <div key={index} className={`relative pl-8 pb-4 border-l-2 border-${config.color}-600 last:pb-0`}>
                <div className={`absolute left-[-8px] top-0 w-4 h-4 bg-${config.color}-600 rounded-full`}></div>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="text-sm text-gray-500 mb-1">{event.fecha}</div>
                  <div className="font-medium text-gray-900 mb-1">{event.estado}</div>
                  <div className="text-gray-600">{event.descripcion}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
