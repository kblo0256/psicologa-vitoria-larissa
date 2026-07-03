import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Insights from "./components/Insights";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import LegalOverlay from "./components/LegalOverlay";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeDocument, setActiveDocument] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-brand-beige min-h-screen text-brand-sage-800 flex flex-col justify-between selection:bg-brand-terracotta/20 selection:text-brand-sage-800"
      >
        {/* Top Navigation */}
        <Header />

        {/* Main Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* About Me Section */}
          <About />

          {/* Services / Modalities */}
          <Services />

          {/* Ideas / Insights Section */}
          <Insights />

          {/* Frequently Asked Questions */}
          <FAQ />

          {/* Contact Form and Linktree Call to Action */}
          <Contact />
        </main>

        {/* Bottom Footer */}
        <Footer 
          onOpenPrivacy={() => setActiveDocument("privacy")} 
          onOpenTerms={() => setActiveDocument("terms")} 
        />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />
      </motion.div>

      {/* Legal documents overlay */}
      <AnimatePresence>
        {activeDocument && (
          <LegalOverlay 
            documentType={activeDocument} 
            onClose={() => setActiveDocument(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
