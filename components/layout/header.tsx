"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { SearchForm } from "@/components/search-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const mainLinks = [
  { title: "Cards", href: "/credit-cards" },
  { title: "Loans", href: "/loans" },
  { title: "Calculators", href: "/calculators" },
  { title: "Glossary", href: "/glossary" },
  { title: "Global", href: "/regions" }
];

const moreLinks = [
  { title: "Debit Cards", href: "/debit-cards" },
  { title: "Mortgages", href: "/mortgages" },
  { title: "Investing", href: "/topics/investing" },
  { title: "Banking", href: "/topics/banking" },
  { title: "Insurance", href: "/topics/insurance" },
  { title: "Taxes", href: "/topics/taxes" },
  { title: "Newsletter", href: "/newsletter" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/92 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <div onClick={() => setOpen(false)}>
          <BrandLogo />
        </div>

        <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground xl:flex">
          {mainLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground">
              {item.title}
            </Link>
          ))}
          <div className="relative">
            <button
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setMoreOpen((value) => !value)}
              type="button"
            >
              More <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {moreOpen ? (
              <div className="absolute right-0 top-11 w-56 rounded-lg border bg-background p-2 shadow-premium">
                {moreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-secondary hover:text-foreground"
                    onClick={() => setMoreOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex min-w-0 items-center gap-1">
          <div className="hidden lg:block">
            <SearchForm />
          </div>
          <ThemeToggle />
          <Button className="hidden xl:inline-flex" asChild>
            <Link href="/newsletter">Newsletter</Link>
          </Button>
          <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t bg-background xl:hidden">
          <div className="container-page grid gap-4 py-4">
            <SearchForm />
            <nav className="grid gap-1 sm:grid-cols-2">
              {[...mainLinks, ...moreLinks].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
