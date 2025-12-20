"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, PartyPopper, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HolidayModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeenModal = localStorage.getItem("hasSeenHolidayModal2025");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenHolidayModal2025", "true");
  };

  if (!mounted) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
        >
          {/* Header with Gradient and Pattern */}
          <div className="bg-gradient-to-br from-[#00B74F] to-[#008F3E] p-10 text-white relative overflow-hidden">
            {/* Abstract background shapes */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-black/5 rounded-full blur-xl" />
            
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="bg-white/20 p-4 rounded-2xl backdrop-blur-md shadow-inner"
              >
                <PartyPopper className="w-10 h-10 text-white" />
              </motion.div>
              <div className="space-y-1">
                <h2 className="text-3xl font-extrabold tracking-tight leading-tight">Aviso de Recesso</h2>
                <p className="text-white/80 font-medium text-lg">Nós das ASC desejamos a todos boas festas e um feliz ano novo!</p>
              </div>
            </div>
          </div>

          <div className="p-10 space-y-6">
            <p className="text-gray-500 text-center font-medium">
              Fique atento ao nosso cronograma de final de ano:
            </p>

            <div className="space-y-3">
              {/* Christmas Eve */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 border border-gray-100/80 transition-all hover:bg-white hover:border-[#00B74F]/20 hover:shadow-md group"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 group-hover:border-[#00B74F]/30 group-hover:bg-[#00B74F]/5 transition-all">
                  <Clock className="w-6 h-6 text-[#00B74F]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-[#00B74F] transition-colors">24 de Dezembro</h4>
                  <p className="text-sm text-gray-500 font-medium">Atendimento até 12:00h</p>
                </div>
              </motion.div>

              {/* New Year's Eve & Day */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 border border-gray-100/80 transition-all hover:bg-white hover:border-red-100 hover:shadow-md group"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 group-hover:border-red-200 group-hover:bg-red-50 transition-all">
                  <Calendar className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">31/12 e 01 de Janeiro</h4>
                  <p className="text-sm text-gray-500 font-medium">Fechado para recesso</p>
                </div>
              </motion.div>

              {/* Return Date */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#00B74F]/5 border border-[#00B74F]/10 transition-all hover:bg-white hover:border-[#00B74F]/20 hover:shadow-md group"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm border border-[#00B74F]/20 group-hover:bg-[#00B74F]/5 transition-all">
                  <ArrowRight className="w-6 h-6 text-[#00B74F]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-[#00B74F] transition-colors">02 de Janeiro</h4>
                  <p className="text-sm text-[#00B74F]/80 font-semibold">Retorno ao horário normal</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={handleClose}
                className="w-full h-14 bg-[#00B74F] hover:bg-[#008F3E] text-white rounded-2xl font-bold text-lg shadow-[0_10px_20px_rgba(0,183,79,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Entendido, obrigado!
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

