"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SearchForm } from "@/components/search-form";
import { Button } from "@/components/ui/button";
import { mainLinks, moreLinks } from "@/components/layout/nav-links";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon" className="xl:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      {open ? (
        <div className="absolute inset-x-0 top-16 border-t bg-background xl:hidden">
          <div className="container-page grid gap-4 py-4">
            <SearchForm compact />
            <nav className="grid gap-1 sm:grid-cols-2" aria-label="Mobile navigation">
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
    </>
  );
}
