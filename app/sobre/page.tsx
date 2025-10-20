'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Shield, Heart, Users, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

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

export default function Sobre() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Ética e Sigilo',
      description: 'Comprometimento total com a confidencialidade e ética profissional em todas as nossas relações.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Busca constante pela qualidade e precisão em todos os serviços prestados.'
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Relacionamento transparente e duradouro com nossos clientes desde 2014.'
    },
    {
      icon: Heart,
      title: 'Ambiente Harmonioso',
      description: 'Espaço acolhedor e ambientalista que reflete nossos valores sustentáveis.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção dedicada e soluções customizadas.'
    },
    {
      icon: Target,
      title: 'Linguagem Facilitada',
      description: 'Comunicação clara e descomplicada para melhor entendimento da contabilidade.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative py-20 pt-32 bg-gradient-to-br from-[#00B74F]/10 via-white to-pink-50/20 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64">
          <svg viewBox="0 0 200 200" className="opacity-10">
            <path fill="#FF69B4" d="M 100, 30 C 120, 10 150, 10 170, 30 C 190, 50 190, 80 170, 100 L 100, 170 L 30, 100 C 10, 80 10, 50 30, 30 C 50, 10 80, 10 100, 30 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <Link href="/" className="inline-block mb-8">
                <Image src="/image.png" alt="ASC Logo" width={120} height={120} className="mx-auto" />
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Sobre <span className="text-[#00B74F]">Nós</span>
              </h1>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full" />
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00B74F]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Quem Somos</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  A <span className="font-bold text-[#00B74F]">ASC Assessoria Contábil</span> é uma empresa especializada em serviços contábeis que atua no mercado desde 2014, oferecendo soluções completas para empresas de diversos segmentos.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Nosso diferencial está no <span className="font-bold text-[#00B74F]">atendimento ágil e desburocratizado</span>, com linguagem facilitada para que nossos clientes compreendam melhor os aspectos contábeis de seus negócios.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Priorizamos a <span className="font-bold text-[#00B74F]">questão ética e o sigilo</span> das informações, mantendo um ambiente harmonioso e ambientalista que reflete nossos valores de responsabilidade social e sustentabilidade.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Com uma equipe qualificada e em constante atualização, buscamos oferecer o melhor serviço contábil, estabelecendo relações de confiança e parceria de longo prazo com nossos clientes.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
                Nossos <span className="text-[#00B74F]">Valores</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-12" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-gradient-to-br from-white to-[#00B74F]/5 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <value.icon className="w-16 h-16 text-[#00B74F] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-3xl shadow-2xl p-8 md:p-16 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">O que entregamos</h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                  Entregamos serviços contábeis de excelência, com atendimento personalizado e linguagem acessível, contribuindo para o crescimento sustentável dos negócios de nossos clientes através da ética, transparência e comprometimento.
                </p>
                <div className="inline-block px-8 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <p className="text-lg font-semibold">Desde 2014 construindo parcerias de confiança</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pink-300 mb-2 font-semibold">Outubro Rosa - Juntos na prevenção</p>
          <p className="text-gray-400">&copy; 2024 ASC Assessoria Contábil. Todos os direitos reservados.</p>
        </div>
      </section>
    </div>
  );
}
