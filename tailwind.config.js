/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",      // ← ✅ incluye tus páginas y layouts
    "./src/components/**/*.{js,ts,jsx,tsx}" // ← si tienes componentes ahí
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: []
};

