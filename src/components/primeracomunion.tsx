'use client';

import Image from 'next/image';

const productos = [
  {
    id: 1,
    nombre: 'Centro de Mesa Blanco',
    precio: 290,
    imagen: '/flores/comunion1.jpg',
  },
  {
    id: 2,
    nombre: 'Ramo con Lirios',
    precio: 370,
    imagen: '/flores/comunion2.jpg',
  },
  {
    id: 3,
    nombre: 'Decoración para Altar',
    precio: 480,
    imagen: '/flores/comunion3.jpg',
  },
];

export default function PrimeraComunion() {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
        Arreglos para Primera Comunión
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-pink-50 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{producto.nombre}</h2>
            <p className="text-lg text-pink-600 font-bold">${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
