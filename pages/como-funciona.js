import Head from 'next/head';
import Header from '../components/diseño/Header';
import Footer from '../components/diseño/Footer';
import { motion } from 'framer-motion';

export default function ComoFunciona() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = {
    maestros: [
      {
        title: "Registro",
        description: "Complete el formulario con sus datos personales y profesionales, incluyendo especialidades y experiencia.",
        icon: "👷‍♂️"
      },
      {
        title: "Verificación",
        description: "Nuestro equipo administrativo verificará sus credenciales y experiencia.",
        icon: "✅"
      },
      {
        title: "Disponibilidad",
        description: "Configure su calendario de disponibilidad y zonas de trabajo.",
        icon: "📅"
      },
      {
        title: "Notificaciones",
        description: "Reciba alertas cuando haya solicitudes que coincidan con su perfil.",
        icon: "📱"
      }
    ],
    clientes: [
      {
        title: "Registro Simple",
        description: "Cree su cuenta con datos básicos de contacto.",
        icon: "📝"
      },
      {
        title: "Solicitud",
        description: "Describa el trabajo que necesita y seleccione la especialidad requerida.",
        icon: "🔍"
      },
      {
        title: "Match",
        description: "El sistema encontrará al maestro más adecuado según sus necesidades.",
        icon: "🤝"
      },
      {
        title: "Confirmación",
        description: "Recibirá una notificación por correo con los detalles del maestro asignado.",
        icon: "📨"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Cómo Funciona - RedMaestros</title>
        <meta name="description" content="Aprende cómo funciona RedMaestros y comienza a usar nuestra plataforma" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.section
          className="text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            ¿Cómo Funciona RedMaestros?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conectamos a maestros calificados con clientes que necesitan servicios de construcción y remodelación de manera simple y eficiente.
          </p>
        </motion.section>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Sección Maestros */}
          <motion.section
            className="bg-white rounded-lg shadow-lg p-6"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
              <span className="text-3xl mr-2">👷‍♂️</span> Para Maestros
            </h2>
            <div className="space-y-6">
              {steps.maestros.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-2xl">{step.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Sección Clientes */}
          <motion.section
            className="bg-white rounded-lg shadow-lg p-6"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
              <span className="text-3xl mr-2">👥</span> Para Clientes
            </h2>
            <div className="space-y-6">
              {steps.clientes.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-2xl">{step.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        <motion.section
          className="mt-12 bg-blue-50 rounded-lg p-6 text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-gray-600 mb-6">
            Únete a nuestra comunidad y comienza a disfrutar de los beneficios de RedMaestros
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Registrarme Ahora
          </button>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}