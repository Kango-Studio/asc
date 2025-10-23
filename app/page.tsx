'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, FileText, Users, Calculator, FileCheck, Scale, CreditCard, Phone, Mail, MapPin, Clock, Instagram, ChevronDown, Menu, X, ArrowRight, CheckCircle, Award, Shield, Heart, Leaf, Calendar, Ribbon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FeatureCard from '@/components/FeatureCard';
import { FaWhatsapp } from 'react-icons/fa6';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [clientsCarouselApi, setClientsCarouselApi] = useState<CarouselApi | null>(null);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBackground = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']);
  const headerShadow = useTransform(scrollY, [0, 100], ['0 0 0px rgba(0, 0, 0, 0)', '0 4px 20px rgba(0, 0, 0, 0.1)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (!clientsCarouselApi) return;
    const id = setInterval(() => {
      try {
        clientsCarouselApi.scrollNext();
      } catch {}
    }, 2500);
    return () => clearInterval(id);
  }, [clientsCarouselApi]);

  const linkBase = 'transition-colors';
  const linkActive = 'text-[#00B74F] font-medium';
  const linkInactive = 'text-gray-700 hover:text-[#00B74F]';
  const navLinkClass = (path: string) => `${linkBase} ${pathname === path ? linkActive : linkInactive}`;

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
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'bg-white/95 shadow-lg' : 'bg-transparent'
        }`}
        style={{ 
          backgroundColor: headerBackground,
          boxShadow: headerShadow
        }}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/logo-horizontal-preto.png" alt="ASC Logo" width={280} height={280} className="object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className={`${linkBase} ${pathname === '/' ? linkActive : linkInactive}`}>Início</a>
            <Link href="/sobre" className={navLinkClass('/sobre')}>Sobre</Link>
            <Link href="/servicos" className={navLinkClass('/servicos')}>Serviços</Link>
            <Link href="/clientes" className={navLinkClass('/clientes')}>Clientes</Link>
            <Link href="/contato" className={navLinkClass('/contato')}>Contato</Link>
            <span className="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-1 text-xs font-semibold text-pink-600">
              <Ribbon className="mr-1 h-3.5 w-3.5 text-pink-500" /> Outubro Rosa
            </span>
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
              <a href="#home" className={`${linkBase} ${pathname === '/' ? linkActive : linkInactive}`} onClick={() => setIsMenuOpen(false)}>Início</a>
              <Link href="/sobre" className={navLinkClass('/sobre')} onClick={() => setIsMenuOpen(false)}>Sobre</Link>
              <Link href="/servicos" className={navLinkClass('/servicos')} onClick={() => setIsMenuOpen(false)}>Serviços</Link>
              <Link href="/clientes" className={navLinkClass('/clientes')} onClick={() => setIsMenuOpen(false)}>Clientes</Link>
              <Link href="/contato" className={navLinkClass('/contato')} onClick={() => setIsMenuOpen(false)}>Contato</Link>
              <span className="mt-2 inline-flex w-fit items-center rounded-full bg-pink-100 px-2.5 py-1 text-xs font-semibold text-pink-600">
                <Ribbon className="mr-1 h-3.5 w-3.5 text-pink-500" /> Outubro Rosa
              </span>
            </div>
          </motion.div>
        )}
      </motion.header>

      <section id="home" className="relative h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B74F]/6 via-white to-[#00A376]/6" />
        
        {/* Geometric background elements - more subtle */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 right-8 w-24 h-24 rounded-full bg-pink-200/30 blur-2xl" />
          <div className="absolute bottom-16 left-8 w-32 h-32 rounded-full bg-[#00B74F]/10 blur-2xl" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-[#00A376]/15 blur-xl" />
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00B74F 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #00A376 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.header
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Logo + kicker */}
            <motion.div variants={fadeInUp} className="mb-5 flex items-center justify-center gap-3">
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
              className="mx-auto mb-3 max-w-2xl text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl"
            >
              Contabilidade que impulsiona decisões.
              <span className="block bg-gradient-to-r from-[#00B74F] to-[#00A376] bg-clip-text text-transparent">
                Resultado sem burocracia.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600"
            >
              Desde 2014, simplificamos a rotina fiscal e contábil da sua empresa — com ética, sigilo e linguagem clara.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="mb-12 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="group bg-[#00B74F] px-6 py-4 text-white hover:bg-[#00A376]"
              >
                <a href="#contato" aria-label="Fale conosco">
                  Fale Conosco
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#00B74F] px-6 py-4 text-[#00B74F] hover:bg-[#00B74F] hover:text-white"
              >
                <a
                  href="https://wa.me/5551980111096"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir WhatsApp"
                >
                  <FaWhatsapp className="mr-2 w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.header>

          {/* Feature cards */}
          <motion.section
            variants={fadeInUp}
            className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3"
          >
            <FeatureCard
              icon={<Heart className="h-8 w-8 text-[#00B74F]" />}
              title="Ética & Sigilo"
              desc="Compromisso absoluto com a confidencialidade."
              accent="from-[#00B74F]"
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-[#00A376]" />}
              title="Desde 2014"
              desc="Experiência consolidada e proximidade com o cliente."
              accent="from-[#00A376]"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-[#00B74F]" />}
              title="Responsabilidade Civil"
              desc="Seguro de responsabilidade civil para proteger sua empresa."
              accent="from-[#00B74F]"
            />
          </motion.section>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-[#00B74F]" />
        </motion.div>
      </section>

      <section id="sobre" className="py-20 bg-gradient-to-br from-white via-[#00B74F]/5 to-white relative">
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
                Sobre <span className="text-[#00B74F]">Nós</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full" />
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-3xl shadow-2xl p-8 md:p-16 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                  Entregamos serviços contábeis de excelência, com atendimento personalizado e linguagem acessível, contribuindo para o crescimento sustentável dos negócios de nossos clientes através da ética, transparência e comprometimento.
                </p>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto text-white/90">
                  Nossa <span className="font-semibold">assessoria jurídica</span> atua de forma integrada à contabilidade para orientar questões contratuais, societárias e de compliance, reduzindo riscos e dando segurança às decisões do seu negócio.
                </p>
                <div className="mt-6">
                  <Button asChild className="bg-white text-[#00B74F] hover:bg-white/90">
                    <Link href="https://wa.me/5551980111096">Saiba mais</Link>
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
            
            <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
              <Button asChild className="bg-[#00B74F] hover:bg-[#00A376]">
                <Link href="/servicos">Ver mais</Link>
              </Button>
            </motion.div>
           
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

            <Carousel
              opts={{ align: 'start', loop: true }}
              setApi={setClientsCarouselApi}
              className="relative pb-6"
            >
              <CarouselContent className="pb-2">
                {clients.map((client, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center min-h-[120px] mb-4"
                    >
                      <h3 className="text-xl font-bold text-gray-900 text-center">{client}</h3>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
    </div>
  );
}
