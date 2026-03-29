import type { Metadata } from "next";
import TelegramCTA from "@/components/TelegramCTA";
import TelegramBoost from "@/components/TelegramBoost";
import MatchCard from "@/components/MatchCard";
import { getDailyOdds } from "@/lib/odds";

export const metadata: Metadata = {
  title: "Picks De Hoy | Pronosticos IA DSProi",
  description:
    "Picks de hoy para futbol internacional con enfoque en valor esperado, cuota recomendada y nivel de riesgo. Actualizacion diaria para Telegram.",
};

export default async function PronosticosHoyPage() {
  const todayPicks = await getDailyOdds();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-emerald font-semibold">
          Actualizacion diaria
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
          Picks De Hoy - DSProi IA
        </h1>
        <p className="mt-3 text-gray-400 max-w-3xl">
          Publicamos picks con criterio de valor esperado. Usa esta pagina como
          tablero publico y sigue Telegram para alertas en vivo y cambios por
          alineaciones de ultimo minuto.
        </p>
      </header>

      <TelegramBoost />

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {todayPicks.map((item) => (
          <MatchCard key={item.id} pick={item} />
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-white/5 bg-dark-800 p-6">
        <h3 className="text-xl font-bold text-white">Reglas de gestion de banca</h3>
        <ul className="mt-3 space-y-2 text-gray-400">
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
