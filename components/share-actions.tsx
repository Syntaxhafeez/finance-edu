"use client";

import { Bookmark, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ShareActions({ title }: { title: string }) {
  const [saved, setSaved] = useState(false);
  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href });
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
  };

  function linkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
  }

  function save() {
    const savedArticles = JSON.parse(window.localStorage.getItem("ledgerwise-saved") ?? "[]") as string[];
    const next = Array.from(new Set([...savedArticles, window.location.pathname]));
    window.localStorage.setItem("ledgerwise-saved", JSON.stringify(next));
    setSaved(true);
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon" aria-label="Share article" onClick={share}>
        <Send className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Share on LinkedIn" onClick={linkedIn}>
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button variant={saved ? "secondary" : "outline"} size="icon" aria-label="Save article" onClick={save}>
        <Bookmark className="h-4 w-4" />
      </Button>
    </div>
  );
}
