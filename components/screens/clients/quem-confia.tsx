"use client";

import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { clients } from "@/constants/clients";
import Image from "next/image";

export const QuemConfia = () => {
  return (
    <motion.div variants={fadeInUp} className="mb-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
        Quem <span className="text-[#00B74F]">Confia</span> na ASC
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 p-6 sm:p-8 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00B74F]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[200px]">
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={120} 
                height={120} 
                className="object-contain mb-4" 
              />
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                {client.segment}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};