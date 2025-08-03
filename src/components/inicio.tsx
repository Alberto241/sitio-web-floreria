'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/img1.jpeg',
  '/img2.jpeg',
  '/img3.jpeg',
];

export default function Inicio() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 p-4">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl border-4 border-rose-300">
        <div className="relative h-80 w-full">
          <Image
            src={images[current]}
            alt={`Imagen ${current + 1}`}
            width={1000}
            height={500}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Botón Anterior */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-rose-400 text-rose-800 font-bold p-3 rounded-full shadow-md transition"
        >
          &#8592;
        </button>

        {/* Botón Siguiente */}
        <button
          onClick={next}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-rose-400 text-rose-800 font-bold p-3 rounded-full shadow-md transition"
        >
          &#8594;
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                current === index ? 'bg-rose-500' : 'bg-white'
              } shadow-md transition-all duration-300`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
