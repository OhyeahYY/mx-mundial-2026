import type { Metadata } from "next";
import TelegramCTA from "@/components/TelegramCTA";
import TelegramBoost from "@/components/TelegramBoost";
import { getDailyOdds } from "@/lib/odds";

export const metadata: Metadata = {
  title: "Picks De Hoy | Pronosticos IA DSProi",
  description:
    "Picks de hoy para futbol internacional con enfoque en valor esperado, cuota recomendada y nivel de riesgo. Actualizacion diaria para Telegram.",
};

const riskClass: Record<"Bajo" | "Medio" | "Alto", string> = {
  Bajo: "bg-emerald-100 text-emerald-800",
  Medio: "bg-amber-100 text-amber-800",
  Alto: "bg-rose-100 text-rose-800",
};

export default async function PronosticosHoyPage() {
  const todayPicks = await getDailyOdds();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <p className="text-sm text-emerald-700 font-semibold uppercase tracking-wider">
          Actualizacion diaria
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Picks De Hoy - DSProi IA
        </h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Publicamos picks con criterio de valor esperado. Usa esta pagina como
          tablero publico y sigue Telegram para alertas en vivo y cambios por
          alineaciones de ultimo minuto.
        </p>
      </header>

      <TelegramBoost />

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {todayPicks.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.market}</p>
            <h2 className="text-xl font-bold text-gray-900 mt-1">{item.match}</h2>
            <p className="mt-3 text-lg font-semibold text-emerald-700">{item.pick}</p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="inline-flex px-2 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                Cuota {item.odds.toFixed(2)}
              </span>
              <span
                className={`inline-flex px-2 py-1 rounded-md font-medium ${riskClass[item.risk]}`}
              >
                Riesgo {item.risk}
              </span>
              <span className="inline-flex px-2 py-1 rounded-md bg-indigo-100 text-indigo-800 font-medium">
                Confianza {item.confidence}%
              </span>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">{item.note}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-xl font-bold text-gray-900">Reglas de gestion de banca</h3>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>1. Stake por pick: 1% a 2.5% del bankroll.</li>
          <li>2. No perseguir perdidas; maximo 3 picks diarios.</li>
          <li>3. Evitar mercados sin liquidez o cuotas inestables.</li>
          <li>4. Priorizar consistencia semanal sobre resultados de un dia.</li>
        </ul>
      </section>

      <div className="mt-12">
        <TelegramCTA />
      </div>
    </div>
  );
}
