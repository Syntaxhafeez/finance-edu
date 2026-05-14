import { Badge } from "@/components/ui/badge";
import { CreditCardGrid } from "@/components/knowledge/credit-card-grid";
import { GlobalSeoSection } from "@/components/knowledge/global-seo-section";
import { LoanComparison } from "@/components/knowledge/loan-comparison";
import { pageMetadata } from "@/lib/seo";

const rows = [
  ["High-yield savings", "Emergency funds and short-term goals", "Low", "APY, FDIC/NCUA insurance, transfer limits, monthly fees"],
  ["Travel credit card", "Frequent travelers who pay in full", "Medium", "Point value, transfer partners, annual fee, protections"],
  ["Cashback card", "Simple everyday rewards", "Medium", "Flat rate, bonus categories, caps, annual fee"],
  ["Student card", "Building credit history", "Medium", "Fees, bureau reporting, APR, credit limit"],
  ["Personal loan", "Debt consolidation or planned expenses", "Medium", "APR, origination fee, term, total repayment"],
  ["Home loan", "Buying or refinancing a house", "High", "APR, points, down payment, closing costs, escrow"],
  ["Index ETF", "Long-term diversified investing", "Market risk", "Expense ratio, tracking, tax efficiency, holdings"]
];

export const metadata = pageMetadata({
  title: "Compare Financial Products",
  description: "Compare savings accounts, credit cards, loans, ETFs, insurance, and other financial products with practical criteria.",
  path: "/compare",
  keywords: ["compare financial products", "compare credit cards", "compare loans", "compare ETFs", "compare insurance"]
});

export default function ComparePage() {
  return (
    <div className="container-page py-12">
      <Badge variant="trust">Comparison hub</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Compare financial products</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
        Compare options by use case, total cost, risk, flexibility, and the habits required to use each product well.
      </p>
      <div className="mt-10 overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Best for</th>
              <th className="p-4">Risk</th>
              <th className="p-4">Evaluate</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell} className="p-4 text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-normal">Credit card comparisons</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
          A card is not “best” in isolation. It is best when the rewards structure, fees, approval profile, and payoff
          behavior match the reader.
        </p>
        <div className="mt-6">
          <CreditCardGrid />
        </div>
      </section>
      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-normal">Loan comparisons</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
          Compare loans with a total-cost lens. A smaller payment can be helpful, but it can also hide a longer and more
          expensive repayment path.
        </p>
        <div className="mt-6">
          <LoanComparison />
        </div>
      </section>
      <section className="mt-14">
        <GlobalSeoSection />
      </section>
    </div>
  );
}
