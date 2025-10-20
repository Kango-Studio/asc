'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Send, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Avenida Padre Rizzieri Delai 705, sala 03 – Centro',
      link: 'https://maps.google.com/?q=Avenida+Padre+Rizzieri+Delai+705'
    },
    {
      icon: Phone,
      title: 'Telefones',
      content: '(51) 3667-1096',
      content2: '(51) 98011-1096',
      link: 'tel:+555136671096'
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Segunda a sexta',
      content2: '8h–12h / 13h30–18h'
    },
    {
      icon: Instagram,
      title: 'Redes Sociais',
      content: '@ascassessoriacontabil',
      link: 'https://instagram.com/ascassessoriacontabil'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative py-20 pt-32 bg-gradient-to-br from-[#00B74F]/10 via-white to-pink-50/20 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64">
          <svg viewBox="0 0 200 200" className="opacity-10">
            <path fill="#FF69B4" d="M 100, 30 C 120, 10 150, 10 170, 30 C 190, 50 190, 80 170, 100 L 100, 170 L 30, 100 C 10, 80 10, 50 30, 30 C 50, 10 80, 10 100, 30 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Link href="/" className="inline-block mb-8">
                <Image src="/image.png" alt="ASC Logo" width={120} height={120} className="mx-auto" />
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Entre em <span className="text-[#00B74F]">Contato</span>
              </h1>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos prontos para atender você e sua empresa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <motion.div variants={fadeInUp}>
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Envie sua mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nome completo *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">E-mail *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Assunto *</label>
                      <Input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full"
                        placeholder="Sobre o que deseja falar?"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Mensagem *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full min-h-[150px]"
                        placeholder="Conte-nos como podemos ajudar..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00B74F] hover:bg-[#00A376] text-white text-lg py-6 group"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-3xl p-8 text-white relative overflow-hidden mb-6">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <MessageCircle className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Atendimento rápido via WhatsApp</h3>
                    <p className="mb-6 opacity-90">
                      Prefere conversar diretamente? Clique no botão abaixo e fale conosco pelo WhatsApp.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-[#00B74F] hover:bg-gray-100 w-full"
                    >
                      <a href="https://wa.me/5551980111096" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2" />
                        Chamar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00B74F] hover:underline block"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-700">{info.content}</p>
                        )}
                        {info.content2 && (
                          info.link ? (
                            <a
                              href="tel:+5551980111096"
                              className="text-[#00B74F] hover:underline block"
                            >
                              {info.content2}
                            </a>
                          ) : (
                            <p className="text-gray-700">{info.content2}</p>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-51.123456!3d-29.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA3JzI0LjQiUyA1McKwMDcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
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
