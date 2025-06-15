
import { Check } from "lucide-react";

const PricingTable = () => {
  const plans = [
    {
      name: "Starter",
      idealFor: "Hoteles pequeños que inician su camino en la accesibilidad",
      monthlyPrice: "39",
      annualPrice: "399",
      popular: false,
      features: [
        "App básica de geolocalización",
        "Soporte estándar",
        "Panel de uso general",
        "Hasta 20 códigos Navilens",
        "Actualizaciones básicas",
      ],
    },
    {
      name: "Pro",
      subTitle: "(Visibilidad y Accesibilidad)",
      idealFor: "Hoteles medianos que buscan destacar como inclusivos",
      monthlyPrice: "79",
      annualPrice: "799",
      popular: true,
      features: [
        "Todo lo de Starter",
        "Módulo hotelero (criterios ISO 21902)",
        "Pack Visibilidad y Accesibilidad",
        "Informe de impacto",
        "Hasta 50 códigos Navilens",
        "Actualizaciones prioritarias",
      ],
    },
    {
      name: "Premium Inclusivo",
      idealFor: "Cadenas y grandes hoteles que quieran liderar en accesibilidad",
      monthlyPrice: "149",
      annualPrice: "1.499",
      popular: false,
      features: [
        "Todo lo de Pro",
        "Formación al personal",
        "Consultoría de Revenue Manager",
        "Orientación experta ISO 21902",
        "Sello \"Hotel Inclusivo\"",
        "Códigos Navilens ilimitados",
        "Soporte prioritario 24/7",
      ],
    },
  ];

  return (
    <section id="planes" className="section-padding bg-blue-50">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestras <span className="text-primary">suscripciones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu hotel. Todas nuestras suscripciones incluyen actualizaciones de software y soporte técnico.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1 bg-gray-100">
            <button className="py-2 px-6 rounded-full bg-white shadow-sm font-medium">
              Pago mensual
            </button>
            <button className="py-2 px-6 rounded-full font-medium text-muted-foreground">
              Pago anual (2 meses gratis)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${plan.popular ? "bg-muted" : "bg-white"} p-6 md:p-8 rounded-2xl shadow-lg ${plan.popular ? "border-2 border-primary" : "border border-gray-100"} flex flex-col h-full card-hover`}
            >
              {plan.popular && (
                <div className="bg-primary text-white py-1 px-4 rounded-full text-sm font-medium self-start mb-2">
                  Más popular
                </div>
              )}
              <h3 className="text-2xl font-bold">
                {plan.name}
                {plan.subTitle && <span className="block text-base font-normal text-muted-foreground mt-1">{plan.subTitle}</span>}
              </h3>
              <p className="text-muted-foreground mt-2 mb-6">{plan.idealFor}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.monthlyPrice} €</span>
                <span className="text-gray-500">/mes</span>
                <div className="text-sm text-gray-500 mt-1">o {plan.annualPrice} €/año</div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contacto" 
                className={`${plan.popular ? "bg-primary text-white" : "border border-primary bg-white text-primary"} text-center py-3 px-8 rounded-full font-medium shadow-md transition-all duration-300`}
              >
                {plan.popular ? "Empieza ahora" : "Seleccionar plan"}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Servicios adicionales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-2">Asesoría ISO 21902</h4>
              <p className="text-muted-foreground mb-4">Preparación avanzada para auditoría y certificación oficial.</p>
              <p className="font-semibold">desde 250 €</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-2">Integraciones personalizadas</h4>
              <p className="text-muted-foreground mb-4">Auditorías de accesibilidad web y adaptaciones a medida.</p>
              <p className="font-semibold">presupuesto personalizado</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold mb-2">Talleres y formaciones</h4>
              <p className="text-muted-foreground mb-4">Capacitación presencial u online para tu equipo.</p>
              <p className="font-semibold">desde 150 € por sesión</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
