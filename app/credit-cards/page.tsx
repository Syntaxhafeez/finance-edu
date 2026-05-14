import { CardComparisonGrid } from "@/components/cards/card-comparison-grid";
import { Educational3DModel } from "@/components/knowledge/educational-3d-model";
import { VisualFramework } from "@/components/knowledge/visual-framework";
import { Badge } from "@/components/ui/badge";
import { creditCards } from "@/lib/card-products";

export const metadata = {
  title: "Best Credit Cards by Use Case: Travel, Cashback, Student, Premium, India, USA, UK",
  description:
    "Compare 25+ credit cards with visual card guides, benefits, pros, cons, criteria, usage strategy, and official source links."
};

export default function CreditCardsPage() {
  return (
    <div className="container-page py-12">
      <Badge variant="trust">Credit card comparison hub</Badge>
      <h1 className="mt-5 text-5xl font-semibold tracking-normal">Best credit cards by real use case</h1>
      <p className="mt-5 max-w-4xl text-lg leading-8 text-muted-foreground">
        Compare travel cards, cashback cards, student cards, premium cards, shopping cards, and international options
        across the USA, India, and UK. Each card includes visual explanation, benefits, drawbacks, usage criteria, and
        source links so the content can be maintained like a serious finance media product.
      </p>
      <section className="mt-12">
        <VisualFramework
          title="Credit card decision engine"
          blocks={["Goal", "Spending", "Fee math", "Approval fit", "Responsible use"]}
          checklist={[
            "Choose travel cards only when you can redeem points well",
            "Choose cashback when you want simple value",
            "Choose student cards to build history, not to borrow",
            "Avoid rewards optimization when carrying debt"
          ]}
        />
      </section>
      <section className="mt-12">
        <Educational3DModel />
      </section>
      <div className="mt-14">
        <CardComparisonGrid cards={creditCards} title="25+ credit card visual comparison list" />
      </div>
    </div>
  );
}
