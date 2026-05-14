import { CheckCircle2, TriangleAlert } from "lucide-react";
import { creditCardKnowledge } from "@/lib/finance-data";

export function CreditCardGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {creditCardKnowledge.map((card) => (
        <article key={card.slug} className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.bestFor}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold">Useful benefits</p>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {card.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Watchouts</p>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {card.watchouts.map((watchout) => (
                  <li key={watchout} className="flex gap-2">
                    <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    {watchout}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 rounded-lg bg-secondary p-4 text-sm font-medium">{card.visualRule}</div>
        </article>
      ))}
    </div>
  );
}
