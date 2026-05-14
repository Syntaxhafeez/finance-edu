import Link from "next/link";
import { ArrowRight, Calculator, CreditCard, GraduationCap, LineChart, ShieldCheck } from "lucide-react";
import type { Article } from "@/lib/content";

const adMap: Record<
  string,
  {
    label: string;
    title: string;
    body: string;
    href: string;
    cta: string;
    icon: typeof CreditCard;
  }
> = {
  "credit-cards": {
    label: "Card comparison",
    title: "Compare credit cards by rewards, fees, eligibility, and best use case",
    body: "See travel, cashback, student, premium, India, USA, UK, and global cards with pros, cons, redemption notes, and official issuer links.",
    href: "/credit-cards",
    cta: "Compare cards",
    icon: CreditCard
  },
  loans: {
    label: "Loan tool",
    title: "Calculate EMI, total interest, processing fees, and repayment pressure",
    body: "Model personal loans, car loans, business loans, and home-loan style repayments before choosing a term or lender.",
    href: "/calculators",
    cta: "Open calculators",
    icon: Calculator
  },
  mortgages: {
    label: "Home loan planner",
    title: "Estimate affordability before comparing mortgage or home-loan offers",
    body: "Check monthly payment, down payment, interest cost, prepayment impact, and the risk of stretching your housing budget.",
    href: "/mortgages",
    cta: "Plan home loan",
    icon: Calculator
  },
  investing: {
    label: "Investing path",
    title: "Build an investing base before choosing funds, stocks, or ETFs",
    body: "Learn allocation, risk, diversification, fees, rebalancing, and long-term portfolio behavior in a guided path.",
    href: "/learn/advanced-finance-guides",
    cta: "Start investing path",
    icon: LineChart
  },
  etfs: {
    label: "ETF guide",
    title: "Compare ETFs by exposure, cost, tracking, liquidity, and tax behavior",
    body: "Use a cleaner selection framework before adding core, satellite, sector, dividend, or thematic ETFs.",
    href: "/articles/beginner-etf-portfolio",
    cta: "Read ETF guide",
    icon: LineChart
  },
  insurance: {
    label: "Protection guide",
    title: "Understand coverage gaps before buying or renewing insurance",
    body: "Review premiums, deductibles, exclusions, claim rules, waiting periods, and household risk before comparing policies.",
    href: "/insurance",
    cta: "Review coverage",
    icon: ShieldCheck
  }
};

const defaultAd = {
  label: "Learning path",
  title: "Build stronger money decisions with a guided finance curriculum",
  body: "Move from vocabulary to calculators, examples, product comparisons, and practical checklists without jumping between disconnected guides.",
  href: "/learn/beginner-guides",
  cta: "Open beginner guide",
  icon: GraduationCap
};

export function ContextualAd({ article }: { article: Article }) {
  const ad = adMap[article.category] ?? defaultAd;
  const Icon = ad.icon;

  return (
    <aside className="my-10 overflow-hidden rounded-lg border bg-card not-prose shadow-sm" aria-label="Advertisement">
      <div className="grid gap-0 md:grid-cols-[1fr_210px]">
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Advertisement
          </div>
          <div className="mt-4 flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-primary">{ad.label}</p>
              <h3 className="mt-1 text-xl font-semibold leading-tight tracking-normal">{ad.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{ad.body}</p>
              <Link href={ad.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {ad.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t bg-secondary p-5 md:border-l md:border-t-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Recommended</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Explore a related guide or tool before making your next money decision.
          </p>
        </div>
      </div>
    </aside>
  );
}
