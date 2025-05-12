
import { Users, ChartBar, Award, DollarSign } from "lucide-react";

const ValueProposition = () => {
  return (
    <section id="valor" className="section-padding bg-gradient-to-br from-light-pink via-white to-light-pink">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Valor agregado para <span className="text-medium-purple">tu hotel</span>
          </h2>
          <p className="text-lg text-deep-purple max-w-3xl mx-auto">
            Nuestra solución no solo hace tu hotel más accesible, sino que también aporta beneficios tangibles para tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-light-pink rounded-full flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-medium-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Mayor ocupación</h3>
            <p className="text-deep-purple">
              Atrae al nicho de 2,2 millones de personas con discapacidad visual en España y a todos los huéspedes que buscan comodidad y accesibilidad en sus estancias.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-light-pink rounded-full flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-medium-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Diferenciación</h3>
            <p className="text-deep-purple">
              Destaca frente a hoteles de marcas uniformes (Marriott, Hilton, Meliá) que confunden a sus visitantes con espacios poco accesibles y señalización deficiente.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-light-pink rounded-full flex items-center justify-center mb-6">
              <ChartBar className="h-6 w-6 text-medium-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Reputación</h3>
            <p className="text-deep-purple">
              Obtén el sello de "Hotel Inclusivo" y mejora tu imagen en plataformas de reserva y redes sociales. Las reseñas positivas sobre accesibilidad incrementan tu visibilidad.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover">
            <div className="w-14 h-14 bg-light-pink rounded-full flex items-center justify-center mb-6">
              <DollarSign className="h-6 w-6 text-medium-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Rentabilidad</h3>
            <p className="text-deep-purple">
              Con una pequeña inversión mensual, accedes a datos y asesoría que te permiten aumentar tarifas en temporadas clave y mejorar tu ADR (Average Daily Rate).
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-medium-purple text-white rounded-2xl p-8 shadow-lg inline-block max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Te ayudamos a ser un hotel más accesible</h3>
            <p className="text-lg">
              Sin grandes inversiones, solo con tu móvil y orientación experta. Te acompañamos paso a paso para que cumplas con la norma ISO 21902.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
