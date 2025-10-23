'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Ribbon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBackground = useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']);
  const headerShadow = useTransform(scrollY, [0, 100], ['0 0 0px rgba(0, 0, 0, 0)', '0 4px 20px rgba(0, 0, 0, 0.1)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkBase = 'transition-colors';
  const linkActive = 'text-[#00B74F] font-medium';
  const linkInactive = 'text-gray-700 hover:text-[#00B74F]';
  const navLinkClass = (path: string) => `${linkBase} ${pathname === path ? linkActive : linkInactive}`;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'bg-white/95 shadow-lg' : 'bg-transparent'
        }`}
        style={{ 
          backgroundColor: headerBackground,
          boxShadow: headerShadow
        }}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-horizontal-preto.png" alt="ASC Logo" width={280} height={280} className="object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass('/')}>Início</Link>
            <Link href="/sobre" className={navLinkClass('/sobre')}>Sobre</Link>
            <Link href="/servicos" className={navLinkClass('/servicos')}>Serviços</Link>
            <Link href="/clientes" className={navLinkClass('/clientes')}>Clientes</Link>
            <Link href="/contato" className={navLinkClass('/contato')}>Contato</Link>
            <span className="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-1 text-xs font-semibold text-pink-600">
              <Ribbon className="mr-1 h-4 w-4 text-pink-500" /> Outubro Rosa
            </span>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#00B74F]" /> : <Menu className="text-[#00B74F]" />}
          </button>
        </nav>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className={navLinkClass('/')} onClick={() => setIsMenuOpen(false)}>Início</Link>
              <Link href="/sobre" className={navLinkClass('/sobre')} onClick={() => setIsMenuOpen(false)}>Sobre</Link>
              <Link href="/servicos" className={navLinkClass('/servicos')} onClick={() => setIsMenuOpen(false)}>Serviços</Link>
              <Link href="/clientes" className={navLinkClass('/clientes')} onClick={() => setIsMenuOpen(false)}>Clientes</Link>
              <Link href="/contato" className={navLinkClass('/contato')} onClick={() => setIsMenuOpen(false)}>Contato</Link>
              <span className="mt-2 inline-flex w-fit items-center rounded-full bg-pink-100 px-2.5 py-1 text-xs font-semibold text-pink-600">
                <Ribbon className="mr-1 h-3.5 w-3.5 text-pink-500" /> Outubro Rosa
              </span>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
