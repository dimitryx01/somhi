
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hotel: "",
    rooms: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Solicitud enviada",
        description: "Nos pondremos en contacto contigo en breve.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        hotel: "",
        rooms: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="section-padding bg-blue-50">
      <div className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para hacer tu hotel <span className="text-primary">más inclusivo</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Completa el formulario y un especialista en accesibilidad se pondrá en contacto contigo para resolver tus dudas y ofrecerte una demostración personalizada.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">¿Por qué solicitar una demo?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span className="text-muted-foreground">Verás cómo funciona la app en tu propio hotel</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span className="text-muted-foreground">Recibirás un análisis personalizado de accesibilidad</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span className="text-muted-foreground">Te explicaremos cómo cumplir la norma ISO 21902</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Solicita tu demostración</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Tu nombre y apellidos"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email profesional *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="tu@hotel.com"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hotel" className="block text-sm font-medium text-foreground mb-1">
                        Nombre del hotel *
                      </label>
                      <input
                        id="hotel"
                        name="hotel"
                        type="text"
                        required
                        value={formData.hotel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Nombre del hotel"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="rooms" className="block text-sm font-medium text-foreground mb-1">
                        Número de habitaciones
                      </label>
                      <select
                        id="rooms"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="">Seleccionar</option>
                        <option value="1-20">1-20 habitaciones</option>
                        <option value="21-50">21-50 habitaciones</option>
                        <option value="51-100">51-100 habitaciones</option>
                        <option value="100+">Más de 100 habitaciones</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Cuéntanos más sobre tus necesidades específicas"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-3 px-8 rounded-full font-medium shadow-md hover:bg-primary-dark transition-all duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : "Solicitar demostración"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
