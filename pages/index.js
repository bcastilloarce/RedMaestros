import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/diseño/Header';
import Footer from '../components/diseño/Footer';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>RedMaestros - Conectando Expertos en Construcción</title>
        <meta name="description" content="Plataforma que conecta maestros de construcción calificados con clientes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Bienvenido a RedMaestros
          </h1>
          <p className="text-xl text-gray-600">
            Conectamos expertos en construcción con quienes necesitan sus servicios
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push('/registro/maestro')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Soy Maestro
            </button>
            <button
              onClick={() => router.push('/registro/cliente')}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Soy Cliente
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
