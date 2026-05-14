"use client";

import { currencies } from "@/lib/international";

export function CurrencySelect({
  value,
  onChange
}: {
  value: string;
  onChange: (currency: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      Currency
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-md border bg-background px-3 text-sm"
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.symbol} {currency.code} - {currency.name}
          </option>
        ))}
      </select>
    </label>
  );
}
