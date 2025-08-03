'use client';

import React, { useState } from 'react';



export default function PersonalizacionArreglos() {
  const frutas = ['Manzana', 'Banana', 'Cereza', 'Durazno', 'Mango', 'Pera'];

  // Filtrar frutas que tienen más de 5 letras
  const frutasFiltradas = frutas.filter(f => f.length > 5);

  // Ordenar alfabéticamente
  const frutasOrdenadas = [...frutasFiltradas].sort();

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Personalización de arreglos</h1>

      <p>Lista original:</p>
      <ul className="list-disc list-inside mb-4">
        {frutas.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <p>Frutas filtradas (más de 5 letras) y ordenadas:</p>
      <ul className="list-disc list-inside text-green-700">
        {frutasOrdenadas.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}