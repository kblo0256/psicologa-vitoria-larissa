import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-brand-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-sage-100 text-brand-sage-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-brand-terracotta" />
            Dúvidas Frequentes
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-sage-800 tracking-tight">
            Perguntas <span className="italic font-normal">Frequentes</span>
          </h2>
          <p className="mt-4 font-sans text-sm sm:text-base text-brand-sage-700/90 font-light leading-relaxed">
            Se é a sua primeira vez buscando terapia, ou se você possui dúvidas específicas sobre a dinâmica do acompanhamento psicológico, veja as respostas abaixo:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-sage-300 shadow-sm"
                    : "border-brand-sage-100 hover:border-brand-sage-200"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-lg font-medium text-brand-sage-800 focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-sage-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-brand-sage-50/50 font-sans text-sm text-brand-sage-700 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 bg-brand-warm-gray-100 rounded-2xl border border-brand-sage-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="font-sans text-sm font-semibold text-brand-sage-800">
              Ainda ficou com alguma dúvida sobre o atendimento?
            </h4>
            <p className="font-sans text-xs text-brand-sage-700 font-light mt-1">
              Escreva diretamente para mim por e-mail e responderei com todo cuidado.
            </p>
          </div>
          <a
            href="mailto:psico.vitorialarissa@gmail.com"
            className="font-sans text-xs bg-brand-sage-800 hover:bg-brand-sage-700 text-white font-semibold px-5 py-3 rounded-full transition-colors whitespace-nowrap"
          >
            Enviar E-mail
          </a>
        </div>

      </div>
    </section>
  );
}
