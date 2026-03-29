import { Metadata } from "next";
import { getPredictionBySlug, getAllPredictions } from "@/lib/content";
import TelegramCTA from "@/components/TelegramCTA";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const predictions = await getAllPredictions();
  return predictions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prediction = await getPredictionBySlug(params.slug);
  if (!prediction) return {};

  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://tu-dominio.com";

  return {
    title: prediction.title,
    description: prediction.description,
    openGraph: {
      title: prediction.title,
      description: prediction.description,
      images: prediction.image ? [prediction.image] : [],
      type: "article",
    },
    alternates: {
      canonical: `${SITE_URL}/predicciones/${params.slug}`,
    },
  };
}

export default async function PredictionPage({ params }: Props) {
  const prediction = await getPredictionBySlug(params.slug);
  if (!prediction) notFound();

  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://tu-dominio.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: prediction.title,
    description: prediction.description,
    datePublished: prediction.date,
    dateModified: prediction.date,
    url: `${SITE_URL}/predicciones/${params.slug}`,
    inLanguage: "es",
    publisher: {
      "@type": "Organization",
      name: "Copa Mundial 2026 Predicciones",
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-accent-emerald">
          Inicio
        </Link>
        <span>›</span>
        <Link href="/predicciones" className="hover:text-accent-emerald">
          Predicciones
        </Link>
        <span>›</span>
        <span className="text-gray-300">{prediction.team}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="text-6xl mb-4">{prediction.flag}</div>
        <span className="inline-block text-[10px] bg-emerald-900/30 text-emerald-400 px-1.5 py-0.5 rounded-full mb-3">
          Grupo {prediction.group}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
          {prediction.title}
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          {prediction.description}
        </p>
        <div className="mt-3 text-sm text-gray-600">
          Actualizado:{" "}
          {new Date(prediction.date).toLocaleDateString("es-MX", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </header>

      {/* Top Telegram CTA */}
      <TelegramCTA />

      {/* Markdown Content */}
      <div
        className="prose mt-10"
        dangerouslySetInnerHTML={{ __html: prediction.contentHtml! }}
      />

      {/* Bottom Telegram CTA */}
      <div className="mt-10">
        <TelegramCTA />
      </div>

      {/* Back link */}
      <div className="mt-8 text-center">
        <Link
          href="/predicciones"
          className="text-accent-emerald hover:underline font-medium"
        >
          ← Ver todas las predicciones
        </Link>
      </div>
    </div>
  );
}
