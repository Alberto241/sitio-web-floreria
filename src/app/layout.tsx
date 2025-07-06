import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flor de azúcar",
  description: "Floreria flor de azúcar",
};

/*export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}*/
/*export default function RootLayout({
  children
}: {
  children: ReactNode
}){
  return (
    <html lang="en">
      <body className={`bg-black text-gray-400 ${inter.className}`}>
        {children }
      </body>
    </html>
  );
}*/
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
      <body className={`bg-black text-gray-100 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
