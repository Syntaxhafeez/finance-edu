import { CardComparisonGrid } from "@/components/cards/card-comparison-grid";
import { Educational3DModel } from "@/components/knowledge/educational-3d-model";
import { VisualFramework } from "@/components/knowledge/visual-framework";
import { Badge } from "@/components/ui/badge";
import { debitCards } from "@/lib/card-products";

export const metadata = {
  title: "Best Debit Cards and Bank Cards: USA, India, UK",
  description:
    "Compare debit cards and bank account cards with visual guides, pros, cons, fees, usage strategy, and safety criteria."
};

export default function DebitCardsPage() {
  return (
    <div className="container-page py-12">
      <Badge variant="trust">Debit card comparison hub</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Debit cards, bank cards, and everyday spending control</h1>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
        Debit cards are best understood as cash-flow tools, not borrowing tools. Compare bank-linked cards by fees, ATM
        access, app controls, fraud controls, international usage, spending alerts, and whether the account helps you
        budget clearly.
      </p>
      <section className="mt-12">
        <VisualFramework
          title="Debit card decision engine"
          blocks={["Bank account", "Fees", "ATM access", "Controls", "Budgeting"]}
          checklist={[
            "Confirm account and card fees",
            "Use alerts and transaction limits",
            "Keep emergency savings separate",
            "Use credit cards only when protections/rewards matter and you pay in full"
          ]}
        />
      </section>
      <section className="mt-12">
        <Educational3DModel />
      </section>
      <div className="mt-14">
        <CardComparisonGrid cards={debitCards} title="Debit card visual comparison list" />
      </div>
    </div>
  );
}
