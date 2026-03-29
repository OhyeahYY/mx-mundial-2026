import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tu-dominio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Predicciones Copa Mundial 2026 | Análisis y Pronósticos",
    template: "%s | Copa Mundial 2026",
  },
  description:
    "Predicciones, análisis y pronósticos para la Copa del Mundo 2026. México, Brasil, Argentina y todos los equipos favoritos.",
  keywords: [
    "copa mundial 2026",
    "predicciones mundial",
    "pronósticos fútbol",
    "mexico mundial 2026",
    "quien ganara el mundial 2026",
  ],
  verification: {
    google: "XdH--j2CsMAsWEc5zTFXGgh_697S4F6AirDMq0nc6kc",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Copa Mundial 2026 Predicciones",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
