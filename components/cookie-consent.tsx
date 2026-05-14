"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!window.localStorage.getItem("ledgerwise-cookie-choice"));
  }, []);

  function choose(value: "essential" | "all") {
    window.localStorage.setItem("ledgerwise-cookie-choice", value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-lg border bg-background p-5 shadow-premium">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="font-semibold">Cookie choices</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            We use essential cookies for site preferences. Analytics or advertising cookies should only run after consent
            where required. Read our <Link className="text-primary" href="/cookie-policy">cookie policy</Link>.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={() => choose("essential")}>
            Essential only
          </Button>
          <Button onClick={() => choose("all")}>Accept all</Button>
        </div>
      </div>
    </div>
  );
}
