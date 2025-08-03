'use client';

import React, { useState } from 'react';

export default function Registro() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    confirmar: '',
  });

  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setExito('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.contraseña || !form.confirmar) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (form.contraseña !== form.confirmar) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Aquí podrías enviar los datos a un backend o API
    console.log('Datos enviados:', form);
    setExito('Registro exitoso');
    setForm({ nombre: '', correo: '', contraseña: '', confirmar: '' });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-pink-600">Registro de Usuario</h1>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      {exito && <p className="text-green-600 text-sm mb-4">{exito}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-sm"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-sm"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Contraseña</label>
          <input
            type="password"
            name="contraseña"
            value={form.contraseña}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-sm"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Confirmar contraseña</label>
          <input
            type="password"
            name="confirmar"
            value={form.confirmar}
            onChange={handleChange}
            className="w-full border p-2 rounded shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
