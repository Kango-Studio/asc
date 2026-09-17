"use client";

import { Button } from "@/components/ui/button"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useReducedMotionPreference } from "@/hooks/use-reduced-motion"

import { benefits } from "@/constants/benefits";
import { clients } from "@/constants/clients";

 interface ClientsFeedbackProps {
  isClientPage?: boolean;
 }
  
export const ClientsFeedback = ({ isClientPage = true }: ClientsFeedbackProps ) => {
  const [clientsCarouselApi, setClientsCarouselApi] =
    useState<CarouselApi | null>(null);

  const reducedMotion = useReducedMotionPreference();
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    if (!clientsCarouselApi || reducedMotion || isPaused || isHovered || hasFocus) return;
    const id = setInterval(() => {
      if (!document.hidden) clientsCarouselApi.scrollNext();
    }, 2500);
    return () => clearInterval(id);
  }, [clientsCarouselApi, reducedMotion, isPaused, isHovered, hasFocus]);

  return (
    <>
      {isClientPage && 
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
                  Nossos <span className="text-brand-strong">Clientes</span>
                </h2>
                <div className="w-24 h-1 bg-brand-strong mx-auto rounded-full mb-6" />
                <p className="text-xl text-gray-600">
                  Empresas que confiam em nosso trabalho
                </p>
              </motion.div>

              <div
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
                onFocusCapture={() => setHasFocus(true)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
                }}
              >
                <Carousel
                  id="clients-carousel"
                  aria-label="Empresas atendidas pela ASC"
                  opts={{ align: "start", loop: true }}
                  setApi={setClientsCarouselApi}
                  className="relative pb-6"
                >
                  <CarouselContent className="pb-2" onPointerDown={() => setIsPaused(true)}>
                    {clients.map((client, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                      >
                        <motion.div
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05 }}
                          className="p-4 transition-all flex items-center justify-center min-h-[100px] mb-4"
                        >
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={client.isLargeSize ? 150 : 100}
                            height={client.isLargeSize ? 150 : 100}
                            className={`object-contain w-full h-full ${client.isLargeSize ? 'max-h-24' : 'max-h-16'}`}
                          />
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="min-h-11 min-w-11"
                    aria-label="Clientes anteriores"
                    aria-controls="clients-carousel"
                    onClick={() => { setIsPaused(true); clientsCarouselApi?.scrollPrev(reducedMotion); }}
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="min-h-11 min-w-11"
                    aria-label="Próximos clientes"
                    aria-controls="clients-carousel"
                    onClick={() => { setIsPaused(true); clientsCarouselApi?.scrollNext(reducedMotion); }}
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      }
      {/* <motion.div variants={fadeInUp} className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
          {title}
          <span className="text-brand-strong"> {titleSuffix}</span>
        </h2>
        <div className="w-24 h-1 bg-brand-strong mx-auto rounded-full mb-12" />

        <div className="w-full mx-auto">
          <StaggerTestimonials /> 
        </div>
      </motion.div> */}

      <motion.div variants={fadeInUp} className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
          Por que escolher a <span className="text-brand-strong">ASC</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-brand-strong to-brand-deep rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
        <div className="bg-gradient-to-br from-brand-strong to-brand-deep rounded-3xl p-12 max-w-4xl mx-auto text-white relative overflow-hidden">
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
              className="bg-white text-brand-strong hover:bg-gray-100 text-lg px-12 py-6"
            >
              <Link href="https://wa.me/555136671096" target="_blank" rel="noopener noreferrer">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </motion.div> 
    </>
  )
}
