import Link from "next/link";
import { ArrowRight, CheckCircle2, TriangleAlert } from "lucide-react";
import { ProductCardVisual } from "@/components/cards/product-card-visual";
import { Badge } from "@/components/ui/badge";
import { CardProduct } from "@/lib/card-products";

export function CardProductCard({ card }: { card: CardProduct }) {
  const href = card.type === "Credit" ? `/credit-cards/${card.slug}` : `/debit-cards/${card.slug}`;

  return (
    <article className="grid min-w-0 gap-6 rounded-lg border bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-premium sm:p-5 xl:grid-cols-[320px_1fr]">
      <ProductCardVisual card={card} compact />
      <div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="trust">{card.bestFor}</Badge>
          <Badge variant="secondary">{card.country}</Badge>
          <Badge variant="outline">{card.annualFee}</Badge>
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-normal">{card.name}</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.rewardStyle}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold">Best benefits</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {card.highlights.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Watch before applying</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {card.cons.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-2">
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Full card guide <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
