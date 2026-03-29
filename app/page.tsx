import Link from "next/link";
import { getAllPredictions } from "@/lib/content";
import TelegramCTA from "@/components/TelegramCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predicciones Copa del Mundo 2026 | Pronósticos y Análisis",
  description:
    "Predicciones completas de todos los equipos del Mundial 2026. México juega en casa — descubre quién tiene más probabilidades de ganar.",
};

const faqs = [
  {
    q: "¿Cuándo empieza el Mundial 2026?",
    a: "La Copa del Mundo 2026 inicia el 11 de junio de 2026, con sede en Estados Unidos, México y Canadá. La final se celebrará el 19 de julio de 2026.",
  },
  {
    q: "¿Cuántos equipos participan en el Mundial 2026?",
    a: "Por primera vez en la historia, el Mundial 2026 contará con 48 selecciones, divididas en 12 grupos de 4 equipos.",
  },
  {
    q: "¿Dónde juega México en el Mundial 2026?",
    a: "México juega como anfitrión en el Estadio Azteca (CDMX), el Estadio BBVA (Monterrey) y el AT&T Stadium (Arlington, Texas).",
  },
  {
    q: "¿Quién es el favorito para ganar el Mundial 2026?",
    a: "Francia, Brasil y España son los grandes favoritos según los modelos estadísticos. México, como anfitrión, tiene posibilidades reales de llegar a cuartos de final.",
  },
  {
    q: "¿Puede México ganar el Mundial 2026?",
    a: "Las probabilidades son bajas, pero jugar en casa hace de este el torneo con mejor oportunidad histórica para el Tri. Con Santi Giménez en forma, todo es posible.",
  },
];

export default async function HomePage() {
  const predictions = await getAllPredictions();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center py-12 mb-8">
        <div className="text-6xl mb-4">⚽</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Copa del Mundo 2026
          <br />
          <span className="text-green-700">Predicciones y Pronósticos</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Análisis completo de todos los equipos. México juega en casa — descubre
          quién tiene más probabilidades de llegar a la final.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
          <span>🇲🇽 México anfitrión</span>
          <span>·</span>
          <span>📅 11 Jun – 19 Jul 2026</span>
          <span>·</span>
          <span>🏟️ 48 selecciones</span>
        </div>
      </section>

      {/* Telegram CTA */}
      <TelegramCTA />

      {/* Predictions Grid */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-2">Predicciones por Selección</h2>
        <p className="text-gray-600 mb-6">
          Análisis táctico, jugadores clave y probabilidades de cada equipo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {predictions.map((p) => (
            <Link key={p.slug} href={`/predicciones/${p.slug}`}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-400 transition-all cursor-pointer group h-full flex flex-col">
                <div className="text-4xl mb-3">{p.flag}</div>
                <h3 className="font-bold text-lg group-hover:text-green-700 transition-colors">
                  {p.team}
                </h3>
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
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-2">
          Preguntas Frecuentes — Mundial 2026
        </h2>
        <p className="text-gray-600 mb-6">
          Todo lo que necesitas saber sobre el torneo.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom Telegram CTA */}
      <div className="mt-12">
        <TelegramCTA />
      </div>
    </div>
  );
}
