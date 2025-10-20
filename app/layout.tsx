import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ASC Assessoria Contábil - Desde 2014',
  description: 'Atendimento ágil e desburocratizado com linguagem facilitada para entendimento da contabilidade. Ética, sigilo e ambiente ambientalista desde 2014.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
