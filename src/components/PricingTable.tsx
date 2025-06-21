import { Check } from "lucide-react";

const PricingTable = () => {
  const plans = [
    {
      name: "Free",
      idealFor: "Hoteles pequeños que inician su camino en la accesibilidad",
      monthlyPrice: "0",
      annualPrice: "0",
      popular: false,
      features: [
        "Hasta 1 Usuaio administrador",
        "Hasta 1 código Navilens",
        "Analisis de un 1 nivel (mapa 3D)",
        "Geolocalización Som-hi",
        "Acceso multiplataforma",
      ],
    },
    {
      name: "Pro",
      subTitle: "(Visibilidad y Accesibilidad)",
      idealFor: "Hoteles medianos que buscan destacar como inclusivos",
      monthlyPrice: "59.00",
      annualPrice: "708.00",
      popular: true,
      features: [
        "Todo lo de Free",
        "Hasta 5 Usuaios administradores divididos por roles",
        "Hasta 4 códigos Navilens para señalización inclusiva",
        "Analisis de hasta 5 niveles (mapas 3D)",
        "Panel para la gestion de mapas",
        "Conoce el estado de tu hotel con estadisticas y metricas de uso",
        "Soporte online standar",
      ],
    },
    {
      name: "Premium Inclusivo",
      idealFor: "Cadenas y grandes hoteles que quieran liderar en accesibilidad",
      monthlyPrice: "119.00",
      annualPrice: "1,428.00",
      popular: false,
      features: [
        "Todo lo de Pro",
        "Hasta 15 Usuaios administradores divididos por roles",
        "Hasta 8 códigos Navilens para señalización inclusiva",
        "Analisis de hasta 10 niveles (mapas 3D)",
        "Formación al personal online",
        "Consultoría de Revenue Manager",
        "Orientación experta ISO 21902",
        "Acceso a campañas de accesibilidad y turismo inclusivo",
        "Sello \"Hotel Inclusivo\"",
        "Soporte online prioritario",
        "Actualizaciones prioritarias",
      ],
    },
  ];

  return (
    <section id="planes" className="section-padding bg-blue-50">
      <div className="section ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestras <span className="text-medium-purple">suscripciones</span>
          </h2>
          <p className="text-lg text-deep-purple max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu hotel. Todas nuestras suscripciones incluyen actualizaciones de software y soporte técnico.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1 bg-blue-100">
            <button className="py-2 px-6 rounded-full bg-white shadow-sm font-medium">
              Pago mensual
            </button>
            <button className="py-2 px-6 rounded-full font-medium text-deep-purple">
              Pago anual (2 meses gratis)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${plan.popular ? "bg-blue-200" : "bg-white"} p-6 md:p-8 rounded-2xl shadow-lg ${plan.popular ? "border-2 border-medium-purple" : "border border-gray-100"} flex flex-col h-full card-hover`}
            >
              {plan.popular && (
                <div className="bg-blue-700 text-white py-1 px-4 rounded-full text-sm font-medium self-start mb-2">
                  Más popular
                </div>
              )}
              <h3 className="text-2xl font-bold">
                {plan.name}
                {plan.subTitle && <span className="block text-base font-normal text-deep-purple mt-1">{plan.subTitle}</span>}
              </h3>
              <p className="text-deep-purple mt-2 mb-6">{plan.idealFor}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.monthlyPrice} €</span>
                <span className="text-gray-500">/mes</span>
                <div className="text-sm text-gray-500 mt-1">o {plan.annualPrice} €/año</div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-bright-pink mr-2 flex-shrink-0" />
                    <span className="text-deep-purple">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contacto" 
                className={`${plan.popular ? "bg-medium-purple" : "border border-medium-purple bg-white text-medium-purple"} text-center py-3 px-8 rounded-full font-medium shadow-md transition-all duration-300 ${plan.popular ? "bg-primary text-white" : ""}`}
              >
                {plan.popular ? "Empieza ahora" : "Seleccionar plan"}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Servicios adicionales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-2">Asesoría ISO 21902</h4>
              <p className="text-deep-purple mb-4">Preparación avanzada para auditoría y certificación oficial.</p>
              <p className="font-semibold"></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-2">Integraciones personalizadas</h4>
              <p className="text-deep-purple mb-4">Auditorías de accesibilidad web y adaptaciones a medida.</p>
              <p className="font-semibold"></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-2">Talleres y formaciones</h4>
              <p className="text-deep-purple mb-4">Capacitación presencial u online para tu equipo.</p>
              <p className="font-semibold"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;

