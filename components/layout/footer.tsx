import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { categories, primaryNav, siteConfig } from "@/lib/site";

const trustLinks = [
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Editorial Policy", "/editorial-policy"],
  ["Fact Checking", "/fact-checking"],
  ["Cookie Policy", "/cookie-policy"],
  ["Privacy Rights", "/privacy-rights"],
  ["Advertising Disclosure", "/advertising-disclosure"],
  ["Accessibility", "/accessibility"],
  ["Privacy Policy", "/privacy"],
  ["Terms", "/terms"],
  ["Disclaimer", "/disclaimer"]
];

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-secondary/40">
      <div className="container-page py-8">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-[1.25fr_.9fr_.9fr_1fr]">
          <div>
            <BrandLogo />
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{siteConfig.description}</p>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              Educational content only. We are not a bank, broker, tax advisor, or fiduciary.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Platform</h3>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {primaryNav.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-foreground">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Top Categories</h3>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {categories.slice(0, 7).map((category) => (
                <Link key={category.slug} href={`/topics/${category.slug}`} className="hover:text-foreground">
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Trust</h3>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-1">
              {trustLinks.map(([label, href]) => (
                <Link key={href} href={href} className="hover:text-foreground">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} CashPivot Media. All rights reserved.</p>
          <p>Clear finance education for readers in multiple regions.</p>
        </div>
      </div>
    </footer>
  );
}
