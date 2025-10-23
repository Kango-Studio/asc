"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo-horizontal-preto.png"
                alt="ASC Assessoria Contábil"
                width={220}
                height={44}
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
            <p className="max-w-sm text-sm text-gray-300">
              Desde 2014, simplificando a contabilidade com ética, transparência e compromisso com o seu crescimento.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#9AE6B4]">Navegação</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
              <li><Link href="/servicos" className="hover:text-white">Serviços</Link></li>
              <li><Link href="/clientes" className="hover:text-white">Clientes</Link></li>
              <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#9AE6B4]">Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Abertura de Empresas</li>
              <li>Departamento Fiscal</li>
              <li>Departamento Pessoal</li>
              <li>Contabilidade Gerencial</li>
              <li>Assessoria Jurídica</li>
              <li>Certificado Digital</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#9AE6B4]">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2"><FaWhatsapp className="h-5 w-5 text-[#9AE6B4]" /> (51) 3667-1096</li>
              <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-[#9AE6B4]" /> (51) 98011-1096</li>
              <li className="flex items-center gap-2"><Mail className="h-5 w-5 text-[#9AE6B4]" /> <a href="mailto:atendimento@asccontabilidade.srv.br" className="hover:text-white">atendimento@ascassessoria.com.br</a></li>
              <li className="flex items-center gap-2"><Clock className="h-5 w-5 text-[#9AE6B4]" /> Seg–Sex: 8h–12h | 13h30–18h</li>
              <li className="flex items-center gap-2"><Instagram className="h-5 w-5 text-[#9AE6B4]" /> <a href="https://instagram.com/ascassessoriacontabil" target="_blank" rel="noopener noreferrer" className="hover:text-white">@ascassessoriacontabil</a></li>
            </ul>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#00B74F] to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} ASC Assessoria Contábil. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


