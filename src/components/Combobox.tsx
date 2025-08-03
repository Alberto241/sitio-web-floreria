'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Combobox() {
  const router = useRouter();

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = e.target.value;
    if (valor) {
      router.push(`/categorias/${valor}`);
    }
  };

  const handleFechasEspecialesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = e.target.value;
    if (valor) {
      router.push(`/fechas_especiales/${valor}`);
    }
  };

  const handlepromocionesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = e.target.value;
    if (valor) {
      router.push(`/promociones/${valor}`);
    }
  };

  return (
    <div className="w-full pt-20 px-4">
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        {/* Categorías */}
        <div className="w-full md:w-1/3">
          <label className="block mb-1 text-sm font-medium text-gray-700">Categorías</label>
          <select
            onChange={handleCategoriaChange}
            className="border p-2 rounded shadow w-full"
            defaultValue=""
          >
            <option value="" disabled>Selecciona una categoría</option>
            <option value="bautizo">Bautizo</option>
            <option value="primera-comunion">Primera comunión</option>
            <option value="cumpleaños">Cumpleaños</option>
            <option value="xvaños">XV años</option>
            <option value="boda">Boda</option>
            <option value="aniversario">Aniversario</option>
          </select>
        </div>

        {/* Fechas especiales */}
        <div className="w-full md:w-1/3">
          <label className="block mb-1 text-sm font-medium text-gray-700">Fechas Especiales</label>
          <select
            onChange={handleFechasEspecialesChange}
            className="border p-2 rounded shadow w-full"
            defaultValue=""
          >
            <option value="" disabled>Selecciona una fecha</option>
            <option value="14febrero">San Valentín</option>
            <option value="10mayo">Día de las Madres</option>
            <option value="navidad">Navidad</option>
          </select>
        </div>

        {/* Promociones */}
        <div className="w-full md:w-1/3">
          <label className="block mb-1 text-sm font-medium text-gray-700">Promociones</label>
          <select className="border p-2 rounded shadow w-full">
            <option value="">Selecciona una promoción</option>
            <option value="2x1">Arreglos 2x1</option>
            <option value="rosas">Mes de las rosas</option>
            <option value="girasoles">Mes de los girasoles</option>
            <option value="primavera">Primavera</option>
          </select>
        </div>
      </div>
    </div>
  );
}
