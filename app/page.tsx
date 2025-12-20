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
import { Herotext } from "@/components/screens/home/herto-text";
import { HeroVideo } from "@/components/screens/home/hero-video";
import { HolidayModal } from "@/components/HolidayModal";



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
      <HolidayModal />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          pathname === "/"
            ? isScrolled
              ? "bg-white/95 shadow-lg"
              : ""
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
            {/* <CampaignBadge month="novembro" /> */}
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
              {/* <CampaignBadge month="novembro" size="sm" /> */}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* <Herotext /> */}
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
