
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-soft-blue via-light-purple to-soft-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">TRANSFORMA TU HOTEL</span><br />
              <span className="text-gray-800">EN UN ESPACIO INCLUSIVO</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Accesibilidad real, tecnología al alcance y experiencia inclusiva sin complicaciones para personas con discapacidad visual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary inline-flex items-center justify-center">
                Solicita Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#solucion" className="btn-secondary">
                Conoce más
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Persona con discapacidad visual usando app de geolocalización en un hotel" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-float">
                <div className="text-soft-purple font-bold">ISO 21902</div>
                <div className="text-xs text-gray-500">Turismo Accesible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
