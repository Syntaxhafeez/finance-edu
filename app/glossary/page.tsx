import { Badge } from "@/components/ui/badge";
import { expandedGlossary } from "@/lib/finance-data";
import { pageMetadata } from "@/lib/seo";

const terms = [
  ["APR", "Annual percentage rate, including interest and certain loan costs."],
  ["APY", "Annual percentage yield, reflecting compounding on deposits."],
  ["Expense Ratio", "The annual fund fee shown as a percentage of invested assets."],
  ["Diversification", "Spreading money across assets to reduce concentration risk."],
  ["Liquidity", "How quickly an asset can be converted into cash without large price impact."]
];

export const metadata = pageMetadata({
  title: "Finance Glossary and Dictionary",
  description: "Plain-English definitions of finance, banking, investing, credit, tax, and economics terms.",
  path: "/glossary",
  keywords: ["finance glossary", "finance dictionary", "investing terms", "banking terms"]
});

export default function GlossaryPage() {
  const allTerms = [...terms, ...expandedGlossary];
  const groups = [
    {
      title: "Credit and cards",
      terms: ["APR", "Credit utilization", "Grace period", "Balance transfer"]
    },
    {
      title: "Banking and saving",
      terms: ["APY", "Liquidity", "Emergency fund", "Compound interest"]
    },
    {
      title: "Investing",
      terms: ["ETF", "Mutual fund", "Index fund", "Expense ratio", "Diversification", "Dividend", "Capital gains"]
    },
    {
      title: "Loans and mortgages",
      terms: ["Debt-to-income ratio", "Loan origination fee", "Points", "Escrow", "Amortization"]
    },
    {
      title: "Economics",
      terms: ["Inflation", "Liquidity", "Capital gains"]
    }
  ];
  const lookup = new Map(allTerms.map(([term, definition]) => [term, definition]));

  return (
    <div className="container-page py-12">
      <Badge variant="trust">Finance dictionary</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Glossary</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
        Plain-English definitions, formulas, examples, and decision notes for finance terms used in cards, banking,
        investing, loans, taxes, insurance, and business finance.
      </p>

      <section className="mt-10 grid gap-5 lg:grid-cols-5">
        {groups.map((group) => (
          <article key={group.title} className="rounded-lg border bg-card p-5">
            <h2 className="text-lg font-semibold">{group.title}</h2>
            <div className="mt-4 grid gap-3">
              {group.terms.map((term) => (
                <a key={term} href={`#${term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-sm text-muted-foreground hover:text-primary">
                  {term}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-lg border bg-card p-6">
        <h2 className="text-3xl font-semibold tracking-normal">Finance formulas worth knowing</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["APR comparison", "Use APR to compare loan offers because it includes interest plus certain required fees."],
            ["APY comparison", "Use APY to compare savings accounts because it reflects compounding."],
            ["Credit utilization", "Current revolving balance divided by credit limit. Lower usage usually looks healthier."],
            ["Debt-to-income", "Monthly debt payments divided by gross monthly income. Lenders use it to judge repayment capacity."],
            ["Gross margin", "Revenue minus direct costs, divided by revenue. It shows how much room the business has before overhead."],
            ["Runway", "Cash balance divided by monthly net cash burn. It shows how many months a startup or business can operate."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg bg-secondary p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 divide-y rounded-lg border bg-card">
        {[...terms, ...expandedGlossary].map(([term, definition], index) => (
          <div key={`${term}-${index}`} id={term.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="grid gap-2 p-5 md:grid-cols-[180px_1fr]">
            <h2 className="font-semibold">{term}</h2>
            <div>
              <p className="text-sm leading-6 text-muted-foreground">{definition}</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Decision note: connect this term to a real action before using it. For example, compare cost, risk,
                liquidity, tax impact, or repayment pressure.
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12 rounded-lg border bg-secondary/35 p-6">
        <h2 className="text-2xl font-semibold">How to use this dictionary</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {["Read the definition", "Open a deeper guide", "Use a calculator"].map((step) => (
            <div key={step} className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Definitions are designed to connect to examples, product comparisons, and decision tools so readers can
                move from vocabulary to action.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-3">
        {[
          ["Common mistake", "Memorizing definitions without checking how the term affects a real decision."],
          ["Better habit", "Pair every definition with an example, a calculation, and a risk question."],
          ["Next step", "Search the term, open a related guide, then use a calculator or comparison table."]
        ].map(([title, body]) => (
          <article key={title} className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
