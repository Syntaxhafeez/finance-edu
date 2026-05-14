import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpenCheck,
  Calculator,
  CheckCircle2,
  Compass,
  CreditCard,
  FileText,
  Globe2,
  GraduationCap,
  Landmark,
  LineChart,
  ListChecks,
  ShieldCheck,
  WalletCards
} from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { Educational3DModel } from "@/components/knowledge/educational-3d-model";
import { VisualFramework } from "@/components/knowledge/visual-framework";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { articles, pillarPages } from "@/lib/content";
import { categoryDeepSections, contentPlaybooks } from "@/lib/finance-data";
import { regions } from "@/lib/international";
import { categories } from "@/lib/site";

const beginnerModules = [
  {
    title: "Money operating system",
    icon: WalletCards,
    goal: "Build the basic structure: income, bills, savings, banking, and a weekly money review.",
    lessons: ["Track real after-tax income", "Separate fixed and flexible spending", "Automate emergency savings", "Review subscriptions and fees"],
    visual: "Cash in -> bills -> safety reserve -> goals -> investing"
  },
  {
    title: "Credit and borrowing basics",
    icon: CreditCard,
    goal: "Understand cards, credit scores, utilization, interest, fees, and when debt becomes dangerous.",
    lessons: ["Pay in full when possible", "Keep utilization low", "Compare APR and total cost", "Avoid reward chasing with debt"],
    visual: "Statement balance -> due date -> payment -> credit history"
  },
  {
    title: "Saving and goal planning",
    icon: ShieldCheck,
    goal: "Turn vague saving into named buckets with target dates and realistic monthly contributions.",
    lessons: ["Emergency fund tiers", "Short-term vs long-term goals", "Currency and inflation awareness", "Bank account safety checks"],
    visual: "Goal amount / months remaining = monthly target"
  },
  {
    title: "Investing foundations",
    icon: LineChart,
    goal: "Learn risk, diversification, compounding, ETFs, funds, retirement accounts, and behavior.",
    lessons: ["Risk and return", "Compound growth", "Index funds and ETFs", "Rebalancing and long time horizons"],
    visual: "Time + contribution + return - fees = future value"
  },
  {
    title: "Protection and paperwork",
    icon: FileText,
    goal: "Avoid preventable damage with insurance, nominations, taxes, records, and fraud controls.",
    lessons: ["Keep documents organized", "Know claim exclusions", "Set account alerts", "Review beneficiaries and nominees"],
    visual: "Identify risk -> transfer risk -> document proof -> review annually"
  }
];

const advancedModules = [
  {
    title: "Portfolio architecture",
    icon: LineChart,
    goal: "Build allocation logic across equities, bonds, cash, real assets, and international exposure.",
    lessons: ["Risk capacity vs risk tolerance", "Core and satellite design", "Currency exposure", "Rebalancing bands"],
    visual: "Objective -> allocation -> instruments -> review rules"
  },
  {
    title: "Market mechanics",
    icon: Landmark,
    goal: "Understand order types, liquidity, spreads, valuation, cycles, and investor behavior.",
    lessons: ["Bid-ask spread", "Market orders vs limit orders", "Earnings and rates", "Drawdowns and recoveries"],
    visual: "Price = fundamentals + expectations + liquidity + emotion"
  },
  {
    title: "Fund selection",
    icon: ListChecks,
    goal: "Compare ETFs, mutual funds, expense ratios, tracking error, tax drag, and portfolio overlap.",
    lessons: ["Expense ratio", "Tracking difference", "Holdings overlap", "Distribution policy"],
    visual: "Exposure + cost + liquidity + tax behavior"
  },
  {
    title: "Retirement planning",
    icon: Calculator,
    goal: "Convert long-term goals into contribution rates, account choices, and withdrawal assumptions.",
    lessons: ["Retirement corpus math", "Inflation adjustment", "Sequence risk", "Withdrawal discipline"],
    visual: "Savings rate -> corpus -> income floor -> flexible spending"
  },
  {
    title: "Risk control",
    icon: ShieldCheck,
    goal: "Prepare for job loss, rate shocks, market crashes, tax changes, and concentration risk.",
    lessons: ["Emergency liquidity", "Debt stress test", "Diversification", "Written investment policy"],
    visual: "Risk identified -> limit set -> trigger defined -> action logged"
  }
];

function getModules(slug: string) {
  return slug === "advanced-finance-guides" ? advancedModules : beginnerModules;
}

