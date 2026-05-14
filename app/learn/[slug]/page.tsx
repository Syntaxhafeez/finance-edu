import { LearningPathContent } from "@/components/learning-path-content";
import { pillarPages } from "@/lib/content";

type LearningPathPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pillarPages.map((page) => ({ slug: page.slug }));
}

export default async function LearningPathPage({ params }: LearningPathPageProps) {
  const { slug } = await params;
  return <LearningPathContent slug={slug} />;
}
