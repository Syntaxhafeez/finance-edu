import { ArticleCard } from "@/components/article-card";
import { EmiCalculator } from "@/components/calculators/emi-calculator";
import { VisualFramework } from "@/components/knowledge/visual-framework";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/lib/content";
import { mortgageKnowledge } from "@/lib/finance-data";

export const metadata = {
  title: "Mortgage Guide: Home Loans, Rates, APR, Down Payment, Closing Costs, and EMI",
  description: "Understand home loans, mortgage affordability, fixed vs adjustable rates, APR, down payments, closing costs, and refinancing."
};

export default function MortgagesPage() {
  return (
    <div className="container-page py-12">
      <Badge variant="trust">Mortgage education hub</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Home loans and mortgage affordability</h1>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
        Compare mortgage types visually and calculate the payment impact of price, rate, term, down payment, fees, taxes,
        and insurance. The right mortgage is not just the lowest rate; it is the payment and risk structure you can live with.
      </p>
      <section className="mt-12">
        <VisualFramework
          title="Mortgage decision engine"
          blocks={["Home price", "Down payment", "Rate/APR", "Closing costs", "Cash reserve"]}
          checklist={[
            "Keep emergency savings after closing",
            "Compare loan estimates line by line",
            "Understand points and breakeven period",
            "Stress-test payment if income changes"
          ]}
        />
      </section>
      <section className="mt-12 grid gap-5 md:grid-cols-2">
        {mortgageKnowledge.map((item) => (
          <article key={item.title} className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.plainEnglish}</p>
            <p className="mt-4 rounded-lg bg-secondary p-3 text-sm font-medium">Best for: {item.bestFor}</p>
          </article>
        ))}
      </section>
      <section className="mt-12"><EmiCalculator /></section>
      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-normal">Mortgage guides</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {articles.filter((article) => article.category === "mortgages").map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
