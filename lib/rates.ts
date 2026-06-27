export type RatesResponse = {
  base: string;
  date: string;
  rates: Record<string, number> | null;
  checkedAt: string;
  nextUpdate: string | null;
  source: string;
};

export const ratesRevalidate = 21_600;

export const ratesFallback: RatesResponse = {
  base: "USD",
  date: "Unavailable",
  rates: null,
  checkedAt: new Date().toISOString(),
  nextUpdate: null,
  source: "https://open.er-api.com"
};

export async function getUsdRates(): Promise<RatesResponse> {
  const checkedAt = new Date().toISOString();

  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate: ratesRevalidate }
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
        return {
          base: data.base_code,
          date: new Date(data.time_last_update_utc).toISOString().slice(0, 10),
          rates,
          checkedAt,
          nextUpdate: data.time_next_update_utc ? new Date(data.time_next_update_utc).toISOString() : null,
          source: "https://open.er-api.com/v6/latest/USD"
        };
      }
    }
  } catch {
    // Fall through to secondary source.
  }

  try {
    const response = await fetch("https://api.frankfurter.app/latest?from=USD&to=INR,GBP,EUR,AED,CAD,AUD,SGD", {
      next: { revalidate: ratesRevalidate }
    });
    if (!response.ok) return { ...ratesFallback, checkedAt };
    const data = (await response.json()) as { date: string; rates: Record<string, number> };
    return {
      base: "USD",
      date: data.date,
      rates: data.rates,
      checkedAt,
      nextUpdate: null,
      source: "https://api.frankfurter.app"
    };
  } catch {
    return { ...ratesFallback, checkedAt };
  }
}
