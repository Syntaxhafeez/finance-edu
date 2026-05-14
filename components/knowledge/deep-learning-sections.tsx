import { categoryDeepSections } from "@/lib/finance-data";

export function DeepLearningSections({ topic }: { topic: string }) {
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-semibold tracking-normal">{topic} knowledge framework</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
        Use these principles to move from surface-level reading to practical financial understanding. Each section is
        written to help readers compare options, avoid common traps, and connect ideas to real decisions.
      </p>
      <div className="mt-8 grid gap-5">
        {categoryDeepSections.map((section) => (
          <article key={section.title} className="rounded-lg border bg-card p-6">
            <h3 className="text-2xl font-semibold">{section.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
