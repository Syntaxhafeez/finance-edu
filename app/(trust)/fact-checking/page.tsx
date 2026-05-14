export const metadata = { title: "Fact-Checking Process" };

export default function FactCheckingPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Fact-checking process</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Each high-impact guide is reviewed for numerical accuracy, terminology, citation relevance, and reader safety.
        Claims involving tax, legal, investment, insurance, or credit rules require extra source verification before
        publishing.
      </p>
      <div className="mt-10 overflow-hidden rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left">
            <tr>
              <th className="p-4">Review area</th>
              <th className="p-4">What we check</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[
              ["Numbers", "Calculator formulas, example math, APR/APY language, fees, and repayment illustrations."],
              ["Sources", "Regulators, government resources, primary documents, official disclosures, and reputable institutions."],
              ["Reader safety", "Risk warnings, no guaranteed outcomes, no unsupported individualized advice."],
              ["Freshness", "Updated dates, changed rules, outdated product assumptions, and market-sensitive statements."]
            ].map(([area, check]) => (
              <tr key={area}>
                <td className="p-4 font-semibold">{area}</td>
                <td className="p-4 leading-6 text-muted-foreground">{check}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
