import { Calendar, ArrowDown, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";

// Safe string reference to the generated asset to bypass TS declaration checks
const heroImage = "/src/assets/images/psychologist_blonde_hero_1783041548514.jpg";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-brand-beige"
    >
      {/* Decorative ambient background blur blobs */}
      <div className="absolute top-24 left-1/10 w-96 h-96 bg-brand-sage-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-12 right-1/10 w-80 h-80 bg-brand-warm-gray-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Text - Column 1 to 7 */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-sage-100 text-brand-sage-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 w-fit uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-terracotta" />
              Psicologia e Ideias sobre a Vida
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-brand-sage-800 leading-tight"
            >
              O extraordinário vem <br className="hidden sm:inline" />
              <span className="italic font-normal text-brand-terracotta relative">
                depois do medo.
                <span className="absolute bottom-1 left-0 w-full h-0.5 bg-brand-terracotta/20 rounded" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl text-brand-sage-800/80 font-sans font-light leading-relaxed max-w-2xl"
            >
              Olá, eu sou a <strong className="font-semibold text-brand-sage-800">Vitória Larissa</strong>. Através de um espaço de escuta acolhedor, humanizado e sigiloso, auxilio jovens e adultos a atravessarem suas vulnerabilidades para construírem uma vida com mais sentido e autenticidade.
            </motion.p>

            {/* Quick Context Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm text-brand-sage-700/90 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
                CRP: 06/200154
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-terracotta" />
                Atendimento Online & Presencial em Bertioga
              </span>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <a
                href="https://api.whatsapp.com/send?phone=5513997197893&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3ODMxMTYyOTMsInBob25lIjoiKzU1MTM5OTcxOTc4OTMiLCJ0ZXh0IjoiIiwiYXBwIjoiaW5zdGFncmFtIn0.NB4A8Q9MZ-_x4a1e4z7JJlm_veFzxqXgpALLVDdaHPs3d9lOpdTAJG8ntUkx0Imhmh0L-8_BTnOBLHBp_Y9DWQ&utm_campaign=wa_phone_number_xma&source_surface=45"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-sage-600 hover:bg-brand-sage-700 text-white font-medium text-base px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 btn-shadow"
              >
                <Calendar className="w-5 h-5" />
                Agendar Sessão pelo WhatsApp
              </a>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center gap-2 border border-brand-sage-600/30 text-brand-sage-800 hover:bg-brand-sage-50 font-medium text-base px-8 py-4 rounded-full transition-all duration-300"
              >
                Saber Mais
                <ArrowDown className="w-4 h-4 animate-bounce mt-1" />
              </button>
            </motion.div>
          </div>

          {/* Hero Illustration - Column 8 to 12 (Using Natural Tones blob and glass-card layout pattern) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-10 lg:py-0">
            {/* The Organic Blob Container holding the wellness image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="blob w-[320px] h-[350px] sm:w-[420px] sm:h-[460px] lg:w-[440px] lg:h-[480px] flex items-center justify-center overflow-hidden shadow-lg border border-brand-sage-100/40 relative z-10"
            >
              <img
                src={heroImage}
                alt="Ilustração de bem-estar e crescimento pessoal"
                className="w-full h-full object-cover select-none filter contrast-[1.02] saturate-[1.03] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Glass Card 1: Localização */}
            <motion.div
              initial={{ opacity: 0, x: 25, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card absolute top-2 right-0 sm:-right-4 lg:-right-8 p-5 rounded-2xl w-[170px] sm:w-[190px] shadow-md z-20 text-left"
            >
              <div className="font-sans text-[10px] text-brand-sage-600 font-extrabold uppercase tracking-widest mb-1.5">
                Atendimento
              </div>
              <p className="font-sans text-xs sm:text-sm font-medium text-brand-sage-800 leading-normal">
                Presencial em Bertioga ou online de onde estiver.
              </p>
            </motion.div>

            {/* Floating Glass Card 2: Formação */}
            <motion.div
              initial={{ opacity: 0, x: -25, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="glass-card absolute bottom-4 left-0 sm:-left-4 lg:-left-10 p-5 rounded-2xl w-[180px] sm:w-[210px] shadow-md z-20 text-left"
            >
              <div className="font-sans text-[10px] text-brand-sage-600 font-extrabold uppercase tracking-widest mb-1.5">
                Formação
              </div>
              <p className="font-sans text-xs sm:text-sm font-medium text-brand-sage-800 leading-normal">
                Graduada pela Universidade de Mogi das Cruzes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
