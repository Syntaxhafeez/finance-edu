export const metadata = { title: "Advertising Disclosure" };

export default function AdvertisingDisclosurePage() {
  return (
    <div className="container-page max-w-4xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Advertising disclosure</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        LedgerWise may earn compensation from ads, affiliate links, sponsored links, or product comparison modules.
        Editorial content remains independent, balanced, and written for reader understanding.
      </p>
      <div className="mt-10 grid gap-5">
        {[
          ["Advertising standards", "Ads and sponsored links should be clearly identified and should not block readers from using educational content."],
          ["Affiliate relationships", "If compensation is received, comparison pages should explain methodology, limitations, and how compensation may affect ordering."],
          ["No guarantee", "We do not guarantee approval, rates, rewards, tax outcomes, investment returns, or product availability."],
          ["Reader privacy", "Readers can review privacy and cookie choices in the privacy and cookie policy pages."]
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
