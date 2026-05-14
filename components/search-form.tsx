import { Search } from "lucide-react";

export function SearchForm({ compact = false }: { compact?: boolean }) {
  return (
    <form action="/search" className={compact ? "relative w-full" : "relative w-full lg:w-52 2xl:w-64"}>
      <label className="sr-only" htmlFor={compact ? "mobile-search" : "site-search"}>
        Search finance guides
      </label>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        id={compact ? "mobile-search" : "site-search"}
        name="q"
        placeholder={compact ? "" : "Search guides..."}
        className={
          compact
            ? "h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm"
            : "h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
        }
      />
    </form>
  );
}
