export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">© 2025 RedMaestros. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Términos y Condiciones</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
