import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Consulte os termos e condições de uso do site da ASC Assessoria Contábil.',
  alternates: { canonical: '/termos-uso' },
  robots: { index: true, follow: true },
};

export default function TermosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
