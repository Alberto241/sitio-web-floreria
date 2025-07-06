import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flor de azúcar",
  description: "Floreria flor de azúcar",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className={`bg-black text-red-500 text-4xl min-h-screen flex items-center justify-center ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
