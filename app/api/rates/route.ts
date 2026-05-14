import { NextResponse } from "next/server";

const fallback = {
  base: "USD",
  date: "Unavailable",
  rates: null as null | Record<string, number>,
  source: "https://api.frankfurter.app"
};

export async function GET() {
  try {
    const response = await fetch("https://api.frankfurter.app/latest?from=USD&to=INR,GBP,EUR,AED,CAD,AUD,SGD", {
      next: { revalidate: 3600 }
    });
    if (!response.ok) return NextResponse.json(fallback);
    const data = (await response.json()) as { date: string; rates: Record<string, number> };
    return NextResponse.json({ base: "USD", date: data.date, rates: data.rates, source: fallback.source });
  } catch {
    return NextResponse.json(fallback);
  }
}
