"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Heart, Calendar, Shield, ChevronDown } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

export const Herotext = () => { 
  return (
    <section
        id="home"
        className="relative min-h-[100vh] flex items-center justify-center pt-20 pb-20 overflow-x-hidden"
      >
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B74F]/6 via-white to-[#00A376]/6" />

        {/* Geometric background elements - more subtle */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-16 right-8 w-24 h-24 rounded-full bg-pink-200/30 blur-2xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-16 left-8 w-32 h-32 rounded-full bg-[#00B74F]/10 blur-2xl"
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-[#00A376]/15 blur-xl"
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-[#00B74F]/20 blur-lg"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #00B74F 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #00A376 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 20px 20px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10">
          <motion.header
            className="w-full mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Logo + kicker */}
            <motion.div
              variants={fadeInUp}
              className="mb-5 flex items-center justify-center gap-3"
            >
              <Image
                src="/logo-padrao.png"
                alt="ASC Assessoria Contábil"
                width={56}
                height={56}
                className="rounded-md"
                priority
              />
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-gray-600">
                Desde 2014 • Ética & Sigilo
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="mx-auto pb-6 w-full text-center text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl px-8 sm:px-12 md:px-16"
            >
              <motion.span
                className="block pb-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Gestão contábil
              </motion.span>

              <motion.span
                className="block bg-gradient-to-r from-[#00B74F] to-[#00A376] md:h-24 w-full bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                inteligente
                <motion.span
                  className="text-[#00B74F]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  .
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.div
              className="mx-auto mb-8 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.p
                className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Simplificamos a rotina fiscal e contábil da sua empresa — com{" "}
                <motion.span
                  className="font-semibold text-[#00B74F]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  ética
                </motion.span>
                ,{" "}
                <motion.span
                  className="font-semibold text-[#00A376]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                >
                  sigilo
                </motion.span>{" "}
                e{" "}
                <motion.span
                  className="font-semibold text-[#00B74F]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  linguagem clara
                </motion.span>
                .
              </motion.p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="mb-8 sm:mb-12 flex flex-col justify-center gap-3 sm:gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-[#00B74F] px-6 py-3 sm:px-8 sm:py-4 text-white hover:bg-[#00A376] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <a href="/contato" aria-label="Fale conosco">
                    <motion.span
                      className="relative z-10 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.3 }}
                    >
                      Fale Conosco
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 1.5,
                        }}
                      >
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00A376] to-[#00B74F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-[#00B74F] px-6 py-3 sm:px-8 sm:py-4 text-[#00B74F] hover:bg-[#00B74F] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <a
                    href="https://wa.me/555136671096"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir WhatsApp"
                  >
                    <motion.span
                      className="relative z-10 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.4 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.6,
                        }}
                      >
                        <FaWhatsapp className="mr-2 w-5 h-5" />
                      </motion.div>
                      WhatsApp
                    </motion.span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.header>

          {/* Feature cards */}
          <motion.section
            className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3 justify-items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="w-full max-w-sm sm:max-w-none"
            >
              <FeatureCard
                icon={<Heart className="h-8 w-8 text-[#00B74F]" />}
                title="Ética & Sigilo"
                desc="Compromisso absoluto com a confidencialidade."
                accent="from-[#00B74F]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="w-full max-w-sm sm:max-w-none"
            >
              <FeatureCard
                icon={<Calendar className="h-8 w-8 text-[#00A376]" />}
                title="Desde 2014"
                desc="Experiência consolidada e proximidade com o cliente."
                accent="from-[#00A376]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.5, delay: 1.9 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="w-full max-w-sm sm:max-w-none"
            >
              <FeatureCard
                icon={<Shield className="h-8 w-8 text-[#00B74F]" />}
                title="Responsabilidade Civil"
                desc="Seguro de responsabilidade civil para proteger sua empresa."
                accent="from-[#00B74F]"
              />
            </motion.div>
          </motion.section>
        </div>

        <motion.div
          className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, 8, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 2.0 },
            y: { duration: 2, repeat: Infinity, delay: 2.2 },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-[#00B74F]/20"
          >
            <ChevronDown className="w-6 h-6 text-[#00B74F]" />
          </motion.div>
        </motion.div>
      </section>
  )
}