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
      <h1 className="text-3xl font-extrabold text-white mb-2">
        Predicciones por Selección
      </h1>
      <p className="text-gray-500 mb-8">
        Análisis completo de {predictions.length} selecciones para el Mundial
        2026.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {predictions.map((p) => (
          <Link key={p.slug} href={`/predicciones/${p.slug}`}>
            <div className="bg-dark-800 border border-white/5 rounded-xl p-4 hover:shadow-glow hover:border-accent-emerald/30 transition-all cursor-pointer group h-full flex flex-col">
              <div className="text-3xl mb-2">{p.flag}</div>
              <h2 className="font-bold text-sm text-white group-hover:text-accent-emerald transition-colors">
                {p.team}
              </h2>
              <span className="inline-block text-[10px] bg-emerald-900/30 text-emerald-400 px-1.5 py-0.5 rounded-full mt-1 w-fit">
                Grupo {p.group}
              </span>
              <p className="text-xs text-gray-600 line-clamp-2 mt-2 flex-grow">
                {p.description}
              </p>
              <p className="mt-3 text-xs font-medium text-accent-emerald group-hover:underline">
                Ver →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
