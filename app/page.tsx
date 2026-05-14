import Link from "next/link";
import { ArrowRight, CheckCircle2, Newspaper, Sparkles } from "lucide-react";
import { AnimatedRise } from "@/components/animated-rise";
import { ArticleCard } from "@/components/article-card";
import { CreditCardGrid } from "@/components/knowledge/credit-card-grid";
import { Educational3DModel } from "@/components/knowledge/educational-3d-model";
import { GlobalSeoSection } from "@/components/knowledge/global-seo-section";
import { LoanComparison } from "@/components/knowledge/loan-comparison";
import { MoneyCommandCenter } from "@/components/homepage/money-command-center";
import { CurrencyRatesPanel } from "@/components/homepage/currency-rates-panel";
import { NewsletterForm } from "@/components/newsletter-form";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardComparisonGrid } from "@/components/cards/card-comparison-grid";
import { creditCards, debitCards } from "@/lib/card-products";
import { articles, pillarPages } from "@/lib/content";
import { categories } from "@/lib/site";

const trustSignals = ["Expert-reviewed", "Cited sources", "Updated histories", "Clear explanations"];
export default function HomePage() {
  return (
    <>
      <section className="border-b bg-[radial-gradient(circle_at_top_left,hsl(var(--accent)),transparent_34%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/.35))]">
        <div className="container-page grid items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] xl:py-18">
          <AnimatedRise>
            <Badge variant="trust">Finance education built for clarity and trust</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">
              Clear money decisions start with serious financial literacy.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              CashPivot combines expert-reviewed guides, calculators, glossary explainers, regional context, and clear
              comparison tools for readers who want useful answers without noise.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/learn/beginner-guides">
                  Start learning <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/calculators">Use calculators</Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <span key={signal} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {signal}
                </span>
              ))}
            </div>
          </AnimatedRise>
          <AnimatedRise delay={0.1}>
            <CurrencyRatesPanel />
          </AnimatedRise>
        </div>
      </section>

      <section className="container-page py-16">
        <MoneyCommandCenter />
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Explore" title="Finance topics for every major money decision">
          Choose a topic to learn the terms, compare the tradeoffs, run the numbers, and find deeper guides.
        </SectionHeading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/topics/${category.slug}`}
                className="rounded-lg border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-premium"
              >
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-semibold">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.intent}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y bg-secondary/35 py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Featured guides" title="Useful articles with summaries, examples, and citations" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <Educational3DModel />
      </section>

      <section className="container-page pb-20">
        <GlobalSeoSection />
      </section>

      <section className="border-y bg-secondary/35 py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Credit cards" title="Visual card education for travel, cashback, students, and debt payoff">
            Readers can understand which card type fits their behavior before applying, reducing bad-fit choices and
            improving trust.
          </SectionHeading>
          <div className="mt-10">
            <CardComparisonGrid cards={creditCards} title="Featured credit cards with visual guides" />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Debit cards" title="Bank-linked card education for spending control and safety">
          Debit cards are not credit builders, but they can be powerful budgeting tools when paired with alerts, account
          separation, card controls, and fee awareness.
        </SectionHeading>
        <div className="mt-10">
          <CardComparisonGrid cards={debitCards} title="Featured debit cards with visual guides" />
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Loans" title="Compare personal loans, home loans, student loans, and auto loans by total cost">
          Loan education should make APR, fees, term length, and total repayment visible before readers focus on monthly
          payment alone.
        </SectionHeading>
        <div className="mt-10">
          <LoanComparison />
        </div>
      </section>

      <section className="container-page grid gap-5 pb-20 lg:grid-cols-3">
        {pillarPages.map((pillar) => (
          <Card key={pillar.slug} className="lg:col-span-1">
            <CardContent className="p-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-2xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
              <Link href={`/learn/${pillar.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                View path <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
        <Card className="bg-foreground text-background lg:col-span-1">
          <CardContent className="p-6">
            <Newspaper className="h-5 w-5" />
            <h3 className="mt-4 text-2xl font-semibold">Newsletter system</h3>
            <p className="mt-3 text-sm leading-6 text-background/75">
              Weekly money briefings, recently updated articles, editor picks, and market explainers.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
