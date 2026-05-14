import type { Metadata } from "next";
import Script from "next/script";
import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollToTop } from "@/components/scroll-to-top";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://finance-edu.example"),
  applicationName: "LedgerWise",
  authors: [{ name: "LedgerWise Editorial Team", url: "https://finance-edu.example/about" }],
  creator: "LedgerWise Media",
  publisher: "LedgerWise Media",
  category: "finance education",
  title: {
    default: "LedgerWise - Clear Finance Education, Calculators, and Expert Guides",
    template: "%s | LedgerWise"
  },
  description:
    "A premium finance education platform with expert-reviewed guides, calculators, glossary definitions, market explainers, and practical money tools.",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "LedgerWise - Clear Finance Education, Calculators, and Expert Guides",
    description:
      "Expert-reviewed finance guides, calculators, glossary definitions, market explainers, and practical money tools.",
    url: "/",
    siteName: "LedgerWise",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LedgerWise finance education" }]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ledgerwise",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml"
    },
    languages: {
      "en-US": "/regions/united-states",
      "en-IN": "/regions/india",
      "en-GB": "/regions/united-kingdom",
      "en-IE": "/regions/european-union",
      "x-default": "/"
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <Script id="strip-extension-hydration-attrs" strategy="beforeInteractive">
          {`
            (function () {
              var attrs = ["rtrvr-ls", "rtrvr-ro"];
              function clean(root) {
                if (!root || !root.querySelectorAll) return;
                attrs.forEach(function (attr) {
                  root.querySelectorAll("[" + attr + "]").forEach(function (node) {
                    node.removeAttribute(attr);
                  });
                });
                if (root.removeAttribute) {
                  attrs.forEach(function (attr) { root.removeAttribute(attr); });
                }
              }
              clean(document.documentElement);
              new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                  if (mutation.type === "attributes" && attrs.indexOf(mutation.attributeName) !== -1) {
                    mutation.target.removeAttribute(mutation.attributeName);
                  }
                });
              }).observe(document.documentElement, { subtree: true, attributes: true, attributeFilter: attrs });
            })();
          `}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
        <Header />
        <ScrollToTop />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
