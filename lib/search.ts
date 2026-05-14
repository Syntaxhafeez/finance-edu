import { allCards } from "@/lib/card-products";
import { articles } from "@/lib/content";
import { expandedGlossary } from "@/lib/finance-data";
import { regions } from "@/lib/international";
import { categories } from "@/lib/site";

export type SearchItem = {
  title: string;
  href: string;
  type: string;
  description: string;
  keywords: string;
};

export const searchIndex: SearchItem[] = [
  ...articles.map((article) => ({
    title: article.title,
    href: `/articles/${article.slug}`,
    type: "Guide",
    description: article.description,
    keywords: [article.category, ...article.tags, article.body].join(" ")
  })),
  ...allCards.map((card) => ({
    title: card.name,
    href: `/${card.type === "Credit" ? "credit-cards" : "debit-cards"}/${card.slug}`,
    type: `${card.country} ${card.type} Card`,
    description: `${card.bestFor} ${card.rewardStyle}. ${card.highlights.join(", ")}.`,
    keywords: [card.issuer, card.country, card.type, card.network, card.bestFor, card.rewardStyle, ...card.highlights, ...card.pros].join(" ")
  })),
  ...categories.map((category) => ({
    title: category.title,
    href: `/topics/${category.slug}`,
    type: "Topic",
    description: category.intent,
    keywords: `${category.title} ${category.intent}`
  })),
  ...regions.map((region) => ({
    title: `${region.name} finance education`,
    href: `/regions/${region.slug}`,
    type: "Region",
    description: region.audience,
    keywords: [region.name, region.currency, region.locale, ...region.contentAngles, ...region.regulatorNotes].join(" ")
  })),
  ...expandedGlossary.map(([term, definition]) => ({
    title: term,
    href: "/glossary",
    type: "Glossary",
    description: definition,
    keywords: `${term} ${definition}`
  })),
  ...[
    ["Financial calculators", "/calculators", "Tool", "Compound interest, EMI, mortgage, retirement, inflation, and savings calculators."],
    ["Credit card comparison", "/credit-cards", "Comparison", "Travel cards, cashback cards, student cards, premium cards, India cards, UK cards, USA cards."],
    ["Debit card comparison", "/debit-cards", "Comparison", "Bank debit cards, ATM access, spending controls, budgeting, fraud safety."],
    ["Loans", "/loans", "Hub", "Personal loans, debt consolidation, APR, fees, EMI, total repayment."],
    ["Mortgages", "/mortgages", "Hub", "Home loans, mortgage rates, APR, down payment, closing costs, EMI."],
    ["Privacy rights", "/privacy-rights", "Policy", "EU, UK, California, India privacy rights and consent choices."],
    ["Cookie policy", "/cookie-policy", "Policy", "Cookie choices, essential cookies, analytics preferences, and privacy controls."]
  ].map(([title, href, type, description]) => ({
    title,
    href,
    type,
    description,
    keywords: `${title} ${description}`
  }))
];

export function searchSite(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return searchIndex.slice(0, 24);
  const terms = normalized.split(/\s+/);

  return searchIndex
    .map((item) => {
      const haystack = `${item.title} ${item.type} ${item.description} ${item.keywords}`.toLowerCase();
      const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0) +
        (item.title.toLowerCase().includes(normalized) ? 4 : 0);
      return { item, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.item);
}
