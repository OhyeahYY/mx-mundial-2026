import { NextResponse } from "next/server";
import { getDailyOdds } from "@/lib/odds";

export const revalidate = 300;

export async function GET() {
  const picks = await getDailyOdds();
  return NextResponse.json(
    {
      source: process.env.ODDS_API_URL ? "external_or_fallback" : "fallback",
      updatedAt: new Date().toISOString(),
      picks,
    },
    { status: 200 }
  );
}
