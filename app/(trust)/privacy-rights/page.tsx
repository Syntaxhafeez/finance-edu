import { ComplianceSection } from "@/components/knowledge/compliance-section";

export const metadata = { title: "Privacy Rights" };

export default function PrivacyRightsPage() {
  return (
    <div className="container-page max-w-4xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Privacy rights</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Depending on where you live, you may have rights to access, correct, delete, port, restrict, object to, or opt
        out of certain data uses. This page is a product-ready template for a global privacy request workflow.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          ["Access", "Request a copy of personal data associated with your account or newsletter subscription."],
          ["Correction", "Ask us to correct inaccurate profile, subscription, or preference information."],
          ["Deletion", "Request deletion where legally available and not overridden by security or legal obligations."],
          ["Opt out", "Opt out of sale/share-style advertising uses where applicable."],
          ["Withdraw consent", "Withdraw non-essential cookie or marketing consent."],
          ["Complaint route", "Contact us first, then use your local data protection authority where available."]
        ].map(([title, copy]) => (
          <section key={title} className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
          </section>
        ))}
      </div>
      <section className="mt-12">
        <ComplianceSection />
      </section>
    </div>
  );
}
