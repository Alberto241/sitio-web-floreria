"use client";

import Image from "next/image";

const bodaProducts = [
  {
    id: 1,
    name: "Ramo Elegante de Rosas",
    description: "Rosas rojas y blancas con detalles en verde, perfecto para bodas.",
    price: "$1200 MXN",
    image: "/imagenes/img1.jpeg",
  },
  {
    id: 2,
    name: "Centro de Mesa Nupcial",
    description: "Arreglo con flores blancas y velas para una boda romántica.",
    price: "$1500 MXN",
    image: "/imagenes/img2.jpeg",
  },
  {
    id: 3,
    name: "Corona para Ceremonia",
    description: "Corona floral delicada para decorar la ceremonia.",
    price: "$800 MXN",
    image: "/imagenes/img3.jpeg",
  },
];

export default function Boda() {
  return (
    <section className="p-6 bg-gradient-to-b from-white to-gray-100">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Arreglos para Boda</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {bodaProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-pink-300 transition-shadow"
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
