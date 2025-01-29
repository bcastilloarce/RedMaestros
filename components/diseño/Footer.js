import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
            <Link href="/terminos" className="text-gray-600 hover:text-blue-600">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-gray-600 hover:text-blue-600">
              Privacidad
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-gray-500 text-sm">
              Progressive Web App for @BastiCasti
            </p>
            <p className="text-gray-600 text-sm">
              2025 RedMaestros. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
