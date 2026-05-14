import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-muted-foreground">{children}</p> : null}
    </div>
  );
}
