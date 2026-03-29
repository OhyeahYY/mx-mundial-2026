import Link from "next/link";
import { getAllPredictions } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predicciones de Todos los Equipos — Copa del Mundo 2026",
  description:
    "Análisis completo de todas las selecciones del Mundial 2026. Probabilidades, jugadores clave y pronósticos.",
};

export default async function PrediccionesPage() {
  const predictions = await getAllPredictions();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-2">
        Predicciones por Selección
      </h1>
      <p className="text-gray-600 mb-8">
        Análisis completo de {predictions.length} selecciones para el Mundial
        2026.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {predictions.map((p) => (
          <Link key={p.slug} href={`/predicciones/${p.slug}`}>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-400 transition-all cursor-pointer group h-full flex flex-col">
              <div className="text-4xl mb-3">{p.flag}</div>
              <h2 className="font-bold text-lg group-hover:text-green-700 transition-colors">
                {p.team}
              </h2>
              <div className="inline-block text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full mt-1 mb-2 w-fit">
                Grupo {p.group}
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 flex-grow">
                {p.description}
              </p>
              <div className="mt-4 text-sm font-medium text-green-700 group-hover:underline">
                Ver predicción →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
