import Link from "next/link";
import { Globe2, MapPin } from "lucide-react";
import { countryContentMatrix, globalSeoPlaybook, regions } from "@/lib/international";

export function GlobalSeoSection() {
  return (
    <section className="rounded-lg border bg-card p-6">
      <div className="flex items-center gap-3">
        <Globe2 className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-semibold tracking-normal">International finance learning map</h2>
      </div>
      <p className="mt-4 max-w-4xl text-base leading-7 text-muted-foreground">
        Finance decisions change by country. Currency, account names, credit rules, tax treatment, investor protection,
        and regulator language can all affect the right next step.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {regions.map((region) => (
          <Link key={region.slug} href={`/regions/${region.slug}`} className="rounded-lg border bg-background p-4 hover:shadow-premium">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-semibold">{region.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{region.currency}</p>
          </Link>
        ))}
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {globalSeoPlaybook.map((item) => (
          <article key={item.title} className="rounded-lg bg-secondary p-5">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left">
            <tr>
              <th className="p-4">Cluster</th>
              <th className="p-4">International topics</th>
              <th className="p-4">Local decision details</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {countryContentMatrix.map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell} className="p-4 leading-6 text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
