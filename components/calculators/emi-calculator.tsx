"use client";

import { useMemo, useState } from "react";
import { CurrencySelect } from "@/components/currency-select";
import { currencies } from "@/lib/international";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";

export function EmiCalculator() {
  const [amount, setAmount] = useState(250000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);
  const [currency, setCurrency] = useState("USD");
  const currencyMeta = currencies.find((item) => item.code === currency) ?? currencies[0];

  const emi = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    return (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  }, [amount, rate, years]);

  return (
    <div className="rounded-lg border bg-card p-5">
      <h2 className="text-xl font-semibold">EMI / mortgage payment</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm font-medium">
          Loan amount
          <Input type="number" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Rate %
          <Input type="number" value={rate} onChange={(event) => setRate(Number(event.target.value))} />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Years
          <Input type="number" value={years} onChange={(event) => setYears(Number(event.target.value))} />
        </label>
        <CurrencySelect value={currency} onChange={setCurrency} />
      </div>
      <div className="mt-6 rounded-lg bg-secondary p-5">
        <p className="text-sm text-muted-foreground">Estimated monthly payment</p>
        <p className="mt-2 text-3xl font-semibold">
          {formatCurrency(Number.isFinite(emi) ? emi : 0, currency, currencyMeta.locale)}
        </p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Use this for global EMI or mortgage-style estimates. Local lenders may calculate fees, insurance, taxes, and
          compounding differently.
        </p>
      </div>
    </div>
  );
}
