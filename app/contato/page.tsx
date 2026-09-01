'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Instagram, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navigation from '@/components/Navigation';
import { FaWhatsapp } from 'react-icons/fa6';
import { maskPhone, isValidPhone, isValidEmail } from '@/lib/utils/mask';

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

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const WHATSAPP_NUMBER = '555136671096';
const SUBMISSION_COOLDOWN_MS = 30_000;
const MINIMUM_FILL_TIME_MS = 2_000;

const cleanForWhatsApp = (value: string) =>
  value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const formStartedAt = useRef(0);
  const submissionLock = useRef(false);

  useEffect(() => {
    formStartedAt.current = Date.now();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validação de nome
    if (!formData.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    } else if (formData.name.trim().length > 80) {
      newErrors.name = 'Nome deve ter no máximo 80 caracteres';
    }

    // Validação de email
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'E-mail inválido';
    } else if (formData.email.trim().length > 254) {
      newErrors.email = 'E-mail muito longo';
    }

    // Validação de telefone (obrigatório conforme solicitado)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido. Use o formato (00) 00000-0000';
    }

    // Validação de assunto
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Assunto deve ter pelo menos 3 caracteres';
    } else if (formData.subject.trim().length > 120) {
      newErrors.subject = 'Assunto deve ter no máximo 120 caracteres';
    }

    // Validação de mensagem
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Mensagem deve ter no máximo 1.000 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskPhone(e.target.value);
    setFormData({ ...formData, phone: maskedValue });
    // Remove erro do campo quando o usuário começa a digitar
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined });
    }
  };

  const handleFieldChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
    // Remove erro do campo quando o usuário começa a digitar
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (submissionLock.current) return;

    // Honeypot e tempo mínimo impedem submissões automatizadas simples.
    if (website || Date.now() - formStartedAt.current < MINIMUM_FILL_TIME_MS) {
      setSubmitStatus({
        type: 'error',
        message: 'Não foi possível validar o envio. Aguarde um instante e tente novamente.'
      });
      return;
    }

    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor, corrija os erros no formulário antes de enviar.'
      });
      return;
    }

    const lastSubmission = Number(
      window.localStorage.getItem('asc-contact-last-submission') || 0
    );
    if (Date.now() - lastSubmission < SUBMISSION_COOLDOWN_MS) {
      setSubmitStatus({
        type: 'error',
        message: 'Aguarde 30 segundos antes de abrir uma nova mensagem.'
      });
      return;
    }

    submissionLock.current = true;
    setIsSubmitting(true);

    try {
      const message = [
        '*Novo contato pelo site da ASC*',
        '',
        `*Nome:* ${cleanForWhatsApp(formData.name)}`,
        `*E-mail:* ${cleanForWhatsApp(formData.email).toLowerCase()}`,
        `*Telefone:* ${cleanForWhatsApp(formData.phone)}`,
        `*Assunto:* ${cleanForWhatsApp(formData.subject)}`,
        '',
        '*Mensagem:*',
        cleanForWhatsApp(formData.message),
      ].join('\n');

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.localStorage.setItem('asc-contact-last-submission', String(Date.now()));

      const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!whatsappWindow) window.location.assign(whatsappUrl);

      setSubmitStatus({
        type: 'success',
        message: 'WhatsApp aberto com sua mensagem. Revise o texto e toque em enviar para concluir.'
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setWebsite('');
      setErrors({});
      formStartedAt.current = Date.now();
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Não foi possível abrir o WhatsApp. Tente novamente ou use o botão de contato ao lado.'
      });
    } finally {
      submissionLock.current = false;
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Avenida Padre Rizzieri Delai 705, sala 03 – Centro',
      link: 'https://maps.google.com/?q=Avenida+Padre+Rizzieri+Delai+705,+sala+03+–+Centro'
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
      content2: '8h–12h | 13h30–18h'
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
        {/* <div className="absolute top-20 left-10 w-64 h-64">
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
                Entre em <span className="text-[#00B74F]">Contato</span>
              </h1>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos prontos para atender você e sua empresa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <motion.div variants={fadeInUp}>
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Envie sua mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
                      <label htmlFor="contact-website">Website</label>
                      <input
                        id="contact-website"
                        name="website"
                        type="text"
                        value={website}
                        onChange={(event) => setWebsite(event.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
                    {submitStatus && (
                      <Alert variant={submitStatus.type === 'error' ? 'destructive' : 'default'} className={submitStatus.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : ''}>
                        {submitStatus.type === 'success' ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4" />
                        )}
                        <AlertDescription className={submitStatus.type === 'success' ? 'text-green-800' : ''}>
                          {submitStatus.message}
                        </AlertDescription>
                      </Alert>
                    )}

                    <div>
                      <label htmlFor="contact-name" className="block text-gray-700 font-semibold mb-2">
                        Nome completo *
                      </label>
                      <Input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleFieldChange('name')}
                        className={`w-full ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="Seu nome"
                        autoComplete="name"
                        maxLength={80}
                        required
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-gray-700 font-semibold mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFieldChange('email')}
                        className={`w-full ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="seu@email.com"
                        autoComplete="email"
                        maxLength={254}
                        required
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-gray-700 font-semibold mb-2">
                        Telefone *
                      </label>
                      <Input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`w-full ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="(00) 00000-0000"
                        maxLength={15}
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-gray-700 font-semibold mb-2">
                        Assunto *
                      </label>
                      <Input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleFieldChange('subject')}
                        className={`w-full ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="Sobre o que deseja falar?"
                        maxLength={120}
                        required
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      />
                      {errors.subject && (
                        <p id="contact-subject-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-gray-700 font-semibold mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleFieldChange('message')}
                        className={`w-full min-h-[150px] ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                        placeholder="Conte-nos como podemos ajudar..."
                        maxLength={1000}
                        required
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-limit'}
                      />
                      <p id="contact-message-limit" className="mt-1 text-right text-xs text-gray-500">
                        {formData.message.length}/1.000
                      </p>
                      {errors.message && (
                        <p id="contact-message-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00B74F] hover:bg-[#00A376] text-white text-lg py-6 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Abrindo WhatsApp...' : 'Continuar no WhatsApp'}
                      {!isSubmitting && <Send className="ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                  </form>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-3xl p-8 text-white relative overflow-hidden mb-6">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <FaWhatsapp className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Atendimento rápido via WhatsApp</h3>
                    <p className="mb-6 opacity-90">
                      Prefere conversar diretamente? Clique no botão abaixo e fale conosco pelo WhatsApp.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-[#00B74F] hover:bg-gray-100 w-full"
                    >
                      <a href="https://wa.me/555136671096" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="mr-2" />
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
                    title="Localização da ASC Assessoria Contábil"
                    src="https://www.google.com/maps?q=Avenida+Padre+Rizzieri+Delai+705,+sala+03+–+Centro&output=embed"
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
    </div>
  );
}
