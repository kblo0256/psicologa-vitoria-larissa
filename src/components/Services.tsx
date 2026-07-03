import { CheckCircle2, Globe, MapPin, Laptop, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES } from "../data";

export default function Services() {
  const handleSelectService = (id: string) => {
    // Scroll smoothly to contact/booking section
    const element = document.getElementById("agendar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-brand-sage-100 text-brand-sage-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-brand-terracotta" />
            Modalidades de Cuidado
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-light text-brand-sage-800 tracking-tight"
          >
            Como podemos trabalhar <span className="italic font-normal">juntos(as)</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-sans text-base text-brand-sage-700/90 font-light leading-relaxed"
          >
            Atendimentos pautados no sigilo profissional absoluto, no acolhimento de dores e no respeito ao ritmo do seu processo pessoal. Escolha o formato ideal para a sua rotina:
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => {
            const isOnline = service.modality === "Online";
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col justify-between bg-white p-8 rounded-3xl border transition-all duration-300 hover:shadow-lg ${
                  isOnline 
                    ? "border-brand-sage-200 shadow-md ring-1 ring-brand-sage-100" 
                    : "border-brand-sage-100 shadow-sm"
                }`}
              >
                {/* Visual Accent for best-selling/popular card */}
                {isOnline && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-terracotta text-white font-sans text-[10px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Globe className="w-3 h-3" /> Mais Flexível
                  </span>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-brand-sage-50 rounded-2xl text-brand-sage-700">
                      {isOnline ? <Laptop className="w-8 h-8" /> : <MapPin className="w-8 h-8" />}
                    </div>
                    <span className="font-sans text-xs bg-brand-warm-gray-100 text-brand-sage-800 font-medium px-3 py-1 rounded-full">
                      {service.target}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-brand-sage-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-brand-sage-700/90 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="border-t border-brand-sage-50 pt-6 mb-8">
                    <h4 className="font-sans text-xs font-semibold text-brand-sage-800 uppercase tracking-wider mb-4">
                      Destaques do atendimento:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-sage-700/95 font-light">
                          <CheckCircle2 className="w-4 h-4 text-brand-sage-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => handleSelectService(service.id)}
                  className={`w-full font-sans text-sm font-medium py-3 px-6 rounded-full transition-all duration-300 cursor-pointer ${
                    isOnline
                      ? "bg-brand-sage-600 hover:bg-brand-sage-700 text-white shadow-sm btn-shadow"
                      : "bg-brand-warm-gray-100 hover:bg-brand-warm-gray-200 text-brand-sage-800"
                  }`}
                >
                  Solicitar este Atendimento
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Ethical disclaimer badge */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs text-brand-sage-600/80 leading-relaxed max-w-2xl mx-auto">
            📌 <strong>Nota Ética importante:</strong> Todas as sessões são conduzidas em concordância com o Código de Ética Profissional do Psicólogo. O sigilo absoluto das sessões virtuais e presenciais é assegurado por lei.
          </p>
        </div>

      </div>
    </section>
  );
}
