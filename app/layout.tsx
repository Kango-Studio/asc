import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asc.srv.br'),
  title: {
    default: 'ASC Assessoria Contábil - Desde 2014',
    template: '%s | ASC Assessoria Contábil'
  },
  description: 'Atendimento ágil e desburocratizado com linguagem facilitada para entendimento da contabilidade. Ética, sigilo e ambiente ambientalista desde 2014.',
  keywords: ['contabilidade', 'assessoria contábil', 'abertura de empresas', 'departamento fiscal', 'folha de pagamento', 'societário', 'certificado digital', 'assessoria jurídica'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'ASC Assessoria Contábil',
    title: 'ASC Assessoria Contábil - Desde 2014',
    description: 'Contabilidade descomplicada e atendimento ágil para sua empresa.',
    images: [{ url: '/logo-horizontal-preto.png', width: 1200, height: 630, alt: 'ASC Assessoria Contábil' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASC Assessoria Contábil - Desde 2014',
    description: 'Contabilidade descomplicada e atendimento ágil para sua empresa.',
    images: ['/logo-horizontal-preto.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#00B74F',
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ASC Assessoria Contábil',
              url: 'https://www.asc.srv.br',
              logo: 'https://www.asc.srv.br/logo-horizontal-preto.png',
              sameAs: [
                'https://instagram.com/ascassessoriacontabil'
              ],
              contactPoint: [{
                '@type': 'ContactPoint',
                telephone: '+55-51-3667-1096',
                contactType: 'customer service',
                areaServed: 'BR',
                availableLanguage: 'Portuguese'
              }]
            })
          }}
        />
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
