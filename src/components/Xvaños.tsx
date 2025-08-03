// src/components/XvCategory.tsx
"use client";

import Image from "next/image";

const xvProducts = [
  {
    id: 1,
    name: "Bouquet de Quinceañera",
    description: "Rosas rosadas con detalles en blanco y follaje fino.",
    price: "$620 MXN",
    image: "/images/xv1.jpg",
  },
  {
    id: 2,
    name: "Centro de Mesa Glam",
    description: "Arreglo alto con flores en tonos pastel y bases decorativas.",
    price: "$750 MXN",
    image: "/images/xv2.jpg",
  },
  {
    id: 3,
    name: "Arco Floral para Entrada",
    description: "Ideal para fotos y recepción, con flores en rosa, blanco y lila.",
    price: "$1,200 MXN",
    image: "/images/xv3.jpg",
  },
];

export default function XVaños() {
  return (
    <section className="p-6 bg-gradient-to-b from-pink-50 to-white">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Arreglos para XV Años</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {xvProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-pink-300 transition-shadow"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-pink-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <span className="text-pink-600 font-bold">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

