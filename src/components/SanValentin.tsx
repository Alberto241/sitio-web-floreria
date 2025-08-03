'use client';

import Image from 'next/image';

const productos = [
  {
    id: 1,
    nombre: 'Ramo de Rosas Rojas',
    precio: 399,
    imagen: '/flores/rosasrojas.jpg',
  },
  {
    id: 2,
    nombre: 'Caja de Chocolates y Flores',
    precio: 520,
    imagen: '/flores/chocolates.jpg',
  },
  {
    id: 3,
    nombre: 'Arreglo Corazón con Rosas',
    precio: 450,
    imagen: '/flores/corazon.jpg',
  },
  {
    id: 4,
    nombre: 'Peluche y Globo “Te Amo”',
    precio: 320,
    imagen: '/flores/pelucheglobo.jpg',
  },
];

export default function SanValentin() {
  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-rose-700">Especial 14 de Febrero 💘</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl border border-rose-200 transition"
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
            <p className="text-lg text-rose-600 font-bold">${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
