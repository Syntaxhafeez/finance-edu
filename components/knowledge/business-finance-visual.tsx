const businessBlocks = [
  ["Revenue", "Money earned from customers before costs."],
  ["Gross margin", "Revenue minus direct cost of goods or service delivery."],
  ["Operating expenses", "Rent, salaries, software, logistics, sales, marketing, and admin costs."],
  ["Cash conversion", "How quickly sales become usable cash after inventory, receivables, and payables."],
  ["Runway", "How many months the business can operate before cash runs out."]
];

export function BusinessFinanceVisual() {
  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="text-3xl font-semibold tracking-normal">Business finance visual: profit is not the same as cash</h2>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
        A business can show accounting profit and still run out of cash if customers pay late, inventory moves slowly,
        or fixed costs are too high. Read the model from top to bottom.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-5">
        {businessBlocks.map(([title, body], index) => (
          <div key={title} className="relative rounded-lg border bg-background p-5">
            <div className="absolute -top-3 left-5 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
              Layer {index + 1}
            </div>
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          ["Healthy", "Margins cover operating expenses and leave cash for tax, debt, reinvestment, and reserves."],
          ["Warning", "Sales grow but receivables, inventory, or ad spend consume cash faster than collections arrive."],
          ["Action", "Track weekly cash, monthly profit, customer acquisition cost, payback period, and debt service coverage."]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg bg-secondary p-5">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
