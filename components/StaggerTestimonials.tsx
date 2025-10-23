"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "A ASC transformou nossa gestão contábil. Atendimento excepcional e linguagem clara que facilita muito nosso dia a dia.",
    by: "Gestão Leffa Móveis",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "Profissionalismo, agilidade e ética. A parceria com a ASC é fundamental para o crescimento da nossa empresa.",
    by: "Traffic Control",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "Excelente assessoria! A equipe está sempre disponível e nos ajuda a tomar as melhores decisões estratégicas.",
    by: "LDO Business",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "A ASC nos ajudou a organizar toda nossa contabilidade. Hoje temos total controle e transparência dos nossos números.",
    by: "Apara Barro Dema",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "Serviço de qualidade excepcional. A equipe da ASC é muito competente e sempre nos orienta da melhor forma.",
    by: "Comércio de Bananas Borges",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "Parceria de anos que só nos trouxe benefícios. Recomendamos a ASC para qualquer empresa que busca excelência.",
    by: "Niel Diesel",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-4 sm:p-6 md:p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-[#00B74F] text-white border-[#00B74F]" 
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-[#00B74F]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #e5e7eb" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-200"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-3 sm:mb-4 h-10 w-8 sm:h-12 sm:w-10 md:h-14 md:w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px #ffffff"
        }}
      />
      <div className="flex gap-1 mb-3 sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
        ))}
      </div>
      <h3 className={cn(
        "text-sm sm:text-base md:text-lg font-medium leading-relaxed",
        isCenter ? "text-white" : "text-gray-900"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 mt-2 text-xs sm:text-sm font-semibold",
        isCenter ? "text-white/90" : "text-[#00B74F]"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [containerHeight, setContainerHeight] = useState(600);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 320);
      setContainerHeight(matches ? 600 : 700);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full"
      style={{ height: containerHeight }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-200 hover:bg-[#00B74F] hover:text-white hover:border-[#00B74F]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B74F] focus-visible:ring-offset-2",
            "rounded-full shadow-lg"
          )}
          aria-label="Depoimento anterior"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-200 hover:bg-[#00B74F] hover:text-white hover:border-[#00B74F]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B74F] focus-visible:ring-offset-2",
            "rounded-full shadow-lg"
          )}
          aria-label="Próximo depoimento"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
