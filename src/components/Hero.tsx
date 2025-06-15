
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-20">
      {/* Video de fondo */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="video.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay para mejorar la legibilidad del contenido */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Contenido del Hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">TRANSFORMA TU HOTEL</span><br />
              <span className="text-white">EN UN ESPACIO INCLUSIVO</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
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
          
          {/* Badge ISO */}
          <div className="md:w-1/2 flex justify-end">
            <div className="bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="text-primary font-bold">ISO 21902</div>
              <div className="text-xs text-gray-500">Turismo Accesible</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
