"use client"; // ← Necesario porque usas useState y useEffect

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "@/utils/constans"; // asegúrate que las rutas estén bien

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  return (
    <div className="relative w-full max-w-2xl h-[400px] mx-auto overflow-hidden rounded-2xl shadow-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${length * 100}%`,
        }}
      >
        {images.map((pic, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <Image
              src={pic.src}
              alt={`Slide ${idx}`}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};



export default Slider;
