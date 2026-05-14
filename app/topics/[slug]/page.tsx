import { notFound } from "next/navigation";
import { TopicPageContent } from "@/components/topic-page-content";
import { getCategory } from "@/lib/content";
import { categories } from "@/lib/site";

type TopicPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: TopicPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} Guides, Calculators, and Definitions`,
    description: category.intent,
    alternates: { canonical: `/topics/${category.slug}` }
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  return <TopicPageContent slug={slug} />;
}
