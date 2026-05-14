import { notFound } from "next/navigation";
import { CardDetail } from "@/components/cards/card-detail";
import { debitCards, getCard } from "@/lib/card-products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return debitCards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card || card.type !== "Debit") return {};
  return {
    title: `${card.name} Guide: Benefits, Fees, Pros, Cons, and Safe Use`,
    description: `${card.name} explained with debit card benefits, drawbacks, criteria, account safety tips, and official source.`
  };
}

export default async function DebitCardDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card || card.type !== "Debit") notFound();
  return <CardDetail card={card} />;
}
