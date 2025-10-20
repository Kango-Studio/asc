"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5551980111096"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-transform hover:scale-110 hover:bg-[#1f9e4c]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5 }}
      aria-label="Abrir WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </motion.a>
  );
}


