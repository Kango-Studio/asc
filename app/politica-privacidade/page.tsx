'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Database } from 'lucide-react';
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

export default function PoliticaPrivacidade() {
  const sections = [
    {
      icon: Database,
      title: 'Coleta de Dados',
      content: 'Coletamos apenas os dados necessários para prestação dos nossos serviços contábeis, incluindo informações empresariais, documentos fiscais e dados de contato.'
    },
    {
      icon: Lock,
      title: 'Segurança dos Dados',
      content: 'Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.'
    },
    {
      icon: Users,
      title: 'Compartilhamento',
      content: 'Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para cumprimento de obrigações legais ou com seu consentimento expresso.'
    },
    {
      icon: Eye,
      title: 'Seus Direitos',
      content: 'Você tem direito de acessar, corrigir, excluir ou portar seus dados pessoais, conforme previsto na Lei Geral de Proteção de Dados (LGPD).'
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
                Política de <span className="text-[#00B74F]">Privacidade</span>
              </h1>
              <div className="w-24 h-1 bg-[#00B74F] mx-auto rounded-full mb-6" />
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Transparência e proteção dos seus dados pessoais
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-16 mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gray-200/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00B74F]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-4">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">1. Introdução</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    A <span className="font-bold text-[#00B74F]">ASC Assessoria Contábil</span> está comprometida com a proteção da privacidade e dos dados pessoais de nossos clientes, parceiros e visitantes de nosso site. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">2. Dados Coletados</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    Coletamos os seguintes tipos de dados:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                    <li>Dados de identificação (nome, CPF, CNPJ, endereço)</li>
                    <li>Dados de contato (telefone, e-mail)</li>
                    <li>Dados empresariais (razão social, atividade, documentos fiscais)</li>
                    <li>Dados de navegação (cookies, endereço IP)</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">3. Finalidade do Tratamento</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    Utilizamos seus dados para:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                    <li>Prestação de serviços contábeis e fiscais</li>
                    <li>Cumprimento de obrigações legais e regulamentares</li>
                    <li>Comunicação sobre nossos serviços</li>
                    <li>Melhoria da experiência do usuário</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">4. Base Legal</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    O tratamento de seus dados pessoais é baseado em: execução de contrato, cumprimento de obrigação legal, legítimo interesse e, quando aplicável, seu consentimento.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">5. Seus Direitos</h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    Conforme a LGPD, você tem direito a:
                  </p>
                  <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
                    <li>Confirmação da existência de tratamento</li>
                    <li>Acesso aos dados</li>
                    <li>Correção de dados incompletos ou inexatos</li>
                    <li>Anonimização, bloqueio ou eliminação</li>
                    <li>Portabilidade dos dados</li>
                    <li>Revogação do consentimento</li>
                  </ul>
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
                <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Proteção Garantida</h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
                  Sua privacidade é nossa prioridade. Trabalhamos continuamente para garantir a segurança e proteção dos seus dados pessoais, seguindo as melhores práticas e a legislação vigente.
                </p>
                <div className="inline-block px-6 py-3 sm:px-8 bg-white/20 rounded-full backdrop-blur-sm">
                  <p className="text-sm sm:text-base md:text-lg font-semibold">Conformidade com a LGPD</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
