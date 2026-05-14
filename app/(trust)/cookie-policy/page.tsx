import { ComplianceSection } from "@/components/knowledge/compliance-section";

export const metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <div className="container-page max-w-4xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Cookie policy</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        We use essential cookies for preferences and security. Analytics, advertising, personalization, or measurement
        cookies should be disabled until consent is collected where required by law.
      </p>
      <div className="prose-finance mt-8">
        <h2>Cookie categories</h2>
        <p>Essential cookies support theme, cookie choice, security, and basic site operation. Non-essential cookies may include analytics, advertising measurement, affiliate attribution, and personalization.</p>
        <h2>Your choices</h2>
        <p>Visitors can choose essential-only cookies or accept all supported cookies. A production consent center should let visitors change or withdraw consent at any time.</p>
        <h2>International policy notes</h2>
        <p>EU and UK visitors generally require clear notice and active consent before non-essential cookies or similar tracking technologies are used.</p>
      </div>
      <section className="mt-12">
        <ComplianceSection />
      </section>
    </div>
  );
}
