import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com a ASC Assessoria Contábil pelo WhatsApp, telefone ou formulário e conte como podemos ajudar sua empresa.',
  alternates: { canonical: '/contato' },
  openGraph: { url: '/contato', title: 'Contato | ASC Assessoria Contábil' },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
