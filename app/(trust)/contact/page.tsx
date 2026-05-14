export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Contact</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        For corrections, partnership questions, expert review inquiries, or accessibility feedback, email
        editors@cashpivot.online.
      </p>
      <div className="mt-10 grid gap-5">
        {[
          ["Corrections", "Send the article URL, the statement in question, and a reliable source we should review."],
          ["Expert review", "Qualified finance, tax, insurance, credit, and investing professionals can contact us about reviewer profiles."],
          ["Reader feedback", "Tell us where an explanation was unclear, too thin, or missing an example."],
          ["Accessibility", "Report keyboard, contrast, screen reader, or mobile readability issues so we can improve the platform."]
        ].map(([title, copy]) => (
          <section key={title} className="rounded-lg border bg-card p-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
