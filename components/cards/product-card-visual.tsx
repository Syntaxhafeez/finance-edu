import { CardProduct } from "@/lib/card-products";
import { cn } from "@/lib/utils";

export function ProductCardVisual({ card, compact = false }: { card: CardProduct; compact?: boolean }) {
  return (
    <div className="finance-card-scene" aria-label={`${card.name} visual card`}>
      <div
        className={cn(
          "finance-card mx-auto w-full max-w-sm rounded-2xl bg-gradient-to-br p-5 text-white shadow-premium",
          card.color,
          compact ? "h-44" : "h-56"
        )}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">{card.issuer}</p>
            <h3 className="mt-2 max-w-[13rem] text-xl font-semibold leading-tight">{card.name}</h3>
          </div>
          <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white/80">
            {card.network}
          </span>
        </div>
        <div className="mt-8 grid grid-cols-4 gap-2">
          <span className="h-7 rounded bg-white/25" />
          <span className="h-7 rounded bg-white/15" />
          <span className="h-7 rounded bg-white/20" />
          <span className="h-7 rounded bg-white/10" />
        </div>
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="font-mono text-sm tracking-[0.22em] text-white/80">•••• 2048</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/65">{card.country}</p>
          </div>
          <p className="text-sm font-semibold">{card.type}</p>
        </div>
      </div>
    </div>
  );
}
