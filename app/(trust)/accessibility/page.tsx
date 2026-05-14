export const metadata = { title: "Accessibility Statement" };

export default function AccessibilityPage() {
  return (
    <div className="container-page max-w-4xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Accessibility statement</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        CashPivot aims to provide readable finance education for people using keyboards, screen readers, mobile devices,
        zoom, high contrast settings, and assistive technologies.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          ["Readable typography", "Large body text, clear contrast, short sections, descriptive headings, and scannable tables."],
          ["Keyboard access", "Navigation, forms, cookie controls, and calculator inputs should be reachable without a mouse."],
          ["Visual alternatives", "Charts and 3D visuals use text explanations so the educational meaning is not visual-only."],
          ["Feedback", "Readers can contact editors@cashpivot.online with accessibility barriers or readability problems."]
        ].map(([title, copy]) => (
          <section key={title} className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
