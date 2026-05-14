import { loanKnowledge } from "@/lib/finance-data";

export function LoanComparison() {
  return (
    <div className="overflow-x-auto rounded-lg border bg-card">
      <table className="w-full text-sm">
        <thead className="bg-muted text-left">
          <tr>
            <th className="p-4">Loan type</th>
            <th className="p-4">Typical use</th>
            <th className="p-4">Compare first</th>
            <th className="p-4">Important warning</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {loanKnowledge.map((loan) => (
            <tr key={loan.title} className="align-top">
              <td className="p-4 font-semibold">{loan.title}</td>
              <td className="p-4 leading-6 text-muted-foreground">{loan.useCase}</td>
              <td className="p-4">
                <div className="flex flex-wrap gap-2">
                  {loan.compare.map((item) => (
                    <span key={item} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4 leading-6 text-muted-foreground">{loan.warning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
