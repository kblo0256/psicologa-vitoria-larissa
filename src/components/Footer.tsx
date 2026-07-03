import React from "react";
import { Heart, Calendar, Mail, GraduationCap, Instagram, MessageCircle } from "lucide-react";

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-sage-800 text-brand-beige pt-16 pb-8 border-t border-brand-sage-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-brand-sage-700 text-left">
          
          {/* Logo & Quote - Columns 5 */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-white leading-none">
              Vitória Larissa
            </h3>
            <p className="font-sans text-xs tracking-wider text-brand-terracotta uppercase font-medium">
              Psicóloga Clínica • CRP: 06/200154
            </p>
            <p className="font-serif text-sm italic text-brand-sage-100/80 leading-relaxed max-w-sm mt-3">
              “O extraordinário vem depois do medo.”
            </p>
            <p className="font-sans text-xs text-brand-sage-100/60 leading-relaxed max-w-sm">
              Psicologia clínica ética, sensível e focada em desenvolver autoconhecimento e sentido para jovens e adultos.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/psi.vitorialarissa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-sage-700 hover:bg-brand-sage-650 text-brand-beige hover:text-white font-medium text-xs px-4 py-2.5 rounded-full transition-all duration-300 border border-brand-sage-600/30"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5513997197893&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3ODMxMTYyOTMsInBob25lIjoiKzU1MTM5OTcxOTc4OTMiLCJ0ZXh0IjoiIiwiYXBwIjoiaW5zdGFncmFtIn0.NB4A8Q9MZ-_x4a1e4z7JJlm_veFzxqXgpALLVDdaHPs3d9lOpdTAJG8ntUkx0Imhmh0L-8_BTnOBLHBp_Y9DWQ&utm_campaign=wa_phone_number_xma&source_surface=45"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-sage-600 hover:bg-brand-sage-500 text-white font-medium text-xs px-4 py-2.5 rounded-full transition-all duration-300 btn-shadow"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick links - Columns 3 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold text-brand-warm-gray-200 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm font-light text-brand-sage-100/90">
              <li>
                <a href="#inicio" onClick={(e) => handleLinkClick(e, "#inicio")} className="hover:text-brand-terracotta transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleLinkClick(e, "#sobre")} className="hover:text-brand-terracotta transition-colors">
                  Sobre a Psicóloga
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleLinkClick(e, "#servicos")} className="hover:text-brand-terracotta transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#ideias" onClick={(e) => handleLinkClick(e, "#ideias")} className="hover:text-brand-terracotta transition-colors">
                  Ideias sobre a Vida
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, "#faq")} className="hover:text-brand-terracotta transition-colors">
                  Dúvidas Comuns
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details - Columns 4 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-sans text-xs font-bold text-brand-warm-gray-200 uppercase tracking-widest">
              Contatos Rápidos
            </h4>
            <ul className="space-y-3 text-sm font-light text-brand-sage-100/90">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                <a href="mailto:psico.vitorialarissa@gmail.com" className="hover:text-brand-terracotta transition-colors">
                  psico.vitorialarissa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-brand-terracotta flex-shrink-0" />
                <a
                  href="https://api.whatsapp.com/send?phone=5513997197893&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3ODMxMTYyOTMsInBob25lIjoiKzU1MTM5OTcxOTc4OTMiLCJ0ZXh0IjoiIiwiYXBwIjoiaW5zdGFncmFtIn0.NB4A8Q9MZ-_x4a1e4z7JJlm_veFzxqXgpALLVDdaHPs3d9lOpdTAJG8ntUkx0Imhmh0L-8_BTnOBLHBp_Y9DWQ&utm_campaign=wa_phone_number_xma&source_surface=45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-terracotta transition-colors"
                >
                  Agendamento por WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 text-brand-terracotta flex-shrink-0 mt-0.5" />
                <span className="text-xs text-brand-sage-100/80">
                  Graduada pela Universidade de Mogi das Cruzes
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal credentials and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-brand-sage-100/60 font-sans font-light border-t border-brand-sage-700/50 mt-8">
          <div className="space-y-1">
            <p>
              © {currentYear} Vitória Larissa | Psicóloga Clínica. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1 text-brand-sage-100/50">
              <button
                onClick={onOpenPrivacy}
                className="hover:text-brand-terracotta transition-colors underline decoration-dotted cursor-pointer"
              >
                Política de Privacidade
              </button>
              <span>•</span>
              <button
                onClick={onOpenTerms}
                className="hover:text-brand-terracotta transition-colors underline decoration-dotted cursor-pointer"
              >
                Termos de Uso
              </button>
            </div>
          </div>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-brand-terracotta fill-brand-terracotta" /> para saúde mental • CRP: 06/200154
          </p>
        </div>

      </div>
    </footer>
  );
}
