import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, MessageCircle, Heart, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre Mim" },
    { href: "#servicos", label: "Atendimentos" },
    { href: "#ideias", label: "Ideias sobre a Vida" },
    { href: "#faq", label: "Perguntas Frequentes" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-beige/95 backdrop-blur-md shadow-sm border-b border-brand-sage-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#inicio" className="flex flex-col text-left group">
            <span className="font-serif text-2xl font-semibold text-brand-sage-800 tracking-tight leading-none group-hover:text-brand-sage-600 transition-colors">
              Vitória Larissa
            </span>
            <span className="font-sans text-xs tracking-wider text-brand-terracotta uppercase font-medium mt-1 flex items-center gap-1">
              Psicóloga Clínica <Heart className="w-3 h-3 text-brand-terracotta fill-brand-terracotta/20 animate-pulse" />
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-sm text-brand-sage-800 hover:text-brand-terracotta font-medium transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Booking CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/psi.vitorialarissa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 rounded-full border border-brand-sage-100 hover:bg-brand-sage-50 text-brand-sage-800 hover:text-brand-sage-600 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5513997197893&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3ODMxMTYyOTMsInBob25lIjoiKzU1MTM5OTcxOTc4OTMiLCJ0ZXh0IjoiIiwiYXBwIjoiaW5zdGFncmFtIn0.NB4A8Q9MZ-_x4a1e4z7JJlm_veFzxqXgpALLVDdaHPs3d9lOpdTAJG8ntUkx0Imhmh0L-8_BTnOBLHBp_Y9DWQ&utm_campaign=wa_phone_number_xma&source_surface=45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-sage-600 hover:bg-brand-sage-700 text-white font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5 btn-shadow"
            >
              <Calendar className="w-4 h-4" />
              Agendar Sessão
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-sage-800 hover:text-brand-terracotta focus:outline-none transition-colors"
            aria-label="Abrir Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-beige border-b border-brand-sage-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2 rounded-lg font-sans text-base text-brand-sage-800 hover:bg-brand-sage-50 hover:text-brand-terracotta font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-sage-100 flex flex-col gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=5513997197893&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3ODMxMTYyOTMsInBob25lIjoiKzU1MTM5OTcxOTc4OTMiLCJ0ZXh0IjoiIiwiYXBwIjoiaW5zdGFncmFtIn0.NB4A8Q9MZ-_x4a1e4z7JJlm_veFzxqXgpALLVDdaHPs3d9lOpdTAJG8ntUkx0Imhmh0L-8_BTnOBLHBp_Y9DWQ&utm_campaign=wa_phone_number_xma&source_surface=45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-sage-600 hover:bg-brand-sage-700 text-white font-medium px-5 py-3 rounded-full transition-all shadow-sm btn-shadow"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Sessão
                </a>
                <a
                  href="https://www.instagram.com/psi.vitorialarissa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-brand-sage-200 hover:bg-brand-sage-50 text-brand-sage-800 font-medium px-5 py-3 rounded-full transition-all"
                >
                  <Instagram className="w-4 h-4 text-brand-sage-600" />
                  Instagram
                </a>
                <a
                  href="mailto:psico.vitorialarissa@gmail.com"
                  className="w-full flex items-center justify-center gap-2 border border-brand-sage-200 hover:bg-brand-sage-50 text-brand-sage-800 font-medium px-5 py-3 rounded-full transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contato por E-mail
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
