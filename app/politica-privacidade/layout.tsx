import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Entenda como a ASC Assessoria Contábil trata e protege dados pessoais conforme a LGPD.',
  alternates: { canonical: '/politica-privacidade' },
  robots: { index: true, follow: true },
};

export default function PrivacidadeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
