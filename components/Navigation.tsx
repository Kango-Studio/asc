'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-horizontal-preto.png" alt="ASC Logo" width={280} height={280} className="object-contain" />
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#00B74F] transition-colors">Início</Link>
            <Link href="/sobre" className="text-gray-700 hover:text-[#00B74F] transition-colors">Sobre</Link>
            <Link href="/servicos" className="text-gray-700 hover:text-[#00B74F] transition-colors">Serviços</Link>
            <Link href="/clientes" className="text-gray-700 hover:text-[#00B74F] transition-colors">Clientes</Link>
            <Link href="/contato" className="text-gray-700 hover:text-[#00B74F] transition-colors">Contato</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#00B74F]" /> : <Menu className="text-[#00B74F]" />}
          </button>
        </nav>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Início</Link>
              <Link href="/sobre" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
              <Link href="/servicos" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
              <Link href="/clientes" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Clientes</Link>
              <Link href="/contato" className="text-gray-700 hover:text-[#00B74F] transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            </div>
          </motion.div>
        )}
      </header>

      <motion.a
        href="https://wa.me/5551980111096"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </>
  );
}
