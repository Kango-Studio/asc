"use client";

import { motion } from "framer-motion";
import { benefits } from "@/constants/benefits";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { StaggerTestimonials } from "@/components/StaggerTestimonials";
import { clients } from "@/constants/clients";
import { ClientsFeedback } from "@/components/screens/home/clients-feedback";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Clientes() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative py-20 pt-40 bg-gradient-to-br from-[#00B74F]/10 via-white to-pink-50/20 overflow-hidden">
        {/* <div className="absolute top-20 right-10 w-64 h-64">
          <svg viewBox="0 0 200 200" className="opacity-10">
            <path fill="#FF69B4" d="M 100, 30 C 120, 10 150, 10 170, 30 C 190, 50 190, 80 170, 100 L 100, 170 L 30, 100 C 10, 80 10, 50 30, 30 C 50, 10 80, 10 100, 30 Z" />
          </svg>
        </div> */}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Link href="/" className="inline-block mb-8">
                <Image
                  src="/logo-padrao.png"
                  alt="ASC Logo"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Nossos <span className="text-[#00B74F]">Clientes</span>
              </h1>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Empresas que confiam em nosso trabalho e crescem conosco.
              </p>
            </motion.div>

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

                    <div className="relative z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-full flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                          {client.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {client.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3">
                        {client.segment}
                      </p>
                      <div className="inline-block bg-[#00B74F]/10 px-4 py-2 rounded-full">
                        <p className="text-sm text-[#00B74F] font-semibold">
                          Cliente desde {client.since}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ClientsFeedback title="O que nossos clientes" titleSuffix="dizem" />
    </div>
  );
}
