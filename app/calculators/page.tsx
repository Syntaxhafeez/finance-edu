import { CompoundInterestCalculator } from "@/components/calculators/compound-interest-calculator";
import { EmiCalculator } from "@/components/calculators/emi-calculator";
import { Educational3DModel } from "@/components/knowledge/educational-3d-model";
import { GlobalSeoSection } from "@/components/knowledge/global-seo-section";
import { Badge } from "@/components/ui/badge";

const tools = [
  "SIP calculator",
  "Tax calculator",
  "Retirement planner",
  "Budgeting tool",
  "Investment return calculator",
  "Inflation calculator",
  "Currency converter",
  "Financial ratio calculators",
  "Net worth tracker",
  "Savings goal planner"
];

export const metadata = {
  title: "Financial Calculators and Money Tools",
  description: "Use free finance calculators for compound interest, EMI, mortgage payments, retirement, inflation, taxes, and savings goals."
};

export default function CalculatorsPage() {
  return (
    <div className="container-page py-12">
      <Badge variant="trust">High-intent tools</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Financial calculators</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
        Fast, explainable tools designed for readers who want to model decisions before they compare products or read
        deeper guides.
      </p>
      <div className="mt-10 grid gap-8">
        <CompoundInterestCalculator />
        <EmiCalculator />
      </div>
      <section className="mt-12">
        <Educational3DModel />
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Tool roadmap</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((tool) => (
            <div key={tool} className="rounded-lg border bg-card p-4 text-sm font-medium">
              {tool}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12 rounded-lg border bg-secondary/35 p-6">
        <h2 className="text-2xl font-semibold">How calculators support better money decisions</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            ["Model the decision", "Change one variable at a time: rate, term, contribution, inflation, or starting amount."],
            ["Compare total cost", "Monthly payment is only one view. Always check lifetime interest, fees, taxes, and opportunity cost."],
            ["Read the guide", "Calculators should connect to plain-English explanations so readers understand the result, not just the number."]
          ].map(([title, copy]) => (
            <div key={title} className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12 overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left">
            <tr>
              <th className="p-4">Calculator</th>
              <th className="p-4">Question it answers</th>
              <th className="p-4">Best supporting content</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              ["Compound interest", "How much can my money grow over time?", "Saving, investing, retirement"],
              ["EMI / mortgage", "What payment can I afford?", "Personal loans, home loans, refinancing"],
              ["Inflation", "How will purchasing power change?", "Economics, retirement, budgeting"],
              ["Tax estimator", "How much should I set aside?", "Taxes, side hustles, business finance"],
              ["Savings goal", "How much do I need to save monthly?", "Budgeting, emergency funds, travel planning"]
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell} className="p-4 leading-6 text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mt-14">
        <GlobalSeoSection />
      </section>
    </div>
  );
}
