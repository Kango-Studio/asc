'use client';

import { motion } from 'framer-motion';
import { Star, ThumbsUp, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
      staggerChildren: 0.15
    }
  }
};

export default function Clientes() {
  const clients = [
    {
      name: 'Leffa Móveis',
      segment: 'Comércio de Móveis',
      since: '2015'
    },
    {
      name: 'Apara Barro Dema',
      segment: 'Indústria',
      since: '2016'
    },
    {
      name: 'Comércio de Bananas Borges',
      segment: 'Distribuição de Alimentos',
      since: '2017'
    },
    {
      name: 'Niel Diesel',
      segment: 'Autopeças e Serviços',
      since: '2018'
    },
    {
      name: 'Traffic Control',
      segment: 'Tecnologia e Serviços',
      since: '2019'
    },
    {
      name: 'LDO Business',
      segment: 'Consultoria Empresarial',
      since: '2020'
    }
  ];

  const testimonials = [
    {
      client: 'Leffa Móveis',
      text: 'A ASC transformou nossa gestão contábil. Atendimento excepcional e linguagem clara que facilita muito nosso dia a dia.',
      author: 'Gestão Leffa Móveis'
    },
    {
      client: 'Traffic Control',
      text: 'Profissionalismo, agilidade e ética. A parceria com a ASC é fundamental para o crescimento da nossa empresa.',
      author: 'Traffic Control'
    },
    {
      client: 'LDO Business',
      text: 'Excelente assessoria! A equipe está sempre disponível e nos ajuda a tomar as melhores decisões estratégicas.',
      author: 'LDO Business'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Atendimento Premium',
      description: 'Cada cliente recebe atenção exclusiva e personalizada.'
    },
    {
      icon: ThumbsUp,
      title: 'Satisfação Garantida',
      description: 'Compromisso com a qualidade e resultados efetivos.'
    },
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Mais de 10 anos de sucesso e parceiras duradouras.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Conjunto',
      description: 'Ajudamos nossos clientes a alcançarem seus objetivos.'
    }
  ];

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
                <Image src="/logo-padrao.png" alt="ASC Logo" width={80} height={80} className="mx-auto" />
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Nossos <span className="text-[#00B74F]">Clientes</span>
              </h1>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empresas que confiam em nosso trabalho e crescem conosco.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Quem <span className="text-[#00B74F]">Confia</span> na ASC
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 p-8 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-pink-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00B74F]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-full flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-2xl">{client.name.charAt(0)}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
                      <p className="text-gray-600 mb-3">{client.segment}</p>
                      <div className="inline-block bg-[#00B74F]/10 px-4 py-2 rounded-full">
                        <p className="text-sm text-[#00B74F] font-semibold">Cliente desde {client.since}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                O que nossos clientes <span className="text-[#00B74F]">dizem</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-12" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-white to-[#00B74F]/5 rounded-2xl shadow-lg p-8 border border-gray-100 relative"
                  >
                    <div className="absolute top-6 right-6 text-[#00B74F]/20">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-bold text-[#00B74F]">{testimonial.author}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Por que escolher a <span className="text-[#00B74F]">ASC</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-3xl p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  <h2 className="text-4xl font-bold mb-4">
                    Faça parte dos nossos clientes
                  </h2>
                  <p className="text-xl mb-8 opacity-90">
                    Venha crescer junto com a ASC Assessoria Contábil
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#00B74F] hover:bg-gray-100 text-lg px-12 py-6"
                  >
                    <Link href="/contato">
                      Entre em Contato
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
