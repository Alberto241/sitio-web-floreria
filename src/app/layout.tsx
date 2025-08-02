import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Header } from '@/components/widgets/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flor de azúcar',
  description: 'Florería flor de azúcar',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`bg-black text-gray-400 ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
