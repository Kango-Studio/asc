"use client";
import { benefits } from "@/constants/benefits";
import { StaggerTestimonials } from "@/components/StaggerTestimonials";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
  typewriterEffect,
  floatingAnimation,
} from "@/lib/animations";
import {
  Building2,
  FileText,
  Users,
  Calculator,
  FileCheck,
  Scale,
  CreditCard,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Award,
  Shield,
  Heart,
  Leaf,
  Calendar,
  Ribbon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FeatureCard from "@/components/FeatureCard";
import { FaWhatsapp } from "react-icons/fa6";
import { ClientsFeedback } from "@/components/screens/home/clients-feedback";
import CampaignBadge from "@/components/CampaignBadge";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0px rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const linkBase = "transition-colors";
  const linkActive = "text-[#00B74F] font-medium";
  const linkInactive = "text-gray-700 hover:text-[#00B74F]";
  const navLinkClass = (path: string) =>
    `${linkBase} ${pathname === path ? linkActive : linkInactive}`;

  const services = [
    {
      icon: Building2,
      title: "Abertura de Empresas",
      description:
        "Processo completo e desburocratizado para abrir sua empresa",
    },
    {
      icon: FileText,
      title: "Departamento Fiscal",
      description: "Gestão fiscal completa e atualizada",
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Administração completa de RH e folha de pagamento",
    },
    {
      icon: Calculator,
      title: "Departamento Contábil",
      description: "Contabilidade precisa e transparente",
    },
    {
      icon: FileCheck,
      title: "Departamento Societário",
      description: "Gestão societária e alterações contratuais",
    },
    {
      icon: Scale,
      title: "Assessoria Jurídica",
      description: "Suporte jurídico especializado",
    },
    {
      icon: CreditCard,
      title: "Certificado Digital",
      description: "Emissão e renovação de certificados digitais",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          pathname === "/"
            ? isScrolled
              ? "bg-white/95 shadow-lg"
              : "bg-transparent"
            : "bg-white/95 shadow-lg"
        }`}
        style={{
          backgroundColor:
            pathname === "/" ? headerBackground : "rgba(255, 255, 255, 0.95)",
          boxShadow:
            pathname === "/" ? headerShadow : "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo-horizontal-preto.png"
                alt="ASC Logo"
                width={280}
                height={280}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className={`${linkBase} ${
                pathname === "/" ? linkActive : linkInactive
              }`}
            >
              Início
            </a>
            <Link href="/sobre" className={navLinkClass("/sobre")}>
              Sobre
            </Link>
            <Link href="/servicos" className={navLinkClass("/servicos")}>
              Serviços
            </Link>
            <Link href="/clientes" className={navLinkClass("/clientes")}>
              Clientes
            </Link>
            <Link href="/contato" className={navLinkClass("/contato")}>
              Contato
            </Link>
            <CampaignBadge month="novembro" />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="text-[#00B74F]" />
            ) : (
              <Menu className="text-[#00B74F]" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#home"
                className={`${linkBase} ${
                  pathname === "/" ? linkActive : linkInactive
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <Link
                href="/sobre"
                className={navLinkClass("/sobre")}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/servicos"
                className={navLinkClass("/servicos")}
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/clientes"
                className={navLinkClass("/clientes")}
                onClick={() => setIsMenuOpen(false)}
              >
                Clientes
              </Link>
              <Link
                href="/contato"
                className={navLinkClass("/contato")}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <CampaignBadge month="novembro" size="sm" />
            </div>
          </motion.div>
        )}
      </motion.header>

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
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Gestão contábil
              </motion.span>

              <motion.span
                className="block bg-gradient-to-r from-[#00B74F] to-[#00A376] md:h-24 w-full bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                inteligente
                <motion.span
                  className="text-[#00B74F]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
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
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.p
                className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Simplificamos a rotina fiscal e contábil da sua empresa — com{" "}
                <motion.span
                  className="font-semibold text-[#00B74F]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  ética
                </motion.span>
                ,{" "}
                <motion.span
                  className="font-semibold text-[#00A376]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  sigilo
                </motion.span>{" "}
                e{" "}
                <motion.span
                  className="font-semibold text-[#00B74F]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
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
              transition={{ duration: 0.8, delay: 2.6 }}
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
                      transition={{ duration: 0.5, delay: 2.8 }}
                    >
                      Fale Conosco
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 3.0,
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
                      transition={{ duration: 0.5, delay: 3.0 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 3.2,
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
            className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 3.6 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
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
              transition={{ duration: 0.6, delay: 3.8 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
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
              transition={{ duration: 0.6, delay: 4.0 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
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
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, 8, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 4.2 },
            y: { duration: 2, repeat: Infinity, delay: 4.5 },
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
                Sobre <span className="text-[#00B74F]">Nós</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-3xl shadow-2xl p-8 md:p-16 text-white text-center relative overflow-hidden"
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
                    className="bg-white text-[#00B74F] hover:bg-white/90"
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
                Nossos <span className="text-[#00B74F]">Serviços</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
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
                  <service.icon className="w-16 h-16 text-[#00B74F] mb-4 group-hover:scale-110 transition-transform" />
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
              <Button asChild className="bg-[#00B74F] hover:bg-[#00A376]">
                <Link href="/servicos">Ver mais</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ClientsFeedback title="Veja o que nossos parceiros" titleSuffix="dizem" />
    </div>
  );
}
