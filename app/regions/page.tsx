import Link from "next/link";
import { ComplianceSection } from "@/components/knowledge/compliance-section";
import { GlobalSeoSection } from "@/components/knowledge/global-seo-section";
import { Badge } from "@/components/ui/badge";
import { regions } from "@/lib/international";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "International Finance Education by Country",
  description:
    "Country-aware finance education for the USA, India, UK, EU, and global readers with local currencies, regulator context, and useful examples.",
  path: "/regions",
  keywords: ["international finance education", "India finance", "USA finance", "UK finance", "global finance"]
});

export default function RegionsPage() {
  return (
    <div className="container-page py-12">
      <Badge variant="trust">International finance</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Global finance education hub</h1>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
        Serve readers across countries by combining universal finance principles with local currency examples, local
        product vocabulary, regulator-aware risk language, and unique country-specific content.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {regions.map((region) => (
          <Link key={region.slug} href={`/regions/${region.slug}`} className="rounded-lg border bg-card p-5 hover:shadow-premium">
            <h2 className="text-xl font-semibold">{region.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{region.currency}</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{region.audience}</p>
          </Link>
        ))}
      </div>
      <section className="mt-14">
        <GlobalSeoSection />
      </section>
      <section className="mt-14">
        <ComplianceSection />
      </section>
    </div>
  );
}
