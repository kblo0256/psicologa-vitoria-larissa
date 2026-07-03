import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=5513997197893&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3ODMxMTYyOTMsInBob25lIjoiKzU1MTM5OTcxOTc4OTMiLCJ0ZXh0IjoiIiwiYXBwIjoiaW5zdGFncmFtIn0.NB4A8Q9MZ-_x4a1e4z7JJlm_veFzxqXgpALLVDdaHPs3d9lOpdTAJG8ntUkx0Imhmh0L-8_BTnOBLHBp_Y9DWQ&utm_campaign=wa_phone_number_xma&source_surface=45";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center bg-brand-sage-600 hover:bg-brand-sage-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 btn-shadow cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulsing Accent Ring */}
        <span className="absolute inset-0 rounded-full bg-brand-sage-600/30 animate-ping opacity-75 -z-10 group-hover:bg-brand-sage-700/30" />

        {/* Lucide Message Icon */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-300 origin-right bg-brand-sage-800 text-brand-beige text-xs font-medium px-3.5 py-2 rounded-lg whitespace-nowrap shadow-md pointer-events-none border border-brand-sage-700">
          Fale Conosco
        </span>
      </a>
    </motion.div>
  );
}
