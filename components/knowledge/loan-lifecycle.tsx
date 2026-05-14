const loanStages = [
  {
    title: "Need",
    body: "Define the exact purpose: debt consolidation, home purchase, business equipment, education, emergency expense, or vehicle purchase."
  },
  {
    title: "Eligibility",
    body: "Check income stability, credit profile, debt-to-income ratio, collateral, business cash flow, and required documents before applying."
  },
  {
    title: "Offer",
    body: "Compare APR, processing/origination fees, insurance add-ons, foreclosure charges, prepayment rules, and total repayment."
  },
  {
    title: "Use",
    body: "Use funds only for the planned purpose. For business loans, map every rupee or dollar to inventory, equipment, payroll, or working capital."
  },
  {
    title: "Repay",
    body: "Automate payments, keep an emergency buffer, track interest saved by prepayment, and refinance only when total cost improves."
  }
];

export function LoanLifecycle() {
  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="text-3xl font-semibold tracking-normal">Loan lifecycle: from need to clean payoff</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {loanStages.map((stage, index) => (
          <article key={stage.title} className="rounded-lg border bg-background p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
              {index + 1}
            </span>
            <h3 className="mt-4 font-semibold">{stage.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{stage.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
