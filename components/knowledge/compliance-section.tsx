import { complianceFramework } from "@/lib/international";

export function ComplianceSection() {
  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="text-3xl font-semibold tracking-normal">Privacy rights and regional reader protections</h2>
      <p className="mt-4 max-w-4xl text-base leading-7 text-muted-foreground">
        Finance rules and privacy rights vary by country. Use this overview to understand the kinds of protections,
        consent choices, and clear-risk explanations readers may need before making financial decisions.
      </p>
      <div className="mt-8 grid gap-4">
        {complianceFramework.map((item) => (
          <article key={item.region} className="grid gap-4 rounded-lg border bg-background p-5 lg:grid-cols-[180px_1fr_1fr]">
            <h3 className="font-semibold">{item.region}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{item.rules}</p>
            <p className="text-sm leading-6 text-muted-foreground">{item.siteNeeds}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
