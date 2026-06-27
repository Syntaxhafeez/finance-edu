import { notFound } from "next/navigation";
import { CardDetail } from "@/components/cards/card-detail";
import { creditCards, getCard } from "@/lib/card-products";
import { absoluteUrl, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return creditCards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card || card.type !== "Credit") return {};
  return pageMetadata({
    title: card.seoTitle ?? `${card.name} Review: Benefits, Pros, Cons, Criteria, and How to Use`,
    description:
      card.seoDescription ??
      `${card.name} explained with benefits, drawbacks, best use case, eligibility criteria, responsible usage tips, and official issuer source.`,
    path: `/credit-cards/${card.slug}`,
    keywords: [
      card.name,
      `${card.name} review`,
      `${card.name} benefits`,
      `${card.name} rewards`,
      `${card.name} pros and cons`,
      card.rewardStyle,
      card.issuer
    ]
  });
}

export default async function CreditCardDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const card = getCard(slug);
  if (!card || card.type !== "Credit") notFound();
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreditCard",
    name: card.name,
    description: card.seoDescription ?? card.bestFor,
    url: absoluteUrl(`/credit-cards/${card.slug}`),
    brand: {
      "@type": "Brand",
      name: card.issuer
    },
    provider: {
      "@type": "Organization",
      name: card.issuer,
      url: card.sourceUrl
    },
    category: card.rewardStyle,
    feesAndCommissionsSpecification: card.annualFee,
    audience: {
      "@type": "Audience",
      audienceType: card.creditProfile
    }
  };
  const faqJsonLd = card.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: card.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    : null;
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Credit Cards", url: "/credit-cards" },
    { name: card.name, url: `/credit-cards/${card.slug}` }
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}
      <CardDetail card={card} />
    </>
  );
}
