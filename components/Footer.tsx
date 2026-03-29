import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-white text-lg">
              ⚽ Mundial 2026 Predicciones
            </p>
            <p className="text-sm mt-1 max-w-sm">
              Análisis y pronósticos independientes. No somos una casa de
              apuestas.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <Link
              href="/predicciones"
              className="hover:text-white transition-colors"
            >
              Predicciones
            </Link>
            <Link
              href="/pronosticos-ia"
              className="hover:text-white transition-colors"
            >
              IA Odds
            </Link>
            <Link
              href="/privacidad"
              className="hover:text-white transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="hover:text-white transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 text-xs text-center space-y-1">
          <p>© {year} Copa Mundial 2026 Predicciones.</p>
          <p>
            Los pronósticos son estimaciones basadas en análisis estadístico y
            no garantizan resultados.
          </p>
        </div>
      </div>
    </footer>
  );
}
