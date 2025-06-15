
import { CheckCircle, Award, Building, ShieldCheck } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Mejor experiencia para huéspedes",
      description: "Ofrece una experiencia de alta calidad para huéspedes con discapacidad visual, permitiéndoles mayor autonomía.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Cumplimiento normativo",
      description: "Cumple con la norma ISO 21902 de turismo accesible y evita posibles sanciones por incumplimiento.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Reputación como hotel inclusivo",
      description: "Mejora tu imagen de marca y diferénciate de la competencia como un hotel comprometido con la inclusión.",
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Sin equipos costosos",
      description: "No necesitas instalar infraestructura cara ni realizar reformas. Todo funciona con la tecnología que ya tienes.",
    },
  ];

  return (
    <section id="beneficios" className="section-padding bg-blue-50">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beneficios para <span className="text-primary">tu hotel</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nuestra solución no solo mejora la experiencia de tus huéspedes, sino que también aporta ventajas competitivas para tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className="feature-card card-hover"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">¿Sabías que...</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Existen fondos y subvenciones disponibles para hoteles que implementan soluciones de accesibilidad?
              </p>
              <p className="text-muted-foreground">
                Nuestros expertos te ayudarán a identificar y solicitar ayudas financieras para implementar nuestra solución en tu hotel.
              </p>
            </div>
            
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Equipo de trabajo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
