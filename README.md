# LedgerWise Finance Education Platform

A production-shaped Next.js App Router finance education platform focused on SEO authority, readability, trust signals, AdSense readiness, calculators, and scalable content operations.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS
- shadcn-style reusable UI components
- Framer Motion, Recharts
- MDX-ready content architecture
- Prisma + PostgreSQL schema
- Redis cache helper
- SEO utilities for metadata, sitemap, robots, Article/FAQ/Breadcrumb schema

## Key Areas

- Homepage with topic clusters, featured guides, calculators, market summary, newsletter
- SEO category pages under `/topics/[slug]`
- Premium article pages with reading progress, TOC, FAQs, citations, ad placeholders, related articles
- Financial calculators under `/calculators`
- Glossary, comparisons, AI assistant shell, newsletter
- Trust pages for editorial policy, fact checking, privacy, terms, disclaimer
- Admin console for content, SEO health, analytics, newsletter, users

## Local Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Optional database setup:

```bash
npm run prisma:generate
npm run prisma:migrate
```
