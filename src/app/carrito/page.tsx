'use client';

import React, { useState } from 'react';

type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

const productos: Producto[] = [
  { id: 1, nombre: 'Ramo de Rosas', precio: 250 },
  { id: 2, nombre: 'Centro de mesa', precio: 180 },
  { id: 3, nombre: 'Decoración personalizada', precio: 350 },
];

export default function CarritoPage() {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  const total = carrito.reduce((suma, prod) => suma + prod.precio, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <p className="text-gray-700">${producto.precio}</p>
            <button
              onClick={() => agregarAlCarrito(producto)}
              className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-1 px-3 rounded"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-10">Carrito ({carrito.length} productos)</h2>
      {carrito.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {carrito.map((item, index) => (
            <li key={index} className="flex justify-between border-b pb-2">
              <span>{item.nombre}</span>
              <span>${item.precio}</span>
            </li>
          ))}
        </ul>
      )}
      <div>
        
        <br /> hola hay flores
        <br /> hi brous
        <br /> rosas a solo 39
        <br /> nada para nadie
        <br /> como la ven
        
      </div>

      <div className="mt-4 font-bold text-right">
        Total: ${total}
      </div>
    </div>

    
  );
}
