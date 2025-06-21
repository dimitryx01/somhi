
import React from "react";
import { Accessibility, Map, MapPin, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const Solution = () => {
  const mockupImages = [
    {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=1600&q=80",
      alt: "Mockup de la aplicación - Pantalla principal"
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=1600&q=80",
      alt: "Mockup de la aplicación - Navegación"
    },
    {
      src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=1600&q=80",
      alt: "Mockup de la aplicación - Mapa 3D"
    },
    {
      src: "https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=1600&q=80",
      alt: "Mockup de la aplicación - Códigos Navilens"
    },
    {
      src: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&h=1600&q=80",
      alt: "Mockup de la aplicación - Panel de administración"
    }
  ];

  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="solucion" className="section-padding bg-blue-50">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué es <span className="text-primary">nuestra solución</span>?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Una aplicación innovadora que permite a los hoteles mapear sus instalaciones y crear rutas accesibles para personas con discapacidad visual, usando tecnología Navilens y escaneo 3D.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative px-12">
            <Carousel 
              className="w-full max-w-md mx-auto" 
              opts={{ loop: true }}
              setApi={setApi}
            >
              <CarouselContent>
                {mockupImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="aspect-[9/16] overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-2xl">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-white shadow-lg hover:bg-gray-50" />
              <CarouselNext className="right-0 bg-white shadow-lg hover:bg-gray-50" />
            </Carousel>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">¿Cómo funciona?</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Map className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Escanea tu hotel desde tu smartphone</h4>
                  <p className="text-muted-foreground">Utilizando solo tu teléfono móvil, puedes escanear las instalaciones de tu hotel sin necesidad de dispositivos costosos.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Crea mapas con puntos clave</h4>
                  <p className="text-muted-foreground">Identifica y marca áreas importantes como recepción, ascensores, habitaciones y salidas de emergencia.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Accessibility className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Ubica códigos Navilens</h4>
                  <p className="text-muted-foreground">Implementa códigos especiales que permiten a las personas con discapacidad visual orientarse de forma autónoma por todo el hotel.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Administra todo desde un panel online</h4>
                  <p className="text-muted-foreground">Controla y actualiza la información de accesibilidad de tu hotel desde cualquier dispositivo con conexión a internet.</p>
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
