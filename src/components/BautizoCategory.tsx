// src/components/BautizoCategory.tsx
"use client";

import Image from "next/image";

const bautizoProducts = [
  {
    id: 1,
    name: "Arreglo Floral Celestial",
    description: "Rosas blancas y lirios con detalles en azul, ideal para bautizos.",
    price: "$480 MXN",
    image: "/imagenes/img1.jpeg",
  },
  {
    id: 2,
    name: "Centro de Mesa Angelical",
    description: "Flores suaves con follaje blanco y velas decorativas.",
    price: "$550 MXN",
    image: "/imagenes/img2.jpeg",
  },
  {
    id: 3,
    name: "Corona de Bautizo",
    description: "Corona pequeña para mesa o entrada, tonos neutros con toques dorados.",
    price: "$690 MXN",
    image: "/imagenes/img3.jpeg",
  },
];

export default function bautizo() {
  return (
    <section className="p-6 bg-gradient-to-b from-white to-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Arreglos para Bautizo</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {bautizoProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-200 transition-shadow"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <span className="text-blue-600 font-bold">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


