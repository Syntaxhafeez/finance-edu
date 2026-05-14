"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type RatesResponse = {
  base: string;
  date: string;
  rates: Record<string, number> | null;
  source: string;
};

const labels: Record<string, string> = {
  INR: "India",
  GBP: "UK",
  EUR: "Eurozone",
  AED: "UAE",
  CAD: "Canada",
  AUD: "Australia",
  SGD: "Singapore"
};

export function CurrencyRatesPanel() {
  const [data, setData] = useState<RatesResponse | null>(null);

  useEffect(() => {
    fetch("/api/rates")
      .then((response) => response.json())
      .then(setData)
      .catch(() => setData({ base: "USD", date: "Unavailable", rates: null, source: "https://api.frankfurter.app" }));
  }, []);

  const rates = data?.rates;
  const entries = useMemo(() => Object.entries(rates ?? {}), [rates]);
  const max = Math.max(...entries.map(([, value]) => value), 1);

  return (
    <section className="rounded-xl border bg-card p-5 shadow-premium">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Currency board</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal">USD exchange snapshot</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Useful for international readers comparing card fees, travel costs, loan examples, and investment amounts.
          </p>
        </div>
        <ArrowUpRight className="h-5 w-5 text-primary" />
      </div>
      <div className="mt-6 h-56">
        {entries.length ? (
          <svg viewBox="0 0 100 100" role="img" aria-label="Currency exchange rate chart" className="h-full w-full">
            {entries.map(([code, value], index) => {
              const barHeight = Math.max(8, (value / max) * 72);
              const x = 8 + index * 13;
              return (
                <g key={code}>
                  <rect x={x} y={86 - barHeight} width="8" height={barHeight} rx="2" fill="#0f766e" opacity={0.88} />
                  <text x={x + 4} y="97" textAnchor="middle" className="fill-muted-foreground text-[4px]">
                    {code}
                  </text>
                </g>
              );
            })}
          </svg>
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg bg-secondary text-sm text-muted-foreground">
            Live rates unavailable. Try again when the network is available.
          </div>
        )}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {entries.map(([code, value]) => (
          <div key={code} className="rounded-lg border bg-background p-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold">{code}</span>
              <span className="text-sm">{value.toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{labels[code]}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        Base: {data?.base ?? "USD"} · Date: {data?.date ?? "Loading"} · Source: Frankfurter public exchange-rate API.
      </p>
    </section>
  );
}
