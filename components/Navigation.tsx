'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CampaignBadge from './CampaignBadge';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
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
  const linkActive = 'text-brand-strong font-medium';
  const linkInactive = 'text-gray-700 hover:text-brand-strong';
  const navLinkClass = (path: string) => `${linkBase} ${pathname === path ? linkActive : linkInactive}`;
  const currentPage = (path: string) => pathname === path ? 'page' as const : undefined;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-[backdrop-filter,box-shadow] duration-300 ${
          isScrolled ? 'backdrop-blur-md shadow-lg' : ''
        }`}
        style={{ 
          backgroundColor: headerBackground,
          boxShadow: headerShadow
        }}
      >
        <nav aria-label="Navegação principal" className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="ASC Assessoria Contábil — página inicial">
            <Image src="/logo-horizontal-preto.png" alt="" width={280} height={280} className="object-contain" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass('/')} aria-current={currentPage('/')}>Início</Link>
            <Link href="/sobre" className={navLinkClass('/sobre')} aria-current={currentPage('/sobre')}>Sobre</Link>
            <Link href="/servicos" className={navLinkClass('/servicos')} aria-current={currentPage('/servicos')}>Serviços</Link>
            <Link href="/clientes" className={navLinkClass('/clientes')} aria-current={currentPage('/clientes')}>Clientes</Link>
            <Link href="/contato" className={navLinkClass('/contato')} aria-current={currentPage('/contato')}>Contato</Link>
            <CampaignBadge month="setembro" />
          </div>

          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="text-brand-strong" /> : <Menu className="text-brand-strong" />}
          </button>
        </nav>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            id="mobile-navigation"
            className="md:hidden bg-white/95 backdrop-blur-sm border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className={navLinkClass('/')} onClick={() => setIsMenuOpen(false)}>Início</Link>
              <Link href="/sobre" className={navLinkClass('/sobre')} onClick={() => setIsMenuOpen(false)}>Sobre</Link>
              <Link href="/servicos" className={navLinkClass('/servicos')} onClick={() => setIsMenuOpen(false)}>Serviços</Link>
              <Link href="/clientes" className={navLinkClass('/clientes')} onClick={() => setIsMenuOpen(false)}>Clientes</Link>
              <Link href="/contato" className={navLinkClass('/contato')} onClick={() => setIsMenuOpen(false)}>Contato</Link>
              <div className="pt-1">
                <CampaignBadge month="setembro" size="sm" />
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
