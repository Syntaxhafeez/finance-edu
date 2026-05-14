import { NewsletterForm } from "@/components/newsletter-form";
import { Badge } from "@/components/ui/badge";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CashPivot Newsletter",
  description: "Join a weekly finance education newsletter with market explainers, updated guides, calculators, and editor picks.",
  path: "/newsletter",
  keywords: ["finance newsletter", "money newsletter", "personal finance email"]
});

export default function NewsletterPage() {
  return (
    <div className="container-page py-12">
      <div className="max-w-2xl">
        <Badge variant="trust">Weekly briefing</Badge>
        <h1 className="mt-5 text-5xl font-semibold tracking-normal">Get the money brief readers actually finish.</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          One weekly email with practical finance lessons, updated guides, calculator workflows, and market context.
        </p>
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </div>
      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          ["Monday money map", "A clear breakdown of one financial concept with examples and definitions."],
          ["Updated guides", "Recently refreshed credit card, loan, tax, investing, and retirement articles."],
          ["Tool of the week", "A calculator workflow that shows readers how to model a real decision."]
        ].map(([title, copy]) => (
          <div key={title} className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
