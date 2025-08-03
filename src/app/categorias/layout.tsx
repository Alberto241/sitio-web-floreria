// app/categorias/layout.tsx
export default function CategoriasLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Categorías de Arreglos</h1>
      {children} {/* Aquí va el contenido específico de cada página */}
    </section>
  );
}
