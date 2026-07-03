import { GraduationCap, MapPin, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

const officeImg = "/src/assets/images/office_session_1783041117060.jpg";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-brand-warm-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Section Heading & Bio - Left Column 5 */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-px bg-brand-terracotta" />
                <span className="font-sans text-xs tracking-widest text-brand-terracotta uppercase font-semibold">
                  A Profissional
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-sage-800 tracking-tight leading-tight">
                Sobre a psicóloga <br />
                <span className="italic font-normal">Vitória Larissa</span>
              </h2>

              <p className="font-sans text-base text-brand-sage-800/80 leading-relaxed font-light">
                Acredito que a psicologia clínica é muito mais do que diagnosticar ou tratar sintomas. É a arte de construir pontes de escuta qualificada que possibilitam ao indivíduo explorar suas dores com dignidade e suavidade, integrando as suas ideias sobre a vida.
              </p>

              <p className="font-sans text-base text-brand-sage-800/80 leading-relaxed font-light">
                Seja de forma presencial na acolhedora cidade de Bertioga, SP, ou através das telas no conforto do seu lar no formato online, meu compromisso é fornecer um refúgio seguro onde o medo dê espaço ao extraordinário.
              </p>

              {/* Highlighting Bertioga & Online */}
              <div className="bg-brand-sage-50/60 p-5 rounded-2xl border border-brand-sage-200 flex items-start gap-4 mt-6">
                <MapPin className="w-5 h-5 text-brand-sage-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-brand-sage-800">
                    Locais de Atendimento
                  </h4>
                  <p className="font-sans text-xs text-brand-sage-700/90 mt-1 leading-relaxed">
                    • <strong>Presencial</strong>: Consultório em Bertioga, SP.<br />
                    • <strong>Online</strong>: De onde você estiver, via videochamada segura.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cards Panel - Right Column 7 */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:mt-4">
            {/* Graduação Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-brand-beige p-6 rounded-2xl border border-brand-sage-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start"
            >
              <div className="p-3 bg-brand-warm-gray-100 rounded-xl flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-brand-terracotta" />
              </div>
              <div className="space-y-2 text-left">
                <span className="font-sans text-[10px] text-brand-terracotta uppercase tracking-wider font-semibold">
                  Universidade de Mogi das Cruzes
                </span>
                <h3 className="font-serif text-xl font-medium text-brand-sage-800">
                  Graduação
                </h3>
                <p className="font-sans text-sm text-brand-sage-700/90 leading-relaxed font-light">
                  Bacharel em Psicologia com formação clínica sólida e atualizada, pautada na ética profissional e nas abordagens científicas da saúde mental.
                </p>
              </div>
            </motion.div>

            {/* High-quality Horizontal Consulting Room Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-sage-100 shadow-sm group"
            >
              <img
                src={officeImg}
                alt="Consultório acolhedor de atendimento psicológico"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-sage-800/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-5 bg-gradient-to-r from-brand-sage-600 to-brand-sage-700 text-white rounded-2xl flex items-center justify-between shadow-md"
            >
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-brand-warm-gray-200 flex-shrink-0" />
                <span className="font-sans text-sm font-medium tracking-tight">
                  Pronto(a) para dar os primeiros passos no seu processo?
                </span>
              </div>
              <a
                href="#servicos"
                className="font-sans text-xs bg-white text-brand-sage-800 font-semibold px-4 py-2.5 rounded-full hover:bg-brand-warm-gray-100 transition-colors"
              >
                Ver Atendimentos
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
