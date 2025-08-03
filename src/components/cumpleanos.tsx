'use client';

import Image from 'next/image';

const productos = [
  {
    id: 1,
    nombre: 'Ramo de Flores Coloridas',
    precio: 320,
    imagen: '/flores/cumpleanos1.jpg',
  },
  {
    id: 2,
    nombre: 'Arreglo con Globos',
    precio: 450,
    imagen: '/flores/cumpleanos2.jpg',
  },
  {
    id: 3,
    nombre: 'Centro de Mesa Festivo',
    precio: 380,
    imagen: '/flores/cumpleanos3.jpg',
  },
];

export default function Cumpleanos() {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-700">
        Arreglos para Cumpleaños
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
