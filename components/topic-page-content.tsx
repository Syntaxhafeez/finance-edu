import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { CreditCardGrid } from "@/components/knowledge/credit-card-grid";
import { Educational3DModel } from "@/components/knowledge/educational-3d-model";
import { GlobalSeoSection } from "@/components/knowledge/global-seo-section";
import { LoanComparison } from "@/components/knowledge/loan-comparison";
import { VisualFramework } from "@/components/knowledge/visual-framework";
import { Badge } from "@/components/ui/badge";
import { getArticlesByCategory } from "@/lib/content";
import { categoryDeepSections, mortgageKnowledge, topicVisualGuides } from "@/lib/finance-data";
import { categories } from "@/lib/site";

const topicStudyMap: Record<string, { title: string; body: string }[]> = {
  investing: [
    { title: "Start with asset allocation", body: "Decide how much belongs in cash, bonds, equities, retirement accounts, and long-term taxable investments before picking funds." },
    { title: "Understand risk capacity", body: "Your emergency fund, job stability, time horizon, debt, and family needs decide how much volatility you can survive." },
    { title: "Compare costs", body: "Expense ratios, platform fees, tax drag, bid-ask spreads, and bad timing can quietly reduce long-term returns." }
  ],
  banking: [
    { title: "Choose accounts by job", body: "Daily spending, emergency savings, bill payments, tax reserves, and long-term savings should not all sit in one undifferentiated account." },
    { title: "Check safety and access", body: "Confirm deposit insurance, transfer limits, ATM access, fraud support, account fees, and how quickly money can move." },
    { title: "Watch hidden charges", body: "Monthly maintenance fees, overdraft charges, foreign transaction costs, wire fees, and minimum balance rules can erase account value." }
  ],
  taxes: [
    { title: "Know taxable events", body: "Salary, business income, interest, capital gains, dividends, rent, crypto sales, and side-hustle payments can all have different tax treatment." },
    { title: "Keep clean records", body: "Statements, invoices, Form 16/W-2 style documents, brokerage reports, receipts, and deduction proof make filing easier." },
    { title: "Plan before year-end", body: "Tax planning works best before deadlines, not after income, deductions, and investments are already locked in." }
  ],
  retirement: [
    { title: "Define the income floor", body: "Estimate essential spending first, then add healthcare, housing, travel, family support, inflation, and taxes." },
    { title: "Use the right accounts", body: "Compare workplace plans, IRAs, pensions, NPS/PPF-style products, ISAs, taxable accounts, and local tax rules." },
    { title: "Stress-test withdrawals", body: "A plan should survive poor early market returns, inflation, healthcare surprises, and longer life expectancy." }
  ]
};

function getTopicStudyCards(slug: string, title: string) {
  return (
    topicStudyMap[slug] ?? [
      { title: `${title} basics`, body: "Learn the core terms, costs, risks, and decision points before comparing products or strategies." },
      { title: "Compare real options", body: "Use the same assumptions for every option so fees, restrictions, benefits, and risks are visible." },
      { title: "Review regularly", body: "Money decisions should be revisited when income, family needs, laws, rates, or market conditions change." }
    ]
  );
}

export function TopicPageContent({ slug }: { slug: string }) {
  const category = categories.find((item) => item.slug === slug);
  if (!category) return null;

  const categoryArticles = getArticlesByCategory(slug);
  const studyCards = getTopicStudyCards(slug, category.title);
  const Icon = category.icon;
  const guide = topicVisualGuides[slug] ?? {
    title: `${category.title} decision framework`,
    blocks: ["Learn basics", "Compare choices", "Check costs", "Understand risks", "Take action"],
    checklist: [
      "Start with the reader's real goal",
      "Compare total cost and tradeoffs",
      "Use calculators before committing",
      "Read definitions and examples before choosing"
    ]
  };

  return (
    <div className="container-page py-12">
      <div className="max-w-4xl">
        <Badge variant="trust">Pillar topic</Badge>
        <Icon className="mt-6 h-9 w-9 text-primary" />
        <h1 className="mt-5 text-5xl font-semibold tracking-normal">{category.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{category.intent}</p>
      </div>
      {categoryArticles.length > 0 ? (
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <section className="mt-10 grid gap-5 lg:grid-cols-3">
          {studyCards.map((card) => (
            <article key={card.title} className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.body}</p>
            </article>
          ))}
        </section>
      )}
      <section className="mt-14">
        <VisualFramework title={guide.title} blocks={guide.blocks} checklist={guide.checklist} />
      </section>
      <section className="mt-14">
        <Educational3DModel />
      </section>
      <section className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-normal">{category.title} learning blueprint</h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Use this page as a complete pillar guide. It gives beginners the foundation, gives advanced readers the
            comparison points, and creates a clear path into definitions, calculators, and deeper articles.
          </p>
        </div>
        <div className="grid gap-4">
          {categoryDeepSections.map((section) => (
            <article key={section.title} className="rounded-lg border bg-card p-5">
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      {slug === "credit-cards" ? (
        <section className="mt-14">
          <h2 className="text-3xl font-semibold tracking-normal">Credit card knowledge center</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Compare cards by behavior first: travel cards reward planning, cashback cards reward simplicity, student
            cards reward discipline, and balance transfer cards reward a strict payoff plan.
          </p>
          <div className="mt-6">
            <CreditCardGrid />
          </div>
        </section>
      ) : null}
      {slug === "loans" ? (
        <section className="mt-14">
          <h2 className="text-3xl font-semibold tracking-normal">Loan comparison guide</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Loans should be compared by total repayment, not just monthly payment. This framework helps readers see how
            APR, fees, and term length change the real cost.
          </p>
          <div className="mt-6">
            <LoanComparison />
          </div>
        </section>
      ) : null}
      {slug === "mortgages" ? (
        <section className="mt-14">
          <h2 className="text-3xl font-semibold tracking-normal">Home loan types explained</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {mortgageKnowledge.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.plainEnglish}</p>
                <p className="mt-4 rounded-lg bg-secondary p-3 text-sm font-medium">Best for: {item.bestFor}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
      <section className="mt-14 rounded-lg border bg-secondary/35 p-6">
        <h2 className="text-2xl font-semibold">How to learn {category.title.toLowerCase()}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {["Understand the basics", "Run the numbers", "Compare the tradeoffs"].map((item) => (
            <div key={item} className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Use definitions, examples, calculators, and checklists to move from general knowledge to a practical
                decision.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Common beginner questions</h2>
          <div className="mt-5 divide-y">
            {[
              `What should I learn first in ${category.title}?`,
              `How do I compare ${category.title.toLowerCase()} choices?`,
              "What mistakes should beginners avoid?",
              "Which calculators help with this topic?"
            ].map((question) => (
              <div key={question} className="py-4">
                <h3 className="font-semibold">{question}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Start with the goal, identify costs and risks, run the numbers, then read the supporting guides before
                  choosing a product or strategy.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold">Learning checklist</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Define the goal",
              "Learn key terms",
              "Identify fees and risks",
              "Use a calculator",
              "Compare alternatives",
              "Check local rules",
              "Review after life changes",
              "Keep decision records"
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-secondary p-3 text-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-background font-semibold">
                  {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-14">
        <GlobalSeoSection />
      </section>
      <div className="mt-12">
        <Link href="/search" className="text-sm font-semibold text-primary">
          Search the full library
        </Link>
      </div>
    </div>
  );
}
