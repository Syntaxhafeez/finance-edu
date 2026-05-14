import Link from "next/link";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { searchSite } from "@/lib/search";

export const metadata = {
  title: "Search Finance Guides, Cards, Calculators, and Tools",
  description: "Search finance education guides, credit cards, debit cards, calculators, glossary terms, and regional content."
};

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q ?? "";
  const results = searchSite(query);

  return (
    <div className="container-page py-12">
      <Badge variant="trust">Site search</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Search the finance library</h1>
      <form action="/search" className="mt-8 max-w-3xl">
        <label className="sr-only" htmlFor="search-page-input">Search</label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input id="search-page-input" name="q" defaultValue={query} placeholder="Try travel cards, EMI, SIP, student cards, mortgage..." className="h-14 pl-12 text-base" />
        </div>
      </form>
      <p className="mt-4 text-sm text-muted-foreground">
        {results.length} result{results.length === 1 ? "" : "s"} {query ? `for "${query}"` : "from the full library"}.
      </p>
      <div className="mt-8 grid gap-4">
        {results.map((result) => (
          <Link key={`${result.href}-${result.title}`} href={result.href} className="rounded-lg border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-premium">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{result.type}</Badge>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">{result.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{result.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
