import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            RedMaestros
          </Link>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Link href="/buscar" className="text-gray-600 hover:text-blue-600">
              Buscar Servicios
            </Link>
            <Link href="/como-funciona" className="text-gray-600 hover:text-blue-600">
              Cómo Funciona
            </Link>
            <div className="relative">
              <button
                onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Iniciar Sesión
              </button>
              {showLoginDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="/auth/login?tipo=maestro"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    Maestro
                  </Link>
                  <Link
                    href="/auth/login?tipo=cliente"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    Cliente
                  </Link>
                  <Link
                    href="/auth/login?tipo=administrador"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    Administrador
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