export function LearningPathContent({ slug }: { slug: string }) {
  const pillar = pillarPages.find((item) => item.slug === slug);
  if (!pillar) notFound();
  const selected = articles.filter((article) => pillar.clusters.includes(article.category));
  const modules = getModules(slug);
  const isAdvanced = slug === "advanced-finance-guides";

  return (
    <div className="container-page py-12">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Badge variant="trust">Structured learning path</Badge>
          <h1 className="mt-5 text-5xl font-semibold tracking-normal sm:text-6xl">{pillar.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{pillar.description}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["5", "core modules"],
              [selected.length.toString(), "deep guides"],
              [isAdvanced ? "12 weeks" : "8 weeks", "study rhythm"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border bg-card p-4">
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border bg-[#061512] p-6 text-white">
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
            <GraduationCap className="h-4 w-4" />
            Curriculum map
          </div>
          <div className="mt-8 grid gap-5">
            {modules.map((module, index) => (
              <div key={module.title} className="grid grid-cols-[44px_1fr] gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-sm font-semibold">
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-semibold">{module.title}</h2>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-emerald-300" style={{ width: `${42 + index * 12}%` }} />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">{module.visual}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap gap-2">
        {pillar.clusters.map((cluster) => {
          const category = categories.find((item) => item.slug === cluster);
          return category ? (
            <Link key={cluster} href={`/${cluster}`} className="rounded-md border px-3 py-1.5 text-sm hover:bg-secondary">
              {category.title}
            </Link>
          ) : null;
        })}
      </div>

      <section className="mt-14">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <BookOpenCheck className="h-4 w-4" />
          Full curriculum
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal">Learn by concept, example, and action</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card key={module.title} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">Module {index + 1}</Badge>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{module.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{module.goal}</p>
                  <div className="mt-5 grid gap-3">
                    {module.lessons.map((lesson) => (
                      <div key={lesson} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        {lesson}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg bg-secondary p-4 text-sm font-medium text-foreground">
                    Visual formula: <span className="text-muted-foreground">{module.visual}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Compass className="h-4 w-4" />
            Study route
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal">
            {isAdvanced ? "A deeper route for serious investors" : "A beginner route that does not skip the basics"}
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Read one guide, apply one calculation, and write one decision note each week. The goal is not to memorize
            finance vocabulary. The goal is to make cleaner money decisions under real-world constraints.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Week 1-2", "Vocabulary, cash flow, and the first calculator"],
            ["Week 3-4", "Compare products, fees, rates, and risk warnings"],
            ["Week 5-6", "Build a written decision checklist and review rhythm"],
            [isAdvanced ? "Week 7-12" : "Week 7-8", isAdvanced ? "Portfolio rules, rebalancing, tax awareness, and market behavior" : "Credit, saving, investing, and protection basics"]
          ].map(([label, text]) => (
            <div key={label} className="rounded-lg border bg-card p-5">
              <p className="text-sm font-semibold text-primary">{label}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-normal">Core guides in this path</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          Each guide includes definitions, examples, country-aware notes, mistakes to avoid, decision tables, and a
          workbook section so the page teaches something useful instead of acting like a thin index.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {(selected.length ? selected : articles).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <Educational3DModel />
      </section>
      <section className="mt-14">
        <VisualFramework
          title="Learning path map"
          blocks={["Vocabulary", "Examples", "Calculators", "Comparisons", "Action plan"]}
          checklist={[
            "Read beginner explanations before comparing products",
            "Use calculators to model the numbers",
            "Understand risks and bad-fit scenarios",
            "Revisit the path when income, debt, or goals change"
          ]}
        />
      </section>
      <section className="mt-14 grid gap-5 lg:grid-cols-3">
        {contentPlaybooks.map((playbook) => (
          <div key={playbook.title} className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold">{playbook.title}</h2>
            <div className="mt-5 grid gap-3">
              {playbook.steps.map((step, index) => (
                <div key={step} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary font-semibold text-foreground">
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="mt-14 rounded-lg border bg-card p-6 sm:p-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <Globe2 className="h-4 w-4" />
          Global reader notes
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal">Use the path in India, the USA, the UK, and globally</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          {regions.slice(0, 4).map((region) => (
            <div key={region.slug} className="rounded-lg bg-secondary p-4">
              <h3 className="font-semibold">{region.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Convert examples to {region.currency}, check local tax rules, product eligibility, disclosures, and
                consumer-protection guidance before acting.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-14 grid gap-5 lg:grid-cols-3">
        {[
          {
            title: "Practice lab",
            body: "Pick one real bill, one bank account, one card or loan, and one savings goal. Calculate the monthly impact and write what you would change."
          },
          {
            title: "Decision journal",
            body: "Record the option chosen, the alternatives rejected, the fees checked, the assumptions used, and the next review date."
          },
          {
            title: "Red-flag review",
            body: "Look for high interest, hidden fees, lock-ins, tax surprises, missing emergency cash, and products that reward spending you did not plan."
          }
        ].map((item) => (
          <Card key={item.title}>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="mt-14 grid gap-4">
        {categoryDeepSections.map((section) => (
          <article key={section.title} className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
