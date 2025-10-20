'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, FileText, Users, Calculator, FileCheck, Scale, CreditCard, Phone, Mail, MapPin, Clock, Instagram, ChevronDown, Menu, X, ArrowRight, CheckCircle, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import Link from 'next/link';

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const services = [
    { icon: Building2, title: 'Abertura de Empresas', description: 'Processo completo e desburocratizado para abrir sua empresa' },
    { icon: FileText, title: 'Departamento Fiscal', description: 'Gestão fiscal completa e atualizada' },
    { icon: Users, title: 'Departamento Pessoal', description: 'Administração completa de RH e folha de pagamento' },
    { icon: Calculator, title: 'Departamento Contábil', description: 'Contabilidade precisa e transparente' },
    { icon: FileCheck, title: 'Departamento Societário', description: 'Gestão societária e alterações contratuais' },
    { icon: Scale, title: 'Assessoria Jurídica', description: 'Suporte jurídico especializado' },
    { icon: CreditCard, title: 'Certificado Digital', description: 'Emissão e renovação de certificados digitais' }
  ];

  const clients = [
    'Leffa Móveis',
    'Apara Barro Dema',
    'Comércio de Bananas Borges',
    'Niel Diesel',
    'Traffic Control',
    'LDO Business'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
        style={{ opacity: headerOpacity }}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/image.png" alt="ASC Logo" width={50} height={50} className="object-contain" />
            <span className="font-bold text-xl text-[#00B74F]">ASC Assessoria</span>
          </div>

          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#00B74F] transition-colors">Início</a>
            <Link href="/sobre" className="text-gray-700 hover:text-[#00B74F] transition-colors">Sobre</Link>
            <Link href="/servicos" className="text-gray-700 hover:text-[#00B74F] transition-colors">Serviços</Link>
            <Link href="/clientes" className="text-gray-700 hover:text-[#00B74F] transition-colors">Clientes</Link>
            <Link href="/contato" className="text-gray-700 hover:text-[#00B74F] transition-colors">Contato</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#00B74F]" /> : <Menu className="text-[#00B74F]" />}
          </button>
        </nav>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Início</a>
              <Link href="/sobre" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
              <Link href="/servicos" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
              <Link href="/clientes" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Clientes</Link>
              <Link href="/contato" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            </div>
          </motion.div>
        )}
      </motion.header>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B74F]/5 via-white to-[#00A376]/5" />

        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#00B74F]/10 blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Image src="/image.png" alt="ASC Logo" width={200} height={200} className="mx-auto mb-6" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              ASC Assessoria <span className="text-[#00B74F]">Contábil</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Atendimento ágil e desburocratizado com linguagem facilitada
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-[#00B74F] hover:bg-[#00A376] text-white text-lg px-8 py-6 group"
              >
                <a href="#contato">
                  Fale Conosco
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#00B74F] text-[#00B74F] hover:bg-[#00B74F] hover:text-white text-lg px-8 py-6"
              >
                <a href="https://wa.me/5551980111096" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <CheckCircle className="w-12 h-12 text-[#00B74F] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Ética e Sigilo</h3>
                <p className="text-gray-600">Comprometimento total com a confidencialidade</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <Award className="w-12 h-12 text-[#00B74F] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Desde 2014</h3>
                <p className="text-gray-600">Experiência e credibilidade no mercado</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-12 h-12 text-[#00B74F] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Ambiente Ambientalista</h3>
                <p className="text-gray-600">Responsabilidade socioambiental</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-[#00B74F]" />
        </motion.div>
      </section>

      <section id="sobre" className="py-20 bg-gradient-to-br from-white via-[#00B74F]/5 to-white relative">
        <div className="absolute top-20 right-20 w-64 h-64">
          <svg viewBox="0 0 200 200" className="opacity-20">
            <path fill="#FF69B4" d="M 100, 30 C 120, 10 150, 10 170, 30 C 190, 50 190, 80 170, 100 L 100, 170 L 30, 100 C 10, 80 10, 50 30, 30 C 50, 10 80, 10 100, 30 Z" />
          </svg>
        </div>

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
                Sobre <span className="text-[#00B74F]">Nós</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full" />
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00B74F]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  A <span className="font-bold text-[#00B74F]">ASC Assessoria Contábil</span> oferece atendimento ágil e desburocratizado, com linguagem facilitada para melhor entendimento da contabilidade.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Nossa prioridade é a <span className="font-bold text-[#00B74F]">questão ética e sigilo</span>, mantendo um ambiente harmônico e ambientalista.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Desde <span className="font-bold text-[#00B74F]">2014</span>, trabalhamos com excelência e comprometimento para ajudar nossos clientes a alcançarem seus objetivos.
                </p>
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
                Nossos <span className="text-[#00B74F]">Serviços</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluções completas em contabilidade para sua empresa crescer com segurança
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
                  <service.icon className="w-16 h-16 text-[#00B74F] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="clientes" className="py-20 bg-gradient-to-br from-[#00B74F]/5 via-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nossos <span className="text-[#00B74F]">Clientes</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600">
                Empresas que confiam em nosso trabalho
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center min-h-[120px]"
                >
                  <h3 className="text-xl font-bold text-gray-900 text-center">{client}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Entre em <span className="text-[#00B74F]">Contato</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600">
                Estamos prontos para atender você
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-[#00B74F]/5 p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Nome</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">E-mail</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#00B74F] hover:bg-[#00A376] text-white text-lg py-6">
                    Enviar Mensagem
                  </Button>
                </form>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="bg-gradient-to-br from-white to-[#00B74F]/5 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <MapPin className="w-8 h-8 text-[#00B74F] mb-3" />
                  <h3 className="font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-gray-700">Avenida Padre Rizzieri Delai 705, sala 03 – Centro</p>
                </div>

                <div className="bg-gradient-to-br from-white to-[#00B74F]/5 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <Phone className="w-8 h-8 text-[#00B74F] mb-3" />
                  <h3 className="font-bold text-lg mb-2">Telefones</h3>
                  <p className="text-gray-700">(51) 3667-1096</p>
                  <p className="text-gray-700">(51) 98011-1096</p>
                </div>

                <div className="bg-gradient-to-br from-white to-[#00B74F]/5 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <Clock className="w-8 h-8 text-[#00B74F] mb-3" />
                  <h3 className="font-bold text-lg mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-700">Segunda a sexta</p>
                  <p className="text-gray-700">8h–12h / 13h30–18h</p>
                </div>

                <div className="bg-gradient-to-br from-white to-[#00B74F]/5 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <Instagram className="w-8 h-8 text-[#00B74F] mb-3" />
                  <h3 className="font-bold text-lg mb-2">Redes Sociais</h3>
                  <a href="https://instagram.com/ascassessoriacontabil" target="_blank" rel="noopener noreferrer" className="text-[#00B74F] hover:underline">
                    @ascassessoriacontabil
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/image.png" alt="ASC Logo" width={40} height={40} className="object-contain brightness-0 invert" />
                <span className="font-bold text-xl">ASC Assessoria Contábil</span>
              </div>
              <p className="text-gray-400">Desde 2014 com você</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-pink-300 mb-2 font-semibold">Outubro Rosa - Juntos na prevenção</p>
              <p className="text-gray-400">&copy; 2024 ASC Assessoria Contábil. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/5551980111096"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
