"use client";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { ClientsFeedback } from "@/components/screens/home/clients-feedback";
import { HeroVideo } from "@/components/screens/home/hero-video";
import { services } from "@/constants/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      <HeroVideo />

      <section
        id="sobre"
        className="py-20 bg-gradient-to-br from-white via-[#00B74F]/5 to-white relative"
      >
        {/* <div className="absolute top-20 right-20 w-64 h-64">
          <svg viewBox="0 0 200 200" className="opacity-20">
            <path fill="#FF69B4" d="M 100, 30 C 120, 10 150, 10 170, 30 C 190, 50 190, 80 170, 100 L 100, 170 L 30, 100 C 10, 80 10, 50 30, 30 C 50, 10 80, 10 100, 30 Z" />
          </svg>
        </div> */}

        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Sobre <span className="text-brand-strong">Nós</span>
              </h2>
              <div className="w-24 h-1 bg-brand-strong mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-brand-strong to-brand-deep rounded-3xl shadow-2xl p-8 md:p-16 text-white text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                  Entregamos serviços contábeis de excelência, com atendimento
                  personalizado e linguagem acessível, contribuindo para o
                  crescimento sustentável dos negócios de nossos clientes
                  através da ética, transparência e comprometimento.
                </p>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto text-white/90">
                  Nossa{" "}
                  <span className="font-semibold">assessoria jurídica</span>{" "}
                  atua de forma integrada à contabilidade para orientar questões
                  contratuais, societárias e de compliance, reduzindo riscos e
                  dando segurança às decisões do seu negócio.
                </p>
                <div className="mt-6">
                  <Button
                    asChild
                    className="bg-white text-brand-strong hover:bg-white/90"
                  >
                    <Link href="https://wa.me/555136671096">Saiba mais</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nossos <span className="text-brand-strong">Serviços</span>
              </h2>
              <div className="w-24 h-1 bg-brand-strong mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluções completas em contabilidade para sua empresa crescer com
                segurança
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-to-br from-white to-[#00B74F]/5 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <service.icon className="w-16 h-16 text-brand-strong mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex justify-center"
            >
              <Button asChild className="bg-brand-strong hover:bg-brand-hover">
                <Link href="/servicos">Ver mais</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ClientsFeedback />
    </div>
  );
}
