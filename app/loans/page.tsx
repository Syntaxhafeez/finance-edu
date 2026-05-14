import { ArticleCard } from "@/components/article-card";
import { EmiCalculator } from "@/components/calculators/emi-calculator";
import { LoanComparison } from "@/components/knowledge/loan-comparison";
import { LoanLifecycle } from "@/components/knowledge/loan-lifecycle";
import { VisualFramework } from "@/components/knowledge/visual-framework";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/lib/content";

export const metadata = {
  title: "Loans Guide: Personal Loans, Home Loans, Student Loans, Auto Loans, APR, EMI, and Fees",
  description: "Compare loan types with APR, fees, term, EMI/payment, total repayment, pros, cons, and payoff strategy."
};

export default function LoansPage() {
  return (
    <div className="container-page py-12">
      <Badge variant="trust">Loan education hub</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Loans, APR, EMI, fees, and total repayment</h1>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
        Learn how personal loans, home loans, auto loans, student loans, and business loans work. Compare by APR, fees,
        repayment term, monthly payment, prepayment rules, and total cost rather than headline rate alone.
      </p>
      <section className="mt-12">
        <VisualFramework
          title="Loan decision engine"
          blocks={["Need", "APR", "Fees", "Term", "Total cost"]}
          checklist={[
            "Compare APR instead of interest rate alone",
            "Calculate total repayment before choosing a lower monthly payment",
            "Check origination and prepayment rules",
            "Avoid debt consolidation without fixing spending behavior"
          ]}
        />
      </section>
      <section className="mt-12"><LoanComparison /></section>
      <section className="mt-12"><LoanLifecycle /></section>
      <section className="mt-12"><EmiCalculator /></section>
      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-normal">Loan guides</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {articles.filter((article) => ["loans", "mortgages"].includes(article.category)).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
