import { OddsPick } from "@/lib/odds";

const riskClass: Record<string, string> = {
  Bajo: "bg-emerald-900/40 text-emerald-400 border-emerald-800",
  Medio: "bg-amber-900/40 text-amber-400 border-amber-800",
  Alto: "bg-rose-900/40 text-rose-400 border-rose-800",
};

export default function MatchCard({ pick }: { pick: OddsPick }) {
  return (
    <article className="rounded-2xl border border-white/5 bg-dark-800 p-5 hover:shadow-glow transition-all group">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-gray-600 uppercase tracking-wider">
          {pick.market}
        </span>
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full border ${riskClass[pick.risk] || riskClass.Medio}`}
        >
          {pick.risk}
        </span>
      </div>
      <h3 className="mt-2 text-lg font-bold text-white group-hover:text-accent-emerald transition-colors">
        {pick.match}
      </h3>
      <p className="mt-2 text-accent-emerald font-semibold">{pick.pick}</p>
      <div className="mt-3 flex items-center gap-2 text-xs">
        <span className="bg-white/5 border border-white/10 rounded-md px-2 py-1 text-gray-300">
          Cuota {pick.odds.toFixed(2)}
        </span>
        <span className="bg-emerald-900/30 border border-emerald-800/50 rounded-md px-2 py-1 text-emerald-400">
          {pick.confidence}% confianza
        </span>
      </div>
      <p className="mt-3 text-sm text-gray-500 leading-relaxed">{pick.note}</p>
    </article>
  );
}
