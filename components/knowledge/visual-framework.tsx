import { ArrowRight, CheckCircle2 } from "lucide-react";

export function VisualFramework({
  title,
  blocks,
  checklist
}: {
  title: string;
  blocks: string[];
  checklist: string[];
}) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-5">
        {blocks.map((block, index) => (
          <div key={block} className="flex items-center gap-3 md:block">
            <div className="rounded-lg border bg-secondary p-4 text-center text-sm font-semibold">{block}</div>
            {index < blocks.length - 1 ? <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground md:mx-auto md:mt-3" /> : null}
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {checklist.map((item) => (
          <div key={item} className="flex gap-2 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
