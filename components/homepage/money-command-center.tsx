import Link from "next/link";
import { ArrowRight, Building2, CreditCard, Landmark, LineChart, ShieldCheck, WalletCards } from "lucide-react";

const tracks = [
  {
    title: "Choose the right credit card",
    href: "/credit-cards",
    icon: CreditCard,
    body: "Compare Indian private-bank cards, travel cards, cashback cards, student cards, premium cards, fees, point value, and redemption rules."
  },
  {
    title: "Borrow without getting trapped",
    href: "/loans",
    icon: WalletCards,
    body: "Understand personal loans, home loans, car loans, business loans, APR, EMI, processing fees, prepayment, and total repayment."
  },
  {
    title: "Build an investing base",
    href: "/investing",
    icon: LineChart,
    body: "Learn ETFs, mutual funds, SIPs, stocks, risk, diversification, fees, rebalancing, and long-term portfolio habits."
  },
  {
    title: "Protect the household",
    href: "/insurance",
    icon: ShieldCheck,
    body: "Understand term insurance, health insurance, deductibles, claims, exclusions, coverage gaps, and renewal decisions."
  },
  {
    title: "Run business money better",
    href: "/topics/business-finance",
    icon: Building2,
    body: "See cash flow, runway, margins, debt service, working capital, unit economics, and funding decisions visually."
  },
  {
    title: "Master banking basics",
    href: "/banking",
    icon: Landmark,
    body: "Compare savings accounts, fixed deposits, checking/current accounts, debit cards, fees, transfers, safety, and liquidity."
  }
];

export function MoneyCommandCenter() {
  return (
    <section className="rounded-lg border bg-card p-5 shadow-sm sm:p-6 lg:p-8">
      <div className="grid gap-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Start here</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            Pick the money decision you need to make
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            The fastest way to learn finance is by decision path: card, loan, investment, insurance, business cash, or
            banking. Each path connects definitions, examples, risks, and product-style guides.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <Link
                key={track.href}
                href={track.href}
                className="group flex min-h-64 flex-col rounded-lg border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-premium sm:min-h-72"
              >
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-xl font-semibold leading-tight">{track.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{track.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
                  Open guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
