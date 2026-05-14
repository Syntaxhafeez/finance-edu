import { NextResponse } from "next/server";

export const revalidate = 21_600;

const fallback = {
  base: "USD",
  date: "Unavailable",
  rates: null as null | Record<string, number>,
  checkedAt: new Date().toISOString(),
  nextUpdate: null as string | null,
  source: "https://open.er-api.com"
};

export async function GET() {
  const checkedAt = new Date().toISOString();

  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate }
    });
    if (response.ok) {
      const data = (await response.json()) as {
        result: string;
        base_code: string;
        time_last_update_utc: string;
        time_next_update_utc?: string;
        rates: Record<string, number>;
      };
      if (data.result === "success" && data.rates) {
        const wanted = ["INR", "GBP", "EUR", "AED", "CAD", "AUD", "SGD"];
        const rates = Object.fromEntries(wanted.map((code) => [code, data.rates[code]]).filter(([, value]) => typeof value === "number"));
        return NextResponse.json(
          {
            base: data.base_code,
            date: new Date(data.time_last_update_utc).toISOString().slice(0, 10),
            rates,
            checkedAt,
            nextUpdate: data.time_next_update_utc ? new Date(data.time_next_update_utc).toISOString() : null,
            source: "https://open.er-api.com/v6/latest/USD"
          },
          {
            headers: {
              "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400"
            }
          }
        );
      }
    }
  } catch {
    // Fall through to secondary source.
  }

  try {
    const response = await fetch("https://api.frankfurter.app/latest?from=USD&to=INR,GBP,EUR,AED,CAD,AUD,SGD", {
      next: { revalidate }
    });
    if (!response.ok) return NextResponse.json({ ...fallback, checkedAt });
    const data = (await response.json()) as { date: string; rates: Record<string, number> };
    return NextResponse.json(
      {
        base: "USD",
        date: data.date,
        rates: data.rates,
        checkedAt,
        nextUpdate: null,
        source: "https://api.frankfurter.app"
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400"
        }
      }
    );
  } catch {
    return NextResponse.json({ ...fallback, checkedAt });
  }
}
