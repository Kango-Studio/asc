import './globals.css';
import type { Metadata, Viewport } from 'next';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Providers from '@/components/Providers';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ASC Assessoria Contábil - Desde 2014',
    template: '%s | ASC Assessoria Contábil'
  },
  description: SITE_DESCRIPTION,
  keywords: ['contabilidade', 'assessoria contábil', 'abertura de empresas', 'departamento fiscal', 'folha de pagamento', 'societário', 'certificado digital', 'assessoria jurídica'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: SITE_NAME,
    title: 'ASC Assessoria Contábil - Desde 2014',
    description: 'Contabilidade descomplicada e atendimento ágil para sua empresa.',
    images: [{ url: '/logo-horizontal-preto.png', width: 1024, height: 236, alt: 'ASC Assessoria Contábil' }]
  },
  twitter: {
    card: 'summary',
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
  manifest: '/site.webmanifest'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#00B74F',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-3 font-semibold text-gray-900 shadow-lg transition-transform focus:translate-y-0"
        >
          Ir para o conteúdo principal
        </a>
        <Providers>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </Providers>
        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'AccountingService'],
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/logo-horizontal-preto.png`,
              description: SITE_DESCRIPTION,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Avenida Padre Rizzieri Delai, 705, sala 03, Centro',
                addressLocality: 'Três Cachoeiras',
                addressRegion: 'RS',
                postalCode: '95580-000',
                addressCountry: 'BR',
              },
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
      </body>
    </html>
  );
}
