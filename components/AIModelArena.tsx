const models = [
  { name: "GROK", won: 30, total: 39, profit: "12,299", color: "from-orange-500 to-amber-500" },
  { name: "CLAUDE", won: 42, total: 70, profit: "9,197", color: "from-violet-500 to-purple-500" },
  { name: "GEMINI", won: 27, total: 48, profit: "3,922", color: "from-blue-500 to-cyan-500" },
  { name: "DEEPSEEK", won: 39, total: 73, profit: "1,614", color: "from-teal-500 to-emerald-500" },
  { name: "GPT", won: 28, total: 58, profit: "-2,782", color: "from-green-500 to-lime-500" },
  { name: "DSProi", won: 30, total: 61, profit: "-1,627", color: "from-emerald-400 to-lime-400" },
];

export default function AIModelArena() {
  return (
    <section className="mt-14">
      <p className="text-xs uppercase tracking-widest text-accent-emerald font-semibold">
        AI Model Arena
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2">
        Modelos IA en Competencia
      </h2>
      <p className="text-gray-500 mt-2 max-w-2xl">
        Seguimiento transparente de cada modelo. Win rate, resultados y profit
        acumulado en USDT.
      </p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {models.map((m) => {
          const wr = ((m.won / m.total) * 100).toFixed(1);
          return (
            <div
              key={m.name}
              className="rounded-2xl border border-white/5 bg-dark-800 p-4 hover:shadow-glow transition-all group"
            >
              <div
                className={`w-9 h-9 rounded-lg bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-xs font-bold`}
              >
                {m.name.slice(0, 2)}
              </div>
              <p className="mt-3 font-bold text-white text-sm group-hover:text-accent-emerald transition-colors">
                {m.name}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {m.profit.startsWith("-") ? "" : "+"}
                {m.profit} USDT
              </p>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-xl font-extrabold text-accent-emerald">
                  {wr}%
                </span>
                <span className="text-[10px] text-gray-600 mb-0.5">WIN</span>
              </div>
              <p className="text-[11px] text-gray-600 mt-1">
                {m.won}W {m.total - m.won}L / {m.total}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
