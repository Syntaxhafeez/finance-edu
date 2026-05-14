"use client";

import { useMemo, useState } from "react";
import { CurrencySelect } from "@/components/currency-select";
import { currencies } from "@/lib/international";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(5000);
  const [monthly, setMonthly] = useState(250);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(30);
  const [currency, setCurrency] = useState("USD");
  const currencyMeta = currencies.find((item) => item.code === currency) ?? currencies[0];

  const result = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    let balance = principal;
    const points = [{ year: 0, balance }];
    for (let month = 1; month <= years * 12; month++) {
      balance = balance * (1 + monthlyRate) + monthly;
      if (month % 12 === 0) points.push({ year: month / 12, balance: Math.round(balance) });
    }
    return { balance, points };
  }, [principal, monthly, rate, years]);
  const max = Math.max(...result.points.map((point) => point.balance));
  const chartPoints = result.points
    .map((point, index) => {
      const x = 8 + (index / Math.max(result.points.length - 1, 1)) * 84;
      const y = 88 - (point.balance / Math.max(max, 1)) * 72;
      return `${x},${y}`;
    })
    .join(" ");
  const area = `8,92 ${chartPoints} 92,92`;

  return (
    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <div className="rounded-lg border bg-card p-5">
        <h2 className="text-xl font-semibold">Compound interest calculator</h2>
        <div className="mt-5 grid gap-4">
          <label className="grid gap-2 text-sm font-medium">
            Initial investment
            <Input type="number" value={principal} onChange={(event) => setPrincipal(Number(event.target.value))} />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Monthly contribution
            <Input type="number" value={monthly} onChange={(event) => setMonthly(Number(event.target.value))} />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Annual return %
            <Input type="number" value={rate} onChange={(event) => setRate(Number(event.target.value))} />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Years
            <Input type="number" value={years} onChange={(event) => setYears(Number(event.target.value))} />
          </label>
          <CurrencySelect value={currency} onChange={setCurrency} />
        </div>
      </div>
      <div className="rounded-lg border bg-card p-5">
        <p className="text-sm text-muted-foreground">Estimated ending balance</p>
        <p className="mt-2 text-4xl font-semibold">{formatCurrency(result.balance, currency, currencyMeta.locale)}</p>
        <div className="mt-6 h-72">
          <svg viewBox="0 0 100 100" role="img" aria-label="Compound interest growth chart" className="h-full w-full">
            <path d={`M ${area} Z`} fill="#0f766e22" />
            <polyline points={chartPoints} fill="none" stroke="#0f766e" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="8" x2="92" y1="92" y2="92" stroke="currentColor" strokeOpacity="0.12" />
          </svg>
        </div>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Currency changes the display format only. Use local tax, inflation, product fees, and expected return
          assumptions for your country.
        </p>
      </div>
    </div>
  );
}
