import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre a ASC',
  description: 'Conheça a ASC Assessoria Contábil, nossa história, valores e compromisso com um atendimento contábil claro e personalizado.',
  alternates: { canonical: '/sobre' },
  openGraph: { url: '/sobre', title: 'Sobre a ASC Assessoria Contábil' },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
