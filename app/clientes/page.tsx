"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { ClientsFeedback } from "@/components/screens/home/clients-feedback";
import { QuemConfia } from "@/components/screens/clients/quem-confia";

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

            <QuemConfia />
          </motion.div>
        </div>
      </section>

      <ClientsFeedback title="O que nossos clientes" titleSuffix="dizem" isClientPage={false} />
    </div>
  );
}
