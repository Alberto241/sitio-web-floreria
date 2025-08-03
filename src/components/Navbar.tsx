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
            LA flor mas bella
          </div>

          {/* Menú */}
          <div className="flex space-x-10 items-center">
            {[
              { href: "/", label: "Inicio" },
              { href: "/Catalogoproductos", label: "Catalogo de productos" },
              { href: "/personalizacion", label: "personalizacion" },
              { href: "/login", label: "login" },
              { href: "/carrito", label: "carrito" },
            ].map(({ href, label }) => (
              <Link key={href} href={href}>
                <span className="relative text-white hover:text-yellow-300 transition duration-300 cursor-pointer">
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}

            {/* Botón de registro */}
            <Link href="/registro">
  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300">
    Registrarse
  </button>
</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



