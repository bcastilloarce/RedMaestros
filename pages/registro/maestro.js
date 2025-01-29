import Header from '../../components/diseño/Header';
import Footer from '../../components/diseño/Footer';
import RegistroMaestro from '../../components/maestros/RegistroMaestro';

export default function PaginaRegistroMaestro() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <RegistroMaestro />
      </main>
      <Footer />
    </div>
  );
}
