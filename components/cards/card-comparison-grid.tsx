"use client";

import { useMemo, useState } from "react";
import { CardProductCard } from "@/components/cards/card-product-card";
import { Button } from "@/components/ui/button";
import { CardProduct } from "@/lib/card-products";

const countries = ["All", "USA", "India", "UK", "Global"] as const;
const purposes = ["All", "Travel", "Cashback", "Student", "Premium", "Banking", "Shopping"] as const;

export function CardComparisonGrid({ cards, title }: { cards: CardProduct[]; title: string }) {
  const [country, setCountry] = useState<(typeof countries)[number]>("All");
  const [purpose, setPurpose] = useState<(typeof purposes)[number]>("All");

  const filtered = useMemo(
    () =>
      cards.filter((card) => {
        const countryMatch = country === "All" || card.country === country;
        const purposeMatch =
          purpose === "All" ||
          `${card.bestFor} ${card.rewardStyle} ${card.highlights.join(" ")}`.toLowerCase().includes(purpose.toLowerCase());
        return countryMatch && purposeMatch;
      }),
    [cards, country, purpose]
  );

  return (
    <section>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-normal">{title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            Filter by country and use case. Benefits, fees, and approval rules change, so every product includes a source
            link and should be verified before publishing final recommendations.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {countries.map((item) => (
            <Button key={item} variant={country === item ? "default" : "outline"} size="sm" onClick={() => setCountry(item)}>
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {purposes.map((item) => (
          <span key={item} className="shrink-0">
          <Button variant={purpose === item ? "secondary" : "ghost"} size="sm" onClick={() => setPurpose(item)}>
            {item}
          </Button>
          </span>
        ))}
      </div>
      <div className="mt-8 grid gap-5">
        {filtered.length > 0 ? (
          filtered.map((card) => <CardProductCard key={card.slug} card={card} />)
        ) : (
          <div className="rounded-lg border bg-card p-8 text-center">
            <h3 className="text-xl font-semibold">No cards match this filter yet</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Try “All” use cases or another country. Card benefits and availability change, so new products can be added
              without changing the page design.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
