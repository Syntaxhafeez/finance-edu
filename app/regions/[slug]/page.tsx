import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { CompoundInterestCalculator } from "@/components/calculators/compound-interest-calculator";
import { EmiCalculator } from "@/components/calculators/emi-calculator";
import { ComplianceSection } from "@/components/knowledge/compliance-section";
import { Educational3DModel } from "@/components/knowledge/educational-3d-model";
import { VisualFramework } from "@/components/knowledge/visual-framework";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/lib/content";
import { getRegion, regions } from "@/lib/international";

type RegionPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return regions.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) return {};
  return {
    title: `${region.name} Finance Education: Cards, Loans, Investing, Banking, and Calculators`,
    description: region.audience,
    alternates: {
      canonical: `/regions/${region.slug}`,
      languages: {
        [region.locale]: `/regions/${region.slug}`,
        "x-default": "/regions"
      }
    }
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  return (
    <div className="container-page py-12">
      <Badge variant="trust">{region.locale}</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">{region.name} finance education</h1>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">{region.audience}</p>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Local regulator and trust context</h2>
          <div className="mt-5 grid gap-3">
            {region.regulatorNotes.map((note) => (
              <div key={note} className="rounded-lg bg-secondary p-4 text-sm font-medium">
                {note}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Country-specific content angles</h2>
          <div className="mt-5 grid gap-3">
            {region.contentAngles.map((angle) => (
              <div key={angle} className="rounded-lg bg-secondary p-4 text-sm font-medium">
                {angle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <VisualFramework
          title={`${region.name} reader decision journey`}
          blocks={["Local term", "Currency", "Fees", "Regulator context", "Action"]}
          checklist={[
            `Show examples in ${region.currency}`,
            "Avoid product claims that ignore local eligibility",
            "Explain tax and legal caveats clearly",
            "Link to calculators, glossary entries, and source-backed guides"
          ]}
        />
      </section>

      <section className="mt-14">
        <Educational3DModel />
      </section>

      <section className="mt-14 grid gap-8">
        <CompoundInterestCalculator />
        <EmiCalculator />
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-normal">Recommended articles for {region.name}</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {articles.slice(0, 6).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <ComplianceSection />
      </section>
    </div>
  );
}
