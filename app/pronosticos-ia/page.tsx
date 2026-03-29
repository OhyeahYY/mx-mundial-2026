import type { Metadata } from "next";
import Link from "next/link";
import TelegramCTA from "@/components/TelegramCTA";
import TelegramBoost from "@/components/TelegramBoost";

export const metadata: Metadata = {
  title: "Pronosticos IA Mundial 2026 | Odds y Picks Diario",
  description:
    "Pronosticos IA de futbol para Mundial 2026: picks diarios, lectura de cuotas, valor esperado y gestion de riesgo para apostadores de Mexico y LATAM.",
};

const pillars = [
  {
    title: "Picks De Hoy",
    desc: "Predicciones diarias con enfoque en valor y contexto tactico.",
    href: "/pronosticos-ia/hoy",
    badge: "Actualizacion diaria",
  },
  {
    title: "Metodologia DSProi",
    desc: "Analisis de cuota justa, sesgo de mercado y filtro de riesgo.",
    href: "/terminos",
    badge: "Marco de decision",
  },
  {
    title: "Cobertura Mundial 2026",
    desc: "Cruce de selecciones, forma reciente y escenarios por grupo.",
    href: "/predicciones",
    badge: "48 selecciones",
  },
];

export default function PronosticosIAHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="rounded-2xl bg-hero-gradient border border-white/5 p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-emerald font-semibold">
          DSProi Intelligence
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-white">
          Pronosticos IA y Odds
          <br />
          <span className="bg-gradient-to-r from-accent-emerald to-accent-lime bg-clip-text text-transparent">para Mundial 2026</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed">
          En DSProi, cada pick se publica con contexto, cuota, riesgo y tesis.
          El objetivo no es adivinar partidos: es tomar mejores decisiones bajo
          incertidumbre.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pronosticos-ia/hoy"
            className="inline-flex items-center rounded-xl bg-accent-emerald text-dark-900 px-5 py-2.5 font-semibold hover:bg-accent-lime transition-colors"
          >
            Ver picks de hoy
          </Link>
          <Link
            href="/predicciones"
            className="inline-flex items-center rounded-xl border border-white/20 text-white px-5 py-2.5 font-semibold hover:bg-white/5 transition-colors"
          >
            Ver analisis por seleccion
          </Link>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((item) => (
          <Link key={item.title} href={item.href}>
            <article className="h-full rounded-2xl border border-white/5 bg-dark-800 p-6 hover:shadow-glow hover:border-accent-emerald/30 transition-all">
              <span className="inline-block text-[10px] bg-emerald-900/30 text-emerald-400 px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
              <h2 className="mt-3 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-gray-500 leading-relaxed">{item.desc}</p>
              <p className="mt-4 text-accent-emerald font-semibold">Entrar →</p>
            </article>
          </Link>
        ))}
      </section>

      <div className="mt-10">
        <TelegramBoost />
      </div>

      <section className="mt-12 rounded-2xl border border-white/5 bg-dark-800 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white">Como leer nuestros picks</h2>
        <ul className="mt-4 grid gap-3 text-gray-400">
          <li>1. Revisar contexto del partido y alineaciones probables.</li>
          <li>2. Comparar cuota de mercado vs cuota justa estimada por modelo.</li>
          <li>3. Ajustar stake segun nivel de riesgo (bajo/medio/alto).</li>
          <li>4. Evitar sobreexposicion: maximo 3 picks por jornada.</li>
        </ul>
      </section>

      <div className="mt-12">
        <TelegramCTA />
      </div>
    </div>
  );
}
