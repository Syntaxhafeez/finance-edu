import { permanentRedirect, notFound } from "next/navigation";

const routes: Record<string, string> = {
  "personal-loans": "/articles/personal-loans-explained",
  "debt-consolidation": "/articles/personal-loans-explained",
  "home-loans": "/articles/home-loans-mortgage-basics",
  "emi-calculator": "/calculators"
};

type AliasPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(routes).map((slug) => ({ slug }));
}

export default async function LoanAliasPage({ params }: AliasPageProps) {
  const { slug } = await params;
  const route = routes[slug];
  if (route) permanentRedirect(route);
  notFound();
}
