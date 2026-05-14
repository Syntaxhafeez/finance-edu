import { ExternalLink } from "lucide-react";
import { ProductCardVisual } from "@/components/cards/product-card-visual";
import { Badge } from "@/components/ui/badge";
import { CardProduct } from "@/lib/card-products";
import { cardProductJsonLd } from "@/lib/seo";

export function CardDetail({ card }: { card: CardProduct }) {
  const earnGuide = card.earnGuide ?? [];
  const redeemGuide = card.redeemGuide ?? [];
  const spendingPlaces = card.bestSpendingPlaces ?? [];

  return (
    <article className="container-page py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cardProductJsonLd(card)) }} />
      <div className="grid gap-10 lg:grid-cols-[420px_1fr] lg:items-start">
        <ProductCardVisual card={card} />
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="trust">Best for: {card.bestFor}</Badge>
            <Badge variant="secondary">{card.country}</Badge>
            <Badge variant="outline">{card.type}</Badge>
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-normal">{card.name}</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A practical breakdown of benefits, drawbacks, eligibility signals, and how to use this card
            responsibly. Always verify current terms from the issuer before applying.
          </p>
          <a
            href={card.sourceUrl}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            rel="nofollow noreferrer"
          >
            Official issuer source <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <section className="mt-14 grid gap-5 lg:grid-cols-4">
        {[
          ["Issuer", card.issuer],
          ["Network", card.network],
          ["Annual fee", card.annualFee],
          ["Credit profile", card.creditProfile]
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border bg-card p-5">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-2 font-semibold">{value}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-3">
        <InfoList title="Key benefits" items={card.highlights} tone="good" />
        <InfoList title="Pros" items={card.pros} tone="good" />
        <InfoList title="Cons" items={card.cons} tone="warn" />
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <InfoList title="Good-fit criteria" items={card.criteria} tone="good" />
        <InfoList title="How to use this card well" items={card.howToUse} tone="good" />
      </section>

      {card.type === "Credit" ? (
        <>
          <section className="mt-14 rounded-lg border bg-card p-6">
            <h2 className="text-3xl font-semibold tracking-normal">How to earn points or cashback correctly</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
              The card is useful only when the reward category matches real spending and the bill is paid in full.
              Use this as a working checklist before moving regular expenses to the card.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {earnGuide.map((item, index) => (
                <div key={item} className="rounded-lg bg-secondary p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Step {index + 1}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-lg border bg-card p-6">
            <h2 className="text-3xl font-semibold tracking-normal">Where to use this card</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {spendingPlaces.map((place) => (
                <div key={place} className="rounded-lg border bg-background p-4 text-sm font-medium">
                  {place}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-lg border bg-card p-6">
            <h2 className="text-3xl font-semibold tracking-normal">How and where to redeem rewards</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {redeemGuide.map((item, index) => (
                <div key={item} className="rounded-lg bg-secondary p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Redemption rule {index + 1}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-lg border bg-card p-6">
            <h2 className="text-3xl font-semibold tracking-normal">Monthly operating system for this card</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                ["Day 1", "Set autopay for statement balance, turn on spend alerts, and note annual fee or renewal month."],
                ["Weekly", "Check pending transactions, category tracking, and whether any spend is falling into excluded categories."],
                ["Statement day", "Confirm rewards posted correctly and utilization is not unusually high."],
                ["Quarterly", "Review whether the card still earns enough value after fees, caps, and changed habits."]
              ].map(([label, copy]) => (
                <div key={label} className="rounded-lg bg-secondary p-5">
                  <h3 className="font-semibold">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : null}

      <section className="mt-14 rounded-lg border bg-secondary/35 p-6">
        <h2 className="text-2xl font-semibold">Avoid this card if</h2>
        <p className="mt-3 text-base leading-7 text-muted-foreground">{card.avoidIf}</p>
      </section>

      <section className="mt-14 overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left">
            <tr>
              <th className="p-4">Decision question</th>
              <th className="p-4">How to think about it</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              ["Can I pay in full?", "If not, rewards rarely compensate for interest or fees."],
              ["Will I use the main benefits?", "Ignore advertised perks that do not match your real spending or travel."],
              ["Is the fee justified?", "Compare annual value from benefits against the fee and any behavior changes required."],
              ["What is my fallback card?", "Pair specialized cards with a simple flat-rate or low-fee option."],
              ["What changed recently?", "Issuer terms can change; verify rewards, caps, fees, and eligibility before applying."]
            ].map((row) => (
              <tr key={row[0]}>
                <td className="p-4 font-semibold">{row[0]}</td>
                <td className="p-4 leading-6 text-muted-foreground">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  );
}

function InfoList({ title, items, tone }: { title: string; items: string[]; tone: "good" | "warn" }) {
  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="rounded-lg bg-secondary p-3">
            <span className={tone === "good" ? "text-primary" : "text-amber-600"}>{tone === "good" ? "Good: " : "Watch: "}</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
