// app/layout.tsx

import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Combobox from "@/components/Combobox";
import Description from "@/components/Description";

export const metadata = {
  title: "Florería La Flor Más Bella",
  description: "Sitio web de florería",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
      
        <Combobox />
        
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
