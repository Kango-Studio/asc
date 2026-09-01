import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços Contábeis',
  description: 'Serviços de contabilidade, fiscal, departamento pessoal, societário, assessoria jurídica e certificado digital para empresas.',
  alternates: { canonical: '/servicos' },
  openGraph: { url: '/servicos', title: 'Serviços Contábeis da ASC' },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
