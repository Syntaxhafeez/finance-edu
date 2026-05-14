export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Disclaimer</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Content is for general education and may not fit your financial situation. Consult qualified professionals before
        making tax, legal, insurance, credit, or investment decisions.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          ["No personalized advice", "We explain concepts and frameworks, but we do not know your full financial life."],
          ["Rates change", "Credit card APRs, deposit APYs, loan rates, tax rules, and product terms can change."],
          ["Investing risk", "Investments can lose value. Past performance does not guarantee future results."],
          ["Product availability", "Approval, pricing, features, and rewards depend on issuer, lender, location, credit profile, and timing."],
          ["Country differences", "USA, India, UK, EU, and other jurisdictions use different rules, terminology, tax treatment, and consumer protections."],
          ["Local professionals", "Consult qualified local tax, legal, credit, insurance, or investment professionals before high-impact decisions."]
        ].map(([title, copy]) => (
          <section key={title} className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
