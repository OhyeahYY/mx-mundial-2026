import Link from "next/link";
import { getAllPredictions } from "@/lib/content";
import { getDailyOdds } from "@/lib/odds";
import TelegramCTA from "@/components/TelegramCTA";
import TelegramBoost from "@/components/TelegramBoost";
import AIModelArena from "@/components/AIModelArena";
import MatchCard from "@/components/MatchCard";
import Countdown from "@/components/Countdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predicciones Copa del Mundo 2026 | Pronósticos IA y Odds",
  description:
    "Predicciones IA de todos los equipos del Mundial 2026. Picks diarios, modelos AI en competencia y odds en tiempo real para Mexico y LATAM.",
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
  const picks = await getDailyOdds();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="relative rounded-3xl bg-hero-gradient border border-white/5 overflow-hidden px-6 md:px-10 py-12 md:py-16 mb-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-emerald font-semibold">
            Reliable Picks · Transparent Data · Traceable
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white leading-[1.1]">
            FIFA World Cup 2026
            <br />
            <span className="bg-gradient-to-r from-accent-emerald to-accent-lime bg-clip-text text-transparent">
              Predicciones y Pronósticos
            </span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed text-lg">
            Análisis IA de 48 selecciones. Picks diarios, modelos en competencia
            y odds en tiempo real para aficionados de México y LATAM.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>🇲🇽 México anfitrión</span>
            <span className="text-white/10">·</span>
            <span>📅 11 Jun – 19 Jul 2026</span>
            <span className="text-white/10">·</span>
            <span>🏟️ 48 selecciones</span>
          </div>
          <Countdown />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/predicciones"
              className="inline-flex items-center rounded-xl bg-accent-emerald text-dark-900 px-6 py-3 font-semibold hover:bg-accent-lime transition-colors"
            >
              Ver Predicciones
            </Link>
            <Link
              href="/pronosticos-ia"
              className="inline-flex items-center rounded-xl border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/5 transition-colors"
            >
              IA Odds →
            </Link>
          </div>
        </div>
      </section>

      {/* Telegram CTA */}
      <TelegramCTA />

      {/* AI Model Arena */}
      <AIModelArena />

      {/* Today Picks */}
      <section className="mt-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent-emerald font-semibold">
              Picks de Hoy
            </p>
            <h2 className="text-2xl font-extrabold text-white mt-1">
              Predicciones del Día
            </h2>
          </div>
          <Link
            href="/pronosticos-ia/hoy"
            className="text-sm text-accent-emerald hover:underline font-semibold"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {picks.slice(0, 3).map((pick) => (
            <MatchCard key={pick.id} pick={pick} />
          ))}
        </div>
      </section>

      {/* Telegram Boost */}
      <div className="mt-10">
        <TelegramBoost />
      </div>

      {/* Predictions Grid */}
      <section className="mt-14">
        <h2 className="text-2xl font-extrabold text-white mb-2">
          Predicciones por Selección
        </h2>
        <p className="text-gray-500 mb-6">
          Análisis táctico, jugadores clave y probabilidades de cada equipo.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {predictions.map((p) => (
            <Link key={p.slug} href={`/predicciones/${p.slug}`}>
              <div className="bg-dark-800 border border-white/5 rounded-xl p-4 hover:shadow-glow hover:border-accent-emerald/30 transition-all cursor-pointer group h-full flex flex-col">
                <div className="text-3xl mb-2">{p.flag}</div>
                <h3 className="font-bold text-sm text-white group-hover:text-accent-emerald transition-colors">
                  {p.team}
                </h3>
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
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold text-white mb-2">
          Preguntas Frecuentes — Mundial 2026
        </h2>
        <p className="text-gray-500 mb-6">
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
