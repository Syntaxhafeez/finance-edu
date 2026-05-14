import Link from "next/link";
import { Clock, ShieldCheck } from "lucide-react";
import { Article, getReadingStats } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ArticleCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  const reading = getReadingStats(article);

  return (
    <Link href={`/articles/${article.slug}`} className="block h-full">
      <Card className="h-full overflow-hidden transition hover:-translate-y-0.5 hover:shadow-premium">
        <CardContent className="flex h-full flex-col p-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant={priority ? "trust" : "secondary"}>{article.difficulty}</Badge>
            <Badge variant="outline">Updated {new Date(article.updatedAt).toLocaleDateString("en-US")}</Badge>
          </div>
          <h3 className="mt-5 text-xl font-semibold leading-tight tracking-normal hover:text-primary">{article.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{article.description}</p>
          <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {reading.text}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              Reviewed
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
