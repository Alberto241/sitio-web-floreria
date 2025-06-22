"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-800 to-blue-600 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo o título */}
          <div className="text-white text-2xl font-bold cursor-pointer hover:text-yellow-300 transition">
            MiSitio
          </div>

          {/* Menú */}
          <div className="flex space-x-6">
            {[
              { href: "/", label: "Inicio" },
              { href: "/productos", label: "Productos" },
              { href: "/acerca", label: "Acerca de Nosotros" },
              { href: "/contacto", label: "Contáctanos" },
            ].map(({ href, label }) => (
              <Link key={href} href={href}>
                <span className="relative text-white hover:text-yellow-300 transition duration-300 cursor-pointer">
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}

            {/* Botón de acción (opcional) */}
            <Link href="/registro">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-1.5 px-4 rounded-md transition duration-300 shadow-sm">
                Regístrate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


