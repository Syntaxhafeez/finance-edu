import { BusinessFinanceVisual } from "@/components/knowledge/business-finance-visual";
import { LoanLifecycle } from "@/components/knowledge/loan-lifecycle";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Business Finance Guide: Cash Flow, Margins, Runway, Debt, and Working Capital",
  description:
    "Learn business finance visually with cash flow, gross margin, operating expenses, working capital, runway, debt service, and funding decisions."
};

export default function BusinessFinanceTopicPage() {
  return (
    <div className="container-page py-12">
      <Badge variant="trust">Business finance</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Business finance that owners can actually understand</h1>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
        Business finance is the operating system behind survival and growth: cash flow, margins, working capital, debt,
        taxes, payroll, pricing, and reinvestment. This page explains those moving parts visually.
      </p>
      <section className="mt-12"><BusinessFinanceVisual /></section>
      <section className="mt-12"><LoanLifecycle /></section>
      <section className="mt-12 grid gap-5 md:grid-cols-2">
        {[
          ["Cash flow statement", "Shows cash entering and leaving the business. Owners should review operating cash flow before celebrating revenue growth."],
          ["Gross margin", "Shows how much money remains after direct delivery costs. Low margin businesses need tighter volume and cost control."],
          ["Working capital", "Inventory plus receivables minus payables. Growth can create cash pressure when working capital expands."],
          ["Debt service coverage", "Compares cash available to loan payments. Lenders and owners use it to judge repayment capacity."],
          ["Burn rate", "Monthly net cash outflow. Startups use it to estimate runway and fundraising timing."],
          ["Unit economics", "Revenue and cost per customer, order, product, or transaction. Useful before scaling marketing spend."]
        ].map(([title, body]) => (
          <article key={title} className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
