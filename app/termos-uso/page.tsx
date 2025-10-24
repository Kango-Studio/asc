'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, CheckCircle, AlertTriangle, Users, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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

export default function TermosUso() {
  const sections = [
    {
      icon: Users,
      title: 'Responsabilidades do Cliente',
      content: 'O cliente deve fornecer informações verdadeiras e atualizadas, manter documentos organizados e cumprir prazos estabelecidos para entrega de documentos.'
    },
    {
      icon: Shield,
      title: 'Responsabilidades da ASC',
      content: 'A ASC se compromete a prestar serviços com qualidade, manter sigilo absoluto das informações e cumprir todas as obrigações legais e regulamentares.'
    },
    {
      icon: CheckCircle,
      title: 'Qualidade dos Serviços',
      content: 'Garantimos a prestação de serviços contábeis de alta qualidade, com equipe qualificada e atualizada com as mais recentes legislações.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitações',
      content: 'Nossos serviços estão limitados ao escopo contábil, fiscal e jurídico, não nos responsabilizando por decisões empresariais do cliente.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative py-20 pt-32 bg-gradient-to-br from-[#00B74F]/10 via-white to-pink-50/20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <Link href="/" className="inline-block mb-8">
                <Image src="/logo-padrao.png" alt="ASC Logo" width={80} height={80} className="mx-auto" />
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Termos de <span className="text-[#00B74F]">Uso</span>
              </h1>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Condições e responsabilidades para uso de nossos serviços
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-16 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gray-200/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00B74F]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-4">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">1. Aceitação dos Termos</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    Ao contratar os serviços da <span className="font-bold text-[#00B74F]">ASC Assessoria Contábil</span>, você concorda com estes Termos de Uso. Estes termos regulam a prestação de serviços contábeis, fiscais e jurídicos.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">2. Serviços Oferecidos</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    A ASC oferece os seguintes serviços:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                    <li>Departamento Contábil (escrituração, balanços, demonstrações)</li>
                    <li>Departamento Fiscal (obrigações acessórias, declarações)</li>
                    <li>Departamento Pessoal (folha de pagamento, admissões, demissões)</li>
                    <li>Departamento Societário (alterações contratuais, atas)</li>
                    <li>Assessoria Jurídica (consultoria, processos administrativos)</li>
                    <li>Abertura de empresas e certificados digitais</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">3. Responsabilidades do Cliente</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    O cliente se compromete a:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                    <li>Fornecer informações verdadeiras, completas e atualizadas</li>
                    <li>Entregar documentos no prazo estabelecido</li>
                    <li>Manter documentos organizados e acessíveis</li>
                    <li>Comunicar alterações relevantes em tempo hábil</li>
                    <li>Efetuar pagamentos nos prazos acordados</li>
                    <li>Respeitar as orientações técnicas fornecidas</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">4. Responsabilidades da ASC</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    A ASC se compromete a:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                    <li>Prestar serviços com qualidade e competência técnica</li>
                    <li>Manter sigilo absoluto das informações do cliente</li>
                    <li>Cumprir prazos legais e regulamentares</li>
                    <li>Manter equipe qualificada e atualizada</li>
                    <li>Fornecer orientações claras e precisas</li>
                    <li>Garantir conformidade com a legislação vigente</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">5. Sigilo Profissional</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    A ASC garante o sigilo absoluto de todas as informações, documentos e dados do cliente, conforme estabelecido no Código de Ética Profissional do Contador e na legislação vigente.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">6. Limitações de Responsabilidade</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    A responsabilidade da ASC está limitada a:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                    <li>Serviços contábeis, fiscais e jurídicos contratados</li>
                    <li>Informações fornecidas pelo cliente</li>
                    <li>Legislação vigente no momento da prestação</li>
                    <li>Prazos estabelecidos em contrato</li>
                  </ul>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                    Não nos responsabilizamos por decisões empresariais, investimentos ou outras atividades não relacionadas aos serviços contratados.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">7. Pagamentos e Prazos</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    Os valores e prazos de pagamento são estabelecidos em contrato específico. O não pagamento pode resultar na suspensão dos serviços.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">8. Rescisão</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    Qualquer das partes pode rescindir o contrato mediante aviso prévio de 30 dias, garantindo a entrega de todos os documentos e informações necessárias.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">6. Contato</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                  </p>
                  <div className="bg-[#00B74F]/10 p-6 rounded-2xl">
                    <p className="text-base sm:text-lg text-gray-700 mb-2">
                      <strong>E-mail:</strong> atendimento@ascassessoria.com.br
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 mb-2">
                      <strong>Telefone:</strong> (51) 98011-1096
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                      <strong>Endereço:</strong> Avenida Padre Rizzieri Delai 705, sala 03 – Centro – Três Cachoeiras, RS
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                Nossos <span className="text-[#00B74F]">Compromissos</span>
              </h2>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-12" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-white to-[#00B74F]/5 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <section.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#00B74F] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#00B74F] to-[#00A376] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-16 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <Scale className="w-16 h-16 mx-auto mb-6 text-white" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Transparência e Ética</h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                  Nossos termos são baseados em transparência, ética profissional e compromisso com a qualidade. Trabalhamos para estabelecer relacionamentos duradouros baseados na confiança mútua.
                </p>
                <div className="inline-block px-6 py-3 sm:px-8 bg-white/20 rounded-full backdrop-blur-sm">
                  <p className="text-sm sm:text-base md:text-lg font-semibold">Relacionamento de Confiança</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
