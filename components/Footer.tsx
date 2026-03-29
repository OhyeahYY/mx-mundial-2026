import Link from "next/link";

const cols = [
  {
    title: "Contenido",
    links: [
      { label: "Predicciones", href: "/predicciones" },
      { label: "IA Odds", href: "/pronosticos-ia" },
      { label: "Picks de Hoy", href: "/pronosticos-ia/hoy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark-900 border-t border-white/5 mt-20 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-extrabold bg-gradient-to-r from-accent-emerald to-accent-lime bg-clip-text text-transparent">
                DSProi
              </span>
            </Link>
            <p className="text-sm text-gray-600 mt-3 max-w-xs leading-relaxed">
              Predicciones IA y odds en tiempo real para el Mundial 2026.
              Análisis independiente — no somos una casa de apuestas.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">
                {c.title}
              </p>
              <ul className="space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-gray-500 hover:text-accent-emerald transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-700">
          <p>© {year} DSProi — FIFA World Cup 2026 Predicciones.</p>
          <p>
            Los pronósticos son estimaciones estadísticas y no garantizan
            resultados.
          </p>
        </div>
      </div>
    </footer>
  );
}
