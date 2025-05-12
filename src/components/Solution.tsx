
import { Accessibility, Map, MapPin, CheckCircle } from "lucide-react";

const Solution = () => {
  return (
    <section id="solucion" className="section-padding bg-white">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué es <span className="text-medium-purple">nuestra solución</span>?</h2>
          <p className="text-lg text-deep-purple max-w-3xl mx-auto">
            Una aplicación innovadora que permite a los hoteles mapear sus instalaciones y crear rutas accesibles para personas con discapacidad visual, usando tecnología Navilens y escaneo 3D.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2079&q=80" 
              alt="App de geolocalización para hoteles" 
              className="w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">¿Cómo funciona?</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-light-pink rounded-full flex items-center justify-center">
                    <Map className="h-6 w-6 text-medium-purple" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Escanea tu hotel desde tu smartphone</h4>
                  <p className="text-deep-purple">Utilizando solo tu teléfono móvil, puedes escanear las instalaciones de tu hotel sin necesidad de dispositivos costosos.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-light-pink rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-medium-purple" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Crea mapas con puntos clave</h4>
                  <p className="text-deep-purple">Identifica y marca áreas importantes como recepción, ascensores, habitaciones y salidas de emergencia.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-light-pink rounded-full flex items-center justify-center">
                    <Accessibility className="h-6 w-6 text-medium-purple" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Ubica códigos Navilens</h4>
                  <p className="text-deep-purple">Implementa códigos especiales que permiten a las personas con discapacidad visual orientarse de forma autónoma por todo el hotel.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-light-pink rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-medium-purple" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Administra todo desde un panel online</h4>
                  <p className="text-deep-purple">Controla y actualiza la información de accesibilidad de tu hotel desde cualquier dispositivo con conexión a internet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
