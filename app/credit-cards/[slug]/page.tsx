import { notFound } from "next/navigation";
import { CardDetail } from "@/components/cards/card-detail";
import { creditCards, getCard } from "@/lib/card-products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return creditCards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card || card.type !== "Credit") return {};
  return {
    title: `${card.name} Review: Benefits, Pros, Cons, Criteria, and How to Use`,
    description: `${card.name} explained with benefits, drawbacks, best use case, eligibility criteria, responsible usage tips, and official issuer source.`
  };
}

export default async function CreditCardDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card || card.type !== "Credit") notFound();
  return <CardDetail card={card} />;
}
