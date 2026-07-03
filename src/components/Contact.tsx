import React, { useState } from "react";
import { Mail, Calendar, MapPin, Clock, MessageSquare, Compass, Send, Check } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modality, setModality] = useState("online");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`Contato Terapia - ${name}`);
    const body = encodeURIComponent(
      `Olá, Psicóloga Vitória Larissa,\n\nMeu nome é ${name}.\nTelefone/WhatsApp: ${phone}\nFormato de preferência: ${modality === "online" ? "Online" : "Presencial em Bertioga"}\n\nMensagem:\n${message}\n\nEnviado através do site profissional.`
    );
    
    window.location.href = `mailto:psico.vitorialarissa@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="agendar" className="py-20 bg-brand-warm-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-brand-sage-100 text-brand-sage-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-brand-terracotta" />
            Agendamento & Localização
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-sage-800 tracking-tight">
            Dê o primeiro passo <span className="italic font-normal">hoje mesmo</span>
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-brand-sage-700/90 font-light leading-relaxed">
            Não permita que o medo silencie o extraordinário dentro de você. Entre em contato por e-mail ou agende um horário diretamente através do canal oficial de atendimento.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1 - Contact Info Cards & Linktree (5 columns) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Primary Linktree Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-3xl border border-brand-sage-200 shadow-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-terracotta/5 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="font-serif text-2xl font-medium text-brand-sage-800 mb-2">
                Agendamento Imediato
              </h3>
              <p className="font-sans text-sm text-brand-sage-700 font-light mb-6">
                Para consultar a grade atual de horários disponíveis e agendar sua consulta diretamente, acesse o meu Linktree oficial:
              </p>

              <div className="space-y-4">
                <a
                  href="https://linktr.ee/psico.vitorialarissa?utm_source=linktree_profile_share&ltsid=3df9a5f4-d061-4057-b4e4-637b4063772c"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-brand-sage-600 hover:bg-brand-sage-700 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md text-base btn-shadow"
                >
                  <Calendar className="w-5 h-5" />
                  💌 Agendar sessão aqui (Linktree)
                </a>
                
                <p className="font-sans text-[11px] text-brand-sage-600/80 text-center leading-relaxed">
                  Ao clicar, você será direcionado para a página do Linktree, onde poderá escolher a melhor opção para falar comigo.
                </p>
              </div>
            </motion.div>

            {/* Quick Contact Info Items */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-brand-sage-800 text-brand-beige p-8 rounded-3xl border border-brand-sage-700 shadow-sm space-y-6"
            >
              <h4 className="font-serif text-lg font-medium text-brand-warm-gray-200">
                Informações de Atendimento
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-sage-700 rounded-lg text-brand-warm-gray-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-semibold text-brand-warm-gray-200 uppercase tracking-wider">E-mail de Contato</h5>
                    <a href="mailto:psico.vitorialarissa@gmail.com" className="font-sans text-sm hover:text-brand-terracotta transition-colors">
                      psico.vitorialarissa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-sage-700 rounded-lg text-brand-warm-gray-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-semibold text-brand-warm-gray-200 uppercase tracking-wider">Consultório Presencial</h5>
                    <p className="font-sans text-sm text-brand-sage-100">
                      Bertioga, SP - Atendimento presencial com hora marcada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-brand-sage-700 rounded-lg text-brand-warm-gray-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-sans text-xs font-semibold text-brand-warm-gray-200 uppercase tracking-wider">Disponibilidade</h5>
                    <p className="font-sans text-sm text-brand-sage-100">
                      Segunda a Sexta, com horários flexíveis sob agendamento prévio.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Column 2 - Pre-Filled Mail Contact Helper Form (7 columns) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-sage-100 shadow-sm text-left"
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-brand-terracotta" />
                <h3 className="font-serif text-xl font-medium text-brand-sage-800">
                  Escreva para a Vitória Larissa
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-brand-sage-700/90 leading-relaxed font-light mb-6">
                Preencha os dados abaixo para estruturar sua mensagem. Ao clicar em enviar, o seu aplicativo de e-mail será aberto automaticamente com as informações preenchidas para facilitar o seu contato.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block font-sans text-xs font-semibold text-brand-sage-800 uppercase tracking-wider mb-1.5">
                      Seu Nome Completo
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Maria Silva"
                      className="w-full font-sans text-sm p-3 rounded-xl border border-brand-sage-200 bg-brand-beige/25 focus:ring-1 focus:ring-brand-sage-600 focus:border-brand-sage-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block font-sans text-xs font-semibold text-brand-sage-800 uppercase tracking-wider mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: (13) 99999-9999"
                      className="w-full font-sans text-sm p-3 rounded-xl border border-brand-sage-200 bg-brand-beige/25 focus:ring-1 focus:ring-brand-sage-600 focus:border-brand-sage-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-brand-sage-800 uppercase tracking-wider mb-2">
                    Formato de Preferência
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setModality("online")}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                        modality === "online"
                          ? "bg-brand-sage-50 border-brand-sage-600 text-brand-sage-800 ring-1 ring-brand-sage-200"
                          : "bg-white border-brand-sage-100 text-brand-sage-700 hover:bg-brand-sage-50"
                      }`}
                    >
                      💻 Online / Virtual
                    </button>
                    <button
                      type="button"
                      onClick={() => setModality("presencial")}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                        modality === "presencial"
                          ? "bg-brand-sage-50 border-brand-sage-600 text-brand-sage-800 ring-1 ring-brand-sage-200"
                          : "bg-white border-brand-sage-100 text-brand-sage-700 hover:bg-brand-sage-50"
                      }`}
                    >
                      🏥 Presencial (Bertioga)
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="form-msg" className="block font-sans text-xs font-semibold text-brand-sage-800 uppercase tracking-wider mb-1.5">
                    Sua Mensagem ou Dúvida
                  </label>
                  <textarea
                    id="form-msg"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Escreva brevemente o que você busca ou as dúvidas que gostaria de tirar sobre as sessões..."
                    className="w-full font-sans text-sm p-3 rounded-xl border border-brand-sage-200 bg-brand-beige/25 focus:ring-1 focus:ring-brand-sage-600 focus:border-brand-sage-600 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-sage-600 hover:bg-brand-sage-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-sm cursor-pointer btn-shadow"
                >
                  <Send className="w-4 h-4" />
                  Enviar E-mail de Contato
                </button>

                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-50 text-green-800 rounded-xl border border-green-200 text-xs font-sans text-center flex items-center justify-center gap-2 mt-2"
                  >
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Seu leitor de e-mail foi acionado! Verifique a janela que se abriu para finalizar o envio.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
