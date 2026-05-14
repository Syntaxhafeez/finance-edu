import { permanentRedirect, notFound } from "next/navigation";

const routes: Record<string, string> = {
  "home-loans": "/articles/home-loans-mortgage-basics",
  "mortgage-basics": "/articles/home-loans-mortgage-basics",
  "emi-calculator": "/calculators",
  "mortgage-calculator": "/calculators"
};

type AliasPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(routes).map((slug) => ({ slug }));
}

export default async function MortgageAliasPage({ params }: AliasPageProps) {
  const { slug } = await params;
  const route = routes[slug];
  if (route) permanentRedirect(route);
  notFound();
}
