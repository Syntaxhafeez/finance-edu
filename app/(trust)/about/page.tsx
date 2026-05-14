export const metadata = { title: "About LedgerWise" };

export default function AboutPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">About LedgerWise</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        LedgerWise is a finance education publisher built around clarity, source quality, and practical decision
        support. Our content system separates education from advice, records review status, and keeps update history
        visible.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          ["Mission", "Make personal finance, credit, investing, loans, taxes, and retirement easier to understand without hype or shame."],
          ["Audience", "Readers who want practical education before choosing a product, opening an account, borrowing, or investing."],
          ["Standards", "Every guide should include plain-English explanations, examples, risks, citations, and clear next steps."],
          ["Independence", "Advertising and affiliate opportunities must not override editorial usefulness or factual accuracy."]
        ].map(([title, copy]) => (
          <section key={title} className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
          </section>
        ))}
      </div>
      <section className="mt-10 rounded-lg border bg-secondary/35 p-6">
        <h2 className="text-2xl font-semibold">What we publish</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
          <li>Beginner guides for budgeting, saving, credit scores, and banking.</li>
          <li>Detailed product education for travel cards, cashback cards, student cards, loans, mortgages, and insurance.</li>
          <li>Investing explainers for ETFs, mutual funds, stocks, crypto, retirement accounts, and portfolio basics.</li>
          <li>Calculators, glossaries, comparison frameworks, and learning paths that help readers act with context.</li>
        </ul>
      </section>
    </div>
  );
}
