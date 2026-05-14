import Link from "next/link";
import { Search } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { CardComparisonGrid } from "@/components/cards/card-comparison-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/content";
import { creditCards } from "@/lib/card-products";

export default function NotFoundPage() {
  return (
    <div className="container-page py-12">
      <Badge variant="trust">Page not found</Badge>
      <div className="mt-5 flex items-start gap-4">
        <Search className="mt-2 h-8 w-8 text-primary" />
        <div>
          <h1 className="text-5xl font-semibold tracking-normal">This page moved or does not exist yet.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Use the live finance hubs below instead of hitting a blank dead end. The platform has category routes,
            article routes, card comparison pages, calculators, region pages, and glossary content.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild><Link href="/credit-cards">Credit cards</Link></Button>
            <Button asChild variant="outline"><Link href="/debit-cards">Debit cards</Link></Button>
            <Button asChild variant="outline"><Link href="/calculators">Calculators</Link></Button>
            <Button asChild variant="outline"><Link href="/regions">Regions</Link></Button>
          </div>
        </div>
      </div>
      <section className="mt-14">
        <CardComparisonGrid cards={creditCards.slice(0, 6)} title="Popular credit card guides" />
      </section>
      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-normal">Featured finance guides</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
