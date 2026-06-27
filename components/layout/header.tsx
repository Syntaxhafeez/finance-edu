import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { mainLinks, moreLinks } from "@/components/layout/nav-links";
import { SearchForm } from "@/components/search-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/92 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <BrandLogo />

        <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground xl:flex">
          {mainLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground">
              {item.title}
            </Link>
          ))}
          <details className="group relative">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1 rounded-md px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground">
              More <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute right-0 top-11 w-56 rounded-lg border bg-background p-2 shadow-premium">
              {moreLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm hover:bg-secondary hover:text-foreground">
                  {item.title}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <div className="flex min-w-0 items-center gap-1">
          <div className="hidden lg:block">
            <SearchForm />
          </div>
          <ThemeToggle />
          <Button className="hidden xl:inline-flex" asChild>
            <Link href="/newsletter">Newsletter</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
