import React from 'react';

const Description = () => {
  return (
    <div className="grid place-items-start w-full bg-gradient-to-br from-pink-100 via-rose-200 to-amber-100 relative rounded-tr-3xl rounded-br-3xl p-8 shadow-lg">
      
      {/* Título decorativo arriba a la derecha */}
      <div className="bg-pink-100 font-bold">
        Fondo rojo intenso y texto blanco
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-yellow-100">
  <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
    <h2 className="text-2xl font-bold text-pink-700 mb-2">Ramo Especial</h2>
    <p className="text-gray-600">Flores frescas y aroma inolvidable.</p>
  </div>
</div>



      {/* Texto principal */}
      <div className="text-left space-y-4">
        <h1 className="text-4xl font-extrabold text-rose-800 drop-shadow-sm">
          La magia de regalar flores
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
          Explora un universo de colores, aromas y emociones. Cada flor cuenta una historia, cada ramo es una experiencia inolvidable. 🌸🌷🌼
        </p>
        <p className="text-md text-rose-700 italic">
          “Donde las flores florecen, también lo hace la esperanza.” – Lady Bird Johnson
        </p>
        <button className="mt-4 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300">
          Descubrir más
        </button>
      </div>
    </div>
  );
};

export default Description;

