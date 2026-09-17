'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { services } from '@/constants/services';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Servicos() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative py-20 pt-32 bg-gradient-to-br from-[#00B74F]/10 via-white to-pink-50/20 overflow-hidden">
        {/* <div className="absolute top-20 left-10 w-64 h-64">
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
                <Image src="/logo-padrao.png" alt="ASC Logo" width={80} height={80} className="mx-auto" />
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Nossos <span className="text-brand-strong">Serviços</span>
              </h1>
              <div className="w-24 h-1 bg-brand-strong mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluções completas em contabilidade para sua empresa crescer com segurança e tranquilidade
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 overflow-hidden group"
                >
                  <div className="bg-gradient-to-br from-brand-strong to-brand-deep p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl" />
                    <service.icon className="w-16 h-16 text-white mb-4 relative z-10 group-hover:scale-110 transition-transform" />
                    <h2 className="text-2xl font-bold text-white mb-2 relative z-10">{service.title}</h2>
                    <p className="text-white/90 relative z-10">{service.description}</p>
                  </div>

                  <div className="p-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">O que inclui:</h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-strong mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-16 text-center">
              <div className="bg-gradient-to-br from-[#00B74F]/5 to-pink-50/30 rounded-3xl p-12 max-w-4xl mx-auto border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Precisa de um serviço específico?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Entre em contato conosco e descubra como podemos ajudar sua empresa.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-strong hover:bg-brand-hover text-white text-lg px-12 py-6"
                >
                  <Link href="/contato">
                    Fale Conosco
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
