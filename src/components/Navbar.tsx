
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-medium-purple">HotelAccess</span>
            </a>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#solucion" className="text-base font-medium text-deep-purple hover:text-medium-purple">
              Solución
            </a>
            <a href="#beneficios" className="text-base font-medium text-deep-purple hover:text-medium-purple">
              Beneficios
            </a>
            <a href="#planes" className="text-base font-medium text-deep-purple hover:text-medium-purple">
              Planes
            </a>
            <a href="#valor" className="text-base font-medium text-deep-purple hover:text-medium-purple">
              Valor Agregado
            </a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#contacto" className="bg-medium-purple text-white py-3 px-8 rounded-full font-medium shadow-md hover:bg-deep-purple transition-all duration-300">
              Solicita Demo
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-medium-purple">HotelAccess</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Cerrar menú</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#solucion" className="text-base font-medium text-deep-purple hover:text-medium-purple" onClick={() => setIsMenuOpen(false)}>
                    Solución
                  </a>
                  <a href="#beneficios" className="text-base font-medium text-deep-purple hover:text-medium-purple" onClick={() => setIsMenuOpen(false)}>
                    Beneficios
                  </a>
                  <a href="#planes" className="text-base font-medium text-deep-purple hover:text-medium-purple" onClick={() => setIsMenuOpen(false)}>
                    Planes
                  </a>
                  <a href="#valor" className="text-base font-medium text-deep-purple hover:text-medium-purple" onClick={() => setIsMenuOpen(false)}>
                    Valor Agregado
                  </a>
                  <a href="#contacto" className="bg-medium-purple text-white py-3 px-8 rounded-full font-medium text-center" onClick={() => setIsMenuOpen(false)}>
                    Solicita Demo
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
