import { StaggerTestimonials } from "@/components/StaggerTestimonials"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

import { benefits } from "@/constants/benefits";

 const clients = [
    "Leffa Móveis",
    "Apara Barro Dema",
    "Comércio de Bananas Borges",
    "Nil Diesel",
    "Traffic Control",
    "LDO Business",
 ];

 interface ClientsFeedbackProps {
  title: string;
  titleSuffix: string;
 }
  
export const ClientsFeedback = ({ title, titleSuffix}: ClientsFeedbackProps ) => {
  const [clientsCarouselApi, setClientsCarouselApi] =
    useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!clientsCarouselApi) return;
    const id = setInterval(() => {
      try {
        clientsCarouselApi.scrollNext();
      } catch {}
    }, 2500);
    return () => clearInterval(id);
  }, [clientsCarouselApi]);

  return (
    <>
    <section
        id="clientes"
        className="py-20 bg-gradient-to-br from-[#00B74F]/5 via-white to-pink-50/30"
      >
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
              opts={{ align: "start", loop: true }}
              setApi={setClientsCarouselApi}
              className="relative pb-6"
            >
              <CarouselContent className="pb-2">
                {clients.map((client, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 flex items-center justify-center min-h-[120px] mb-4"
                    >
                      <h3 className="text-xl font-bold text-gray-900 text-center">
                        {client}
                      </h3>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </section>

      <motion.div variants={fadeInUp} className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
          {title}
          <span className="text-[#00B74F]"> {titleSuffix}</span>
        </h2>
        <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-12" />

        <div className="w-full mx-auto">
          <StaggerTestimonials /> 
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="text-center pb-20">
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
              <Link href="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </motion.div> 
    </>
  )
}