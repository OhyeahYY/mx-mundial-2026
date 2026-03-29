import type { Metadata } from "next";
import TelegramCTA from "@/components/TelegramCTA";

export const metadata: Metadata = {
  title: "Picks De Hoy | Pronosticos IA DSProi",
  description:
    "Picks de hoy para futbol internacional con enfoque en valor esperado, cuota recomendada y nivel de riesgo. Actualizacion diaria para Telegram.",
};

type Pick = {
  match: string;
  market: string;
  pick: string;
  odds: string;
  risk: "Bajo" | "Medio" | "Alto";
  note: string;
};

const todayPicks: Pick[] = [
  {
    match: "Mexico vs Rival Grupo",
    market: "1X2",
    pick: "Mexico gana",
    odds: "1.95",
    risk: "Medio",
    note: "Ventaja local y mejor forma reciente en transicion ofensiva.",
  },
  {
    match: "Brasil vs Rival Grupo",
    market: "Total Goles",
    pick: "Mas de 2.5",
    odds: "1.78",
    risk: "Bajo",
    note: "Alta produccion esperada por volumen de tiros y ritmo.",
  },
  {
    match: "Partido Top Europeo",
    market: "Ambos Anotan",
    pick: "Si",
    odds: "1.83",
    risk: "Medio",
    note: "Defensas con baja tasa de porteria a cero en ultimos 6 juegos.",
  },
];

const riskClass: Record<Pick["risk"], string> = {
  Bajo: "bg-emerald-100 text-emerald-800",
  Medio: "bg-amber-100 text-amber-800",
  Alto: "bg-rose-100 text-rose-800",
};

export default function PronosticosHoyPage() {
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

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {todayPicks.map((item) => (
          <article
            key={item.match + item.market}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-gray-500">{item.market}</p>
            <h2 className="text-xl font-bold text-gray-900 mt-1">{item.match}</h2>
            <p className="mt-3 text-lg font-semibold text-emerald-700">{item.pick}</p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="inline-flex px-2 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                Cuota {item.odds}
              </span>
              <span
                className={`inline-flex px-2 py-1 rounded-md font-medium ${riskClass[item.risk]}`}
              >
                Riesgo {item.risk}
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
