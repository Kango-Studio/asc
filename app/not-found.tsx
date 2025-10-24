'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00B74F]/10 via-white to-pink-50/20 flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-pink-200/30 blur-2xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" as const
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#00B74F]/20 blur-2xl"
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" as const,
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-[#00A376]/15 blur-xl"
          animate={{ 
            y: [0, -35, 0],
            x: [0, 25, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut" as const,
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div variants={fadeInUp} className="mb-12">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src="/logo-padrao.png" 
                  alt="ASC Logo" 
                  width={100} 
                  height={100} 
                  className="mx-auto" 
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* 404 Number */}
          <motion.div 
            variants={fadeInUp}
            className="mb-12"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00B74F] to-[#00A376]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear" as const
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              404
            </motion.h1>
          </motion.div>

          {/* Error Icon */}
          <motion.div 
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.div
              variants={pulseAnimation}
              animate="animate"
              className="inline-block"
            >
              <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-[#00B74F] mx-auto" />
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Página não <span className="text-[#00B74F]">encontrada</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ops! Parece que a página que você está procurando não existe ou foi movida.
            </p>
          </motion.div>

          {/* Suggestions */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                O que você pode fazer:
              </h3>
              <ul className="text-left space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00B74F] rounded-full flex-shrink-0" />
                  Verificar se o endereço foi digitado corretamente
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00B74F] rounded-full flex-shrink-0" />
                  Voltar à página anterior
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00B74F] rounded-full flex-shrink-0" />
                  Ir para a página inicial
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00B74F] rounded-full flex-shrink-0" />
                  Entrar em contato conosco
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={handleGoBack}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-[#00B74F] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Voltar
            </motion.button>

            <motion.button
              onClick={() => router.push('/')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-white text-[#00B74F] border-2 border-[#00B74F] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#00B74F] hover:text-white"
            >
              <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
              Página Inicial
            </motion.button>

            <motion.a
              href="https://wa.me/555136671096"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-gradient-to-r from-[#00B74F] to-[#00A376] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaWhatsapp className="w-5 h-5 transition-transform group-hover:rotate-12" />
              WhatsApp
            </motion.a>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#00B74F]/30 rounded-full"
          />
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute top-3/4 right-1/4 w-6 h-6 bg-pink-300/30 rounded-full"
            style={{ animationDelay: '1s' }}
          />
          <motion.div
            variants={floatingAnimation}
            animate="animate"
            className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#00A376]/30 rounded-full"
            style={{ animationDelay: '2s' }}
          />
        </motion.div>
      </div>
    </div>
  );
}
