"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";

export function MarketSnapshot() {
  const [monthly, setMonthly] = useState(500);
  const [returnRate, setReturnRate] = useState(7);
  const [inflation, setInflation] = useState(3);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    let nominal = 0;
    const monthlyRate = returnRate / 100 / 12;
    const points = [];
    for (let month = 1; month <= years * 12; month++) {
      nominal = nominal * (1 + monthlyRate) + monthly;
      if (month % 12 === 0) {
        const year = month / 12;
        const real = nominal / Math.pow(1 + inflation / 100, year);
        points.push({ year, nominal, real });
      }
    }
    return { nominal, real: nominal / Math.pow(1 + inflation / 100, years), points };
  }, [monthly, returnRate, inflation, years]);

  const max = Math.max(...result.points.map((point) => point.nominal), 1);
  const nominalPoints = result.points
    .map((point, index) => `${8 + (index / Math.max(result.points.length - 1, 1)) * 84},${88 - (point.nominal / max) * 70}`)
    .join(" ");
  const realPoints = result.points
    .map((point, index) => `${8 + (index / Math.max(result.points.length - 1, 1)) * 84},${88 - (point.real / max) * 70}`)
    .join(" ");

  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Interactive money model</p>
          <h3 className="mt-1 text-2xl font-semibold">Nominal growth vs inflation-adjusted value</h3>
        </div>
        <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          Live inputs
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-xs font-semibold">
          Monthly investment
          <Input type="number" value={monthly} onChange={(event) => setMonthly(Number(event.target.value))} />
        </label>
        <label className="grid gap-1 text-xs font-semibold">
          Expected return %
          <Input type="number" value={returnRate} onChange={(event) => setReturnRate(Number(event.target.value))} />
        </label>
        <label className="grid gap-1 text-xs font-semibold">
          Inflation %
          <Input type="number" value={inflation} onChange={(event) => setInflation(Number(event.target.value))} />
        </label>
        <label className="grid gap-1 text-xs font-semibold">
          Years
          <Input type="number" value={years} onChange={(event) => setYears(Number(event.target.value))} />
        </label>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-secondary p-4">
          <p className="text-xs text-muted-foreground">Nominal ending value</p>
          <p className="mt-1 text-2xl font-semibold">{formatCurrency(result.nominal)}</p>
        </div>
        <div className="rounded-lg bg-secondary p-4">
          <p className="text-xs text-muted-foreground">Inflation-adjusted value</p>
          <p className="mt-1 text-2xl font-semibold">{formatCurrency(result.real)}</p>
        </div>
      </div>
      <div className="mt-6 h-56">
        <svg viewBox="0 0 100 100" role="img" aria-label="Illustrative market trend chart" className="h-full w-full">
          <line x1="8" x2="92" y1="88" y2="88" stroke="currentColor" strokeOpacity="0.12" />
          <polyline points={nominalPoints} fill="none" stroke="#0f766e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points={realPoints} fill="none" stroke="#2563eb" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3" />
          <text x="8" y="97" className="fill-muted-foreground text-[4px]">Today</text>
          <text x="78" y="97" className="fill-muted-foreground text-[4px]">{years} years</text>
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <span><span className="text-primary">━</span> Nominal</span>
        <span><span className="text-blue-600">━ ━</span> Inflation-adjusted</span>
      </div>
    </div>
  );
}
