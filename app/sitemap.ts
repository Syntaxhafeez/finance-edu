import type { MetadataRoute } from "next";
import { articles } from "@/lib/content";
import { allCards } from "@/lib/card-products";
import { regions } from "@/lib/international";
import { categories, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const topLevelCategorySlugs = new Set([
    "accounting-basics",
    "banking",
    "budgeting",
    "cryptocurrency",
    "economics",
    "etfs",
    "finance-news",
    "financial-literacy",
    "insurance",
    "investing",
    "mutual-funds",
    "passive-income",
    "personal-finance",
    "real-estate-finance",
    "retirement",
    "saving-money",
    "side-hustles",
    "startup-finance",
    "stock-market",
    "taxes",
    "trading"
  ]);
  const staticPages = [
    "",
    "/calculators",
    "/credit-cards",
    "/debit-cards",
    "/loans",
    "/mortgages",
    "/compare",
    "/glossary",
    "/newsletter",
    "/regions",
    "/about",
    "/contact",
    "/editorial-policy",
    "/fact-checking",
    "/privacy",
    "/privacy-rights",
    "/cookie-policy",
    "/advertising-disclosure",
    "/accessibility",
    "/terms",
    "/disclaimer"
  ];
  const categoryUrls = categories.map((category) =>
    topLevelCategorySlugs.has(category.slug) ? `/${category.slug}` : `/topics/${category.slug}`
  );
  const learnPages = ["/learn/beginner-guides", "/learn/advanced-finance-guides"];

  return [
    ...staticPages.map((page) => ({
      url: `${siteConfig.url}${page}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.75
    })),
    ...learnPages.map((page) => ({
      url: `${siteConfig.url}${page}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.86
    })),
    ...regions.map((region) => ({
      url: `${siteConfig.url}/regions/${region.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85
    })),
    ...categoryUrls.map((page) => ({
      url: `${siteConfig.url}${page}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/articles/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.9
    })),
    ...allCards.map((card) => ({
      url: `${siteConfig.url}/${card.type === "Credit" ? "credit-cards" : "debit-cards"}/${card.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.82
    }))
  ];
}
