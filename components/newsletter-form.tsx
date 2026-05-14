import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  return (
    <form className="flex flex-col gap-3 sm:flex-row" action="/api/newsletter" method="post">
      <div className="relative flex-1">
        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="email" name="email" required placeholder="you@example.com" className="pl-9" />
      </div>
      <Button type="submit">Get weekly brief</Button>
    </form>
  );
}
