import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clientes',
  description: 'Conheça empresas que confiam no atendimento e nos serviços da ASC Assessoria Contábil.',
  alternates: { canonical: '/clientes' },
  openGraph: { url: '/clientes', title: 'Clientes da ASC Assessoria Contábil' },
};

export default function ClientesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
