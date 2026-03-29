export type RiskLevel = "Bajo" | "Medio" | "Alto";

export type OddsPick = {
  id: string;
  match: string;
  market: string;
  pick: string;
  odds: number;
  confidence: number;
  risk: RiskLevel;
  kickoffISO: string;
  note: string;
};

type ExternalOddsPick = Partial<OddsPick> & {
  odds?: number | string;
  confidence?: number | string;
};

const DEFAULT_PICKS: OddsPick[] = [
  {
    id: "mx-group-1x2",
    match: "Mexico vs Rival Grupo",
    market: "1X2",
    pick: "Mexico gana",
    odds: 1.95,
    confidence: 68,
    risk: "Medio",
    kickoffISO: "2026-06-14T19:00:00Z",
    note: "Ventaja local y mejor forma reciente en transicion ofensiva.",
  },
  {
    id: "br-goals-over",
    match: "Brasil vs Rival Grupo",
    market: "Total Goles",
    pick: "Mas de 2.5",
    odds: 1.78,
    confidence: 72,
    risk: "Bajo",
    kickoffISO: "2026-06-15T20:00:00Z",
    note: "Alta produccion esperada por volumen de tiros y ritmo.",
  },
  {
    id: "eu-btts",
    match: "Partido Top Europeo",
    market: "Ambos Anotan",
    pick: "Si",
    odds: 1.83,
    confidence: 64,
    risk: "Medio",
    kickoffISO: "2026-06-15T17:30:00Z",
    note: "Defensas con baja tasa de porteria a cero en ultimos 6 juegos.",
  },
];

function normalizeRisk(confidence: number): RiskLevel {
  if (confidence >= 70) return "Bajo";
  if (confidence >= 55) return "Medio";
  return "Alto";
}

function normalizeExternalPick(raw: ExternalOddsPick, index: number): OddsPick {
  const confidenceRaw = Number(raw.confidence ?? 60);
  const confidence = Number.isFinite(confidenceRaw)
    ? Math.min(99, Math.max(1, confidenceRaw))
    : 60;
  const oddsRaw = Number(raw.odds ?? 1.8);
  const odds = Number.isFinite(oddsRaw) ? oddsRaw : 1.8;

  return {
    id: raw.id ?? `external-${index}`,
    match: raw.match ?? "Partido sin nombre",
    market: raw.market ?? "Mercado",
    pick: raw.pick ?? "Sin pick",
    odds,
    confidence,
    risk: raw.risk ?? normalizeRisk(confidence),
    kickoffISO: raw.kickoffISO ?? new Date().toISOString(),
    note: raw.note ?? "Analisis automatico del modelo DSProi.",
  };
}

async function fetchExternalOdds(): Promise<OddsPick[] | null> {
  const endpoint = process.env.ODDS_API_URL;
  if (!endpoint) return null;

  try {
    const response = await fetch(endpoint, {
      headers: {
        ...(process.env.ODDS_API_KEY
          ? { Authorization: `Bearer ${process.env.ODDS_API_KEY}` }
          : {}),
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as ExternalOddsPick[] | { picks?: ExternalOddsPick[] };
    const picks = Array.isArray(payload) ? payload : payload.picks ?? [];
    if (!Array.isArray(picks) || picks.length === 0) return null;

    return picks.slice(0, 12).map(normalizeExternalPick);
  } catch {
    return null;
  }
}

export async function getDailyOdds(): Promise<OddsPick[]> {
  const external = await fetchExternalOdds();
  return external && external.length > 0 ? external : DEFAULT_PICKS;
}
