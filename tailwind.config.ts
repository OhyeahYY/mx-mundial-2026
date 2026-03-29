import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#006847",
          red: "#CE1126",
        },
        dark: {
          900: "#060a13",
          800: "#0b1120",
          700: "#111827",
          600: "#1a2332",
          500: "#243044",
        },
        accent: {
          emerald: "#10b981",
          lime: "#84cc16",
          gold: "#f59e0b",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #060a13 0%, #0b2a1a 40%, #064e3b 100%)",
        "card-gradient":
          "linear-gradient(160deg, rgba(16,185,129,0.08) 0%, rgba(6,10,19,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(16,185,129,0.15)",
        "glow-lg": "0 0 40px rgba(16,185,129,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
