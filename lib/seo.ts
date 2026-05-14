import type { Metadata } from "next";
import { Article } from "@/lib/content";
import type { CardProduct } from "@/lib/card-products";
import { categories, siteConfig } from "@/lib/site";

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultOgImage = "/opengraph-image";

export function pageMetadata({
  title,
  description,
  path,
  keywords = []
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: `${siteConfig.name} finance education` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage]
    }
  };
}

export function categoryPageMetadata(slug: string): Metadata {
  const category = categories.find((item) => item.slug === slug);
  if (!category) return {};
  return pageMetadata({
    title: `${category.title} Guides, Tools, Definitions, and Examples`,
    description: category.intent,
    path: `/${slug}`,
    keywords: [category.title, `${category.title} guide`, `${category.title} examples`, "finance education"]
  });
}

export function articleMetadata(article: Article): Metadata {
  const url = absoluteUrl(`/articles/${article.slug}`);
  return {
    title: article.seoTitle,
    description: article.description,
    keywords: [...article.tags, article.category, article.difficulty],
    alternates: {
      canonical: url
    },
    openGraph: {
      title: article.seoTitle,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      section: article.category,
      tags: article.tags,
      siteName: siteConfig.name,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: article.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.description,
      images: [defaultOgImage]
    }
  };
}

export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: absoluteUrl(`/articles/${article.slug}`),
    author: {
      "@type": "Person",
      name: article.author
    },
    reviewedBy: {
      "@type": "Person",
      name: article.reviewer
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/icon.svg")
    },
    image: absoluteUrl(defaultOgImage),
    articleSection: article.category,
    keywords: article.tags.join(", ")
  };
}

export function faqJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/icon.svg"),
    email: siteConfig.editorialEmail,
    sameAs: [siteConfig.url]
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function collectionPageJsonLd({
  name,
  description,
  url,
  items
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(url),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.url)
      }))
    }
  };
}

export function cardProductJsonLd(card: CardProduct) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: card.name,
    description: `${card.bestFor} ${card.rewardStyle}.`,
    url: absoluteUrl(`/${card.type === "Credit" ? "credit-cards" : "debit-cards"}/${card.slug}`),
    provider: {
      "@type": "Organization",
      name: card.issuer,
      url: card.sourceUrl
    },
    category: `${card.country} ${card.type} Card`,
    feesAndCommissionsSpecification: card.annualFee,
    termsOfService: card.sourceUrl
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url)
    }))
  };
}
