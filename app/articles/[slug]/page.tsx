import { notFound } from "next/navigation";
import {
  AlertTriangle,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Globe2,
  Layers3,
  ListChecks,
  PieChart,
  Route,
  UserRoundCheck
} from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { ContextualAd } from "@/components/monetization/contextual-ad";
import { ReadingProgress } from "@/components/reading-progress";
import { ShareActions } from "@/components/share-actions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Article } from "@/lib/content";
import { creditCardKnowledge, loanKnowledge, mortgageKnowledge } from "@/lib/finance-data";
import { regions } from "@/lib/international";
import {
  articles,
  getArticleBySlug,
  getCategory,
  getReadingStats,
  getRelatedArticles
} from "@/lib/content";
import { articleJsonLd, articleMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return articleMetadata(article);
}

function getArticleToolkit(article: Article) {
  const categoryLabel = getCategory(article.category)?.title ?? article.category.replaceAll("-", " ");
  const firstTag = article.tags[0] ?? categoryLabel;
  const secondTag = article.tags[1] ?? "money decisions";
  const thirdTag = article.tags[2] ?? "risk management";

  return {
    lens: [
      {
        title: "What you are deciding",
        body: `Whether this ${categoryLabel.toLowerCase()} topic changes your cash flow, risk, return, taxes, credit profile, or long-term flexibility.`
      },
      {
        title: "What numbers matter",
        body: `Focus on the measurable levers: rates, fees, time, monthly payment, expected value, downside cost, and how often the decision repeats.`
      },
      {
        title: "What can go wrong",
        body: `The common failure point is treating ${firstTag} like a shortcut instead of a system with tradeoffs, rules, and behavior attached.`
      }
    ],
    playbook: [
      `Write the goal in one sentence: what should ${firstTag} help you accomplish and by when?`,
      `List the cash flows: money paid today, money paid monthly, money received, fees, taxes, and any penalty for changing your mind.`,
      `Compare at least three alternatives using the same assumptions so the decision is not distorted by marketing language.`,
      `Stress-test the weak case: lower income, higher rate, job loss, market decline, emergency expense, or a benefit that becomes unavailable.`,
      `Set a review date. Many finance decisions look fine on day one and become expensive when nobody checks them again.`,
      `Document the final reason. Future you should know why this choice made sense, not only what button was clicked.`
    ],
    examples: [
      {
        scenario: "Conservative household",
        situation: `A reader is learning ${secondTag} with unstable monthly income and limited savings.`,
        action: "Prioritize liquidity, emergency cash, low fixed commitments, and products with easy exit rules.",
        why: "The best financial move is the one that survives a bad month without forcing expensive borrowing."
      },
      {
        scenario: "Growing income",
        situation: `A reader has steady income and wants to use ${firstTag} to improve long-term outcomes.`,
        action: "Automate the useful behavior, compare fees annually, and increase contributions or repayments when income rises.",
        why: "Small recurring improvements compound more reliably than occasional heroic decisions."
      },
      {
        scenario: "High complexity",
        situation: `A reader is juggling ${thirdTag}, taxes, debt, and multiple accounts across countries or institutions.`,
        action: "Create a one-page dashboard with balances, rates, due dates, renewal dates, and decision owners.",
        why: "Complexity becomes manageable when the system shows what needs attention before it becomes urgent."
      }
    ],
    comparison: [
      ["Best-fit reader", `Someone who can explain the purpose of ${firstTag} in plain language before using it.`],
      ["Main upside", `Better decisions, clearer tradeoffs, and fewer avoidable costs in ${categoryLabel.toLowerCase()}.`],
      ["Main risk", "Ignoring fees, tax rules, behavioral pressure, rate changes, or local product terms."],
      ["Review rhythm", "Quick monthly check, deeper quarterly review, and full review after income or life changes."],
      ["Proof of quality", "Transparent numbers, reputable sources, clear eligibility rules, and no pressure to act immediately."]
    ],
    mistakes: [
      `Choosing the option with the loudest headline instead of the strongest net value after fees and restrictions.`,
      "Comparing monthly payment only, while ignoring total cost, term length, opportunity cost, and exit penalties.",
      "Assuming advice from one country applies everywhere. Banking rules, taxes, consumer protections, and product names differ.",
      "Letting convenience hide risk. Autopay, apps, points, and one-click investing still need periodic review.",
      "Skipping documentation. Keep statements, disclosures, calculators, notes, and source links for future audits or disputes."
    ],
    workbook: [
      "What am I trying to improve: cash flow, safety, growth, credit, tax efficiency, or convenience?",
      "What is the worst realistic outcome, and can I absorb it without damaging the rest of my plan?",
      "Which fee, rate, or rule would make this decision unattractive?",
      "What would make me reverse, refinance, rebalance, cancel, or downgrade this choice?",
      "Who should review this with me: partner, tax professional, financial planner, lender, or compliance expert?"
    ]
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const reading = getReadingStats(article);
  const related = getRelatedArticles(article);
  const paragraphs = article.body.split("\n\n");
  const toolkit = getArticleToolkit(article);

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(article)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: category?.title ?? "Articles", url: `/topics/${article.category}` },
              { name: article.title, url: `/articles/${article.slug}` }
            ])
          )
        }}
      />
      <article className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,760px)_280px]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">On this page</p>
              <nav className="mt-4 grid gap-3 text-sm">
                {article.headings.map((heading) => (
                  <a key={heading.id} href={`#${heading.id}`} className="text-muted-foreground hover:text-foreground">
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="trust">Expert reviewed</Badge>
              <Badge variant="secondary">{category?.title}</Badge>
              <Badge variant="outline">{article.difficulty}</Badge>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-normal sm:text-5xl">{article.title}</h1>
            <p className="mt-5 text-xl leading-8 text-muted-foreground">{article.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {reading.text}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Updated {new Date(article.updatedAt).toLocaleDateString("en-US")}
              </span>
              <span className="flex items-center gap-2">
                <UserRoundCheck className="h-4 w-4" />
                By {article.author}
              </span>
            </div>
            <div className="mt-8">
              <ShareActions title={article.title} />
            </div>

            <Card className="mt-10 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold">Key takeaways</h2>
                <ul className="mt-4 grid gap-3">
                  {article.summary.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <section className="mt-10 overflow-hidden rounded-lg border bg-card">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <BarChart3 className="h-4 w-4" />
                    Visual model
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold">How to think about this decision</h2>
                  <div className="mt-6 grid gap-4">
                    {toolkit.lens.map((item, index) => (
                      <div key={item.title} className="grid gap-3 rounded-lg bg-secondary p-4 sm:grid-cols-[44px_1fr]">
                        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-background font-semibold text-primary">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t bg-[#061512] p-6 text-white dark:border-l dark:border-t-0 sm:p-8 lg:border-l lg:border-t-0">
                  <div className="grid h-full content-between gap-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Decision stack</p>
                      <div className="mt-8 grid gap-4">
                        {["Understand", "Calculate", "Compare", "Decide", "Review"].map((step, index) => (
                          <div key={step} className="flex items-center gap-3">
                            <div className="h-3 rounded-full bg-emerald-300" style={{ width: `${42 + index * 16}%` }} />
                            <span className="w-24 text-sm text-white/80">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-white/70">
                      Strong finance decisions move from definition to math to comparison before action. Skipping the
                      middle steps is where most expensive mistakes begin.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-10 rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-semibold">International reader notes</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Finance terms, taxes, consumer protections, product eligibility, and rates vary by country. Use this
                guide as education, then confirm local rules before applying, borrowing, investing, or filing taxes.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {regions.slice(0, 4).map((region) => (
                  <div key={region.slug} className="rounded-lg bg-secondary p-4">
                    <h3 className="font-semibold">{region.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Examples should be localized to {region.currency} and {region.locale} reader expectations.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {article.category === "credit-cards" ? (
              <section className="mt-10 rounded-lg border bg-card p-6">
                <h2 className="text-2xl font-semibold">Credit card decision table</h2>
                <div className="mt-5 grid gap-4">
                  {creditCardKnowledge.slice(0, 4).map((item) => (
                    <div key={item.slug} className="grid gap-3 rounded-lg bg-secondary p-4 md:grid-cols-[180px_1fr]">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{item.bestFor}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {article.category === "loans" ? (
              <section className="mt-10 rounded-lg border bg-card p-6">
                <h2 className="text-2xl font-semibold">Loan cost checklist</h2>
                <div className="mt-5 grid gap-4">
                  {loanKnowledge.map((item) => (
                    <div key={item.title} className="rounded-lg bg-secondary p-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.warning}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {article.category === "mortgages" ? (
              <section className="mt-10 rounded-lg border bg-card p-6">
                <h2 className="text-2xl font-semibold">Mortgage types at a glance</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {mortgageKnowledge.map((item) => (
                    <div key={item.title} className="rounded-lg bg-secondary p-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.plainEnglish}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <div className="prose-finance mt-10">
              {article.headings.map((heading, index) => (
                <section key={heading.id} id={heading.id}>
                  <h2>{heading.text}</h2>
                  <p>{paragraphs[index] ?? paragraphs[paragraphs.length - 1]}</p>
                  {index === 1 ? <ContextualAd article={article} /> : null}
                </section>
              ))}
            </div>

            <section className="mt-12 rounded-lg border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Route className="h-4 w-4" />
                Step-by-step playbook
              </div>
              <h2 className="mt-3 text-2xl font-semibold">A practical way to use this guide</h2>
              <div className="mt-6 grid gap-4">
                {toolkit.playbook.map((step, index) => (
                  <div key={step} className="grid gap-3 rounded-lg border bg-background p-4 sm:grid-cols-[48px_1fr]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-6 text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 grid gap-5 lg:grid-cols-3">
              {toolkit.examples.map((example) => (
                <Card key={example.scenario} className="h-full">
                  <CardContent className="p-6">
                    <Badge variant="secondary">{example.scenario}</Badge>
                    <h3 className="mt-5 text-lg font-semibold">{example.situation}</h3>
                    <p className="mt-4 text-sm font-semibold text-primary">{example.action}</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{example.why}</p>
                  </CardContent>
                </Card>
              ))}
            </section>

            <section className="mt-12 overflow-hidden rounded-lg border bg-card">
              <div className="grid gap-0 xl:grid-cols-[0.8fr_1.2fr]">
                <div className="border-b bg-secondary p-6 xl:border-b-0 xl:border-r">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Layers3 className="h-4 w-4" />
                    Comparison matrix
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold">What to compare before acting</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Use the same yardstick for each option. Most poor finance choices happen when one product is judged
                    by benefits and another is judged by costs.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-sm">
                    <tbody>
                      {toolkit.comparison.map(([label, value]) => (
                        <tr key={label} className="border-b last:border-b-0">
                          <th className="w-48 bg-background px-5 py-4 text-left font-semibold">{label}</th>
                          <td className="px-5 py-4 leading-6 text-muted-foreground">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="mt-12 grid gap-5 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-300">
                    <AlertTriangle className="h-4 w-4" />
                    Mistakes to avoid
                  </div>
                  <ul className="mt-5 grid gap-3">
                    {toolkit.mistakes.map((mistake) => (
                      <li key={mistake} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <ListChecks className="h-4 w-4" />
                    Reader workbook
                  </div>
                  <ul className="mt-5 grid gap-3">
                    {toolkit.workbook.map((question) => (
                      <li key={question} className="rounded-lg bg-secondary p-4 text-sm leading-6 text-muted-foreground">
                        {question}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section className="mt-12 rounded-lg border bg-card p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <PieChart className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-semibold">Use the numbers</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Calculate total cost, annual value, break-even point, and downside exposure before comparing names.
                  </p>
                </div>
                <div>
                  <Globe2 className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-semibold">Localize the rules</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Confirm currency, tax treatment, eligibility, disclosures, consumer rights, and regulator guidance.
                  </p>
                </div>
                <div>
                  <FileText className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-semibold">Keep records</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Save terms, statements, screenshots, calculator assumptions, and renewal dates in one place.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-12 rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-semibold">People also ask</h2>
              <div className="mt-5 divide-y">
                {article.faqs.map((faq) => (
                  <div key={faq.question} className="py-5">
                    <h3 className="font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold">Sources and references</h2>
              <ol className="mt-4 grid gap-2 text-sm text-muted-foreground">
                {article.citations.map((citation) => (
                  <li key={citation.url}>
                    <a href={citation.url} rel="nofollow noreferrer" className="hover:text-primary">
                      {citation.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-24 rounded-lg border bg-card p-5">
              <p className="text-sm font-semibold">Editorial standard</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This guide is reviewed for clarity, factual accuracy, source quality, and practical usefulness.
              </p>
              <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-primary" />
                  Clear intent
                </span>
                <span className="flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-primary" />
                  Practical checklist
                </span>
                <span className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-primary" />
                  Global context
                </span>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-semibold">Related articles</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
