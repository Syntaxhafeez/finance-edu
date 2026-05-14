import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  HeartPulse,
  Home,
  Landmark,
  Plane,
  ShieldCheck,
  Stethoscope,
  UsersRound
} from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { ContextualAd } from "@/components/monetization/contextual-ad";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { articles, getArticleBySlug } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insurance Guide: Life, Health, Auto, Home, Travel, Claims, and Company Comparison",
  description:
    "A detailed insurance education hub covering life, health, auto, home, travel, business insurance, company comparison, claims, exclusions, and country-specific checks.",
  path: "/insurance",
  keywords: ["insurance guide", "health insurance", "term life insurance", "auto insurance", "insurance company comparison"]
});

const insuranceTypes = [
  {
    title: "Term life insurance",
    icon: UsersRound,
    bestFor: "Families, homeowners, business owners, and anyone whose income supports another person.",
    whatItCovers:
      "A death benefit during a fixed term. It is usually used to replace income, cover debts, fund children’s education, or protect a mortgage period.",
    compare:
      "Coverage amount, term length, premium lock, medical underwriting, riders, claim settlement record, and beneficiary update process.",
    avoid:
      "Buying too little cover, hiding health facts, mixing protection with confusing investment promises, or forgetting to update nominees/beneficiaries."
  },
  {
    title: "Health insurance",
    icon: HeartPulse,
    bestFor: "Individuals and families who need protection from hospital, surgery, emergency, prescription, or chronic-care costs.",
    whatItCovers:
      "Medical care according to the policy: hospitalization, doctor visits, prescription drugs, surgery, maternity, mental health, or preventive care depending on plan rules.",
    compare:
      "Premium, deductible, copay, coinsurance, out-of-pocket maximum, hospital network, prescription list, waiting periods, sub-limits, room rent limits, and renewal terms.",
    avoid:
      "Choosing only the cheapest premium, ignoring network hospitals, missing exclusions, or assuming every treatment is automatically covered."
  },
  {
    title: "Auto and motor insurance",
    icon: ShieldCheck,
    bestFor: "Vehicle owners, drivers, families with cars, commercial vehicles, and financed vehicle buyers.",
    whatItCovers:
      "Liability, collision, comprehensive damage, theft, third-party injury, personal accident, roadside support, and add-ons depending on country and policy.",
    compare:
      "Liability limits, deductible, own-damage cover, no-claim bonus, cashless garage network, IDV/vehicle value, add-ons, and claim service speed.",
    avoid:
      "Reducing cover too far to save premium, skipping flood/theft add-ons where risk is real, or accepting dealer add-ons without checking price."
  },
  {
    title: "Homeowners, renters, and property insurance",
    icon: Home,
    bestFor: "Homeowners, landlords, renters, and anyone with valuable belongings or property-liability exposure.",
    whatItCovers:
      "Building damage, contents, theft, fire, weather events, liability, temporary living costs, and landlord/renter-specific risks depending on policy.",
    compare:
      "Rebuild value, contents limit, liability cover, exclusions, flood/earthquake rules, deductible, claim documentation, and insurer inspection process.",
    avoid:
      "Insuring only market value instead of rebuild cost, ignoring flood or earthquake exclusions, or keeping no home inventory."
  },
  {
    title: "Travel insurance",
    icon: Plane,
    bestFor: "International travelers, families, students abroad, frequent flyers, and trips with prepaid non-refundable costs.",
    whatItCovers:
      "Trip cancellation, delay, baggage loss, emergency medical care, evacuation, rental car cover, missed connections, and travel assistance.",
    compare:
      "Medical limit, evacuation limit, pre-existing condition rules, covered cancellation reasons, baggage limits, claim documents, and whether card benefits already cover you.",
    avoid:
      "Buying after a known event, assuming adventure sports are covered, or relying on credit card insurance without reading eligibility terms."
  },
  {
    title: "Business and professional insurance",
    icon: Building2,
    bestFor: "Freelancers, startups, small businesses, agencies, consultants, and companies with employees or client contracts.",
    whatItCovers:
      "General liability, professional liability, errors and omissions, cyber risk, workers’ compensation, key-person cover, property, and business interruption.",
    compare:
      "Contract requirements, revenue exposure, client data risk, employee count, exclusions, retroactive dates, aggregate limit, and claim defense support.",
    avoid:
      "Buying generic cover that misses actual business risk, ignoring cyber exposure, or letting policies lapse during client projects."
  }
];

const companyShortlist = [
  {
    region: "India",
    life: ["LIC", "HDFC Life", "ICICI Prudential Life", "SBI Life", "Max Life", "Tata AIA Life"],
    health: ["Star Health", "HDFC ERGO", "ICICI Lombard", "Niva Bupa", "Care Health", "Aditya Birla Health"],
    note: "Use IRDAI annual reports, claim settlement data, grievance records, hospital network, solvency, and product wording before ranking any insurer."
  },
  {
    region: "United States",
    life: ["Northwestern Mutual", "New York Life", "MassMutual", "Guardian", "Pacific Life", "State Farm"],
    health: ["UnitedHealthcare", "Kaiser Permanente", "Aetna", "Cigna", "Blue Cross Blue Shield plans", "Humana"],
    note: "Check state licensing, NAIC complaint data, AM Best or other financial-strength ratings, network quality, and marketplace plan details."
  },
  {
    region: "United Kingdom",
    life: ["Legal & General", "Aviva", "Royal London", "Vitality", "Zurich", "AIG Life"],
    health: ["Bupa", "AXA Health", "Aviva", "Vitality", "WPA", "The Exeter"],
    note: "Check FCA authorization, policy documents, exclusions, underwriting rules, claims support, and whether NHS access changes your private-cover needs."
  }
];

const companyScorecard = [
  ["Claims", "Claim settlement ratio, average claim time, repudiation reasons, complaint handling, appeal process"],
  ["Financial strength", "Solvency ratio, rating strength, capital position, reinsurance support, long operating history"],
  ["Policy quality", "Clear wording, fewer hidden exclusions, strong renewal terms, useful riders, realistic limits"],
  ["Network and service", "Hospitals, garages, repair partners, digital claims, local branches, emergency support"],
  ["Price stability", "Premium today, renewal hikes, age-band pricing, deductible changes, no-claim bonus treatment"],
  ["Fit", "Your age, city, family size, job risk, travel pattern, health history, dependents, debts, and assets"]
];

const claimSteps = [
  "Save policy number, insurer helpline, agent details, hospital/garage network, and emergency documents before a claim happens.",
  "Notify the insurer quickly. Late intimation can create avoidable claim disputes in many policy types.",
  "Collect proof: bills, prescriptions, discharge summary, FIR/police report where required, photos, repair estimates, travel documents, or death certificate.",
  "Use cashless/network options when available, but still check exclusions, deductibles, sub-limits, and non-payable items.",
  "Track claim reference numbers, emails, calls, surveyor visits, approvals, rejection reasons, and appeal deadlines.",
  "Escalate through grievance channels or the regulator/ombudsman process if a valid claim is unfairly delayed or denied."
];

const buyingRules = [
  {
    title: "Buy protection first",
    body: "Life and health cover should protect against large financial shocks. Do not start with investment-linked features until pure protection needs are clear."
  },
  {
    title: "Compare worst-case cost",
    body: "A low premium can still be expensive if deductibles, sub-limits, exclusions, or claim friction are high."
  },
  {
    title: "Read exclusions before benefits",
    body: "Benefits sell the policy. Exclusions decide whether the insurer pays when the situation becomes stressful."
  },
  {
    title: "Match cover to life stage",
    body: "Single adults, young families, retirees, business owners, homeowners, and frequent travelers need different insurance stacks."
  }
];

const redFlags = [
  "Pressure to buy today without sharing policy wording.",
  "Very cheap premium with unusually low limits, narrow network, or high deductibles.",
  "Vague answers about waiting periods, exclusions, claim documents, or renewal hikes.",
  "Investment returns presented as guaranteed when they are not.",
  "Agent refuses to disclose commission, cancellation rules, or surrender charges.",
  "Company has poor complaint patterns, weak service reviews, or unclear claim escalation."
];

export default function InsurancePage() {
  const insuranceArticles = articles.filter((article) => article.category === "insurance");
  const termArticle = getArticleBySlug("term-life-insurance-explained") ?? insuranceArticles[0] ?? articles[0];

  return (
    <div className="container-page py-10 sm:py-12">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Badge variant="trust">Insurance decision center</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">
            Insurance guide for life, health, vehicle, home, travel, and business protection
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Insurance is not just a premium. It is a contract that decides who carries a financial shock when illness,
            death, accident, theft, disability, litigation, travel disruption, or property damage happens.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/articles/term-life-insurance-explained" className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
              Term life guide
            </Link>
            <Link href="/articles/health-insurance-costs-explained" className="rounded-md border px-4 py-2.5 text-sm font-semibold hover:bg-secondary">
              Health cost guide
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border bg-[#061512] p-5 text-white sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Coverage stack</p>
          <div className="mt-7 grid gap-4">
            {[
              ["Income protection", "Life, disability, emergency fund"],
              ["Medical protection", "Health plan, hospital network, prescriptions"],
              ["Asset protection", "Home, auto, contents, liability"],
              ["Mobility protection", "Travel, overseas medical, baggage"],
              ["Business protection", "Liability, cyber, key person, interruption"]
            ].map(([title, body], index) => (
              <div key={title} className="grid grid-cols-[44px_1fr] gap-4 rounded-lg bg-white/7 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-300 text-sm font-semibold text-emerald-950">
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-semibold">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-white/70">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <ShieldCheck className="h-4 w-4" />
          What to buy and why
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal">Major insurance types explained clearly</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {insuranceTypes.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="h-full overflow-hidden">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <Badge variant="secondary">{item.bestFor.split(" ")[0]} cover</Badge>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.bestFor}</p>
                  <div className="mt-5 grid gap-3">
                    <div className="rounded-lg bg-secondary p-4">
                      <p className="text-sm font-semibold">What it covers</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.whatItCovers}</p>
                    </div>
                    <div className="rounded-lg bg-secondary p-4">
                      <p className="text-sm font-semibold">How to compare</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.compare}</p>
                    </div>
                    <div className="rounded-lg bg-amber-500/10 p-4">
                      <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">Avoid</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.avoid}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <ContextualAd article={termArticle} />

      <section className="mt-14 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Building2 className="h-4 w-4" />
            Company selection
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal">Which insurance company is better?</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            No insurer is best for every person. A strong company for term life may not be the best health insurer in
            your city. A cheap motor insurer may have weak repair support. Use companies as a shortlist, then verify
            the actual policy wording, claim history, network, and local service quality.
          </p>
        </div>
        <div className="grid gap-5">
          {companyShortlist.map((region) => (
            <article key={region.region} className="rounded-lg border bg-card p-5">
              <h3 className="text-xl font-semibold">{region.region} insurer examples to compare</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-sm font-semibold">Life insurance examples</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {region.life.map((company) => (
                      <span key={company} className="rounded-md border bg-background px-2.5 py-1 text-xs font-medium">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-sm font-semibold">Health insurance examples</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {region.health.map((company) => (
                      <span key={company} className="rounded-md border bg-background px-2.5 py-1 text-xs font-medium">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{region.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 overflow-hidden rounded-lg border bg-card">
        <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b bg-secondary p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <ClipboardCheck className="h-4 w-4" />
              Scorecard
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal">How to rank insurers without guessing</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Do not rank an insurer only by brand name or premium. Give each company a score across claims, policy
              quality, service, financial strength, and fit.
            </p>
          </div>
          <div className="divide-y">
            {companyScorecard.map(([label, body]) => (
              <div key={label} className="grid gap-2 p-5 sm:grid-cols-[170px_1fr]">
                <h3 className="font-semibold">{label}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Stethoscope className="h-4 w-4" />
              Health insurance decision guide
            </div>
            <h2 className="mt-3 text-2xl font-semibold">How to choose a health plan</h2>
            <div className="mt-5 grid gap-3">
              {[
                "Start with hospitals and doctors you actually use, then check network coverage.",
                "Compare premium plus expected out-of-pocket cost, not premium alone.",
                "Check waiting periods for pre-existing conditions, maternity, specific illnesses, and senior-care restrictions.",
                "Review room-rent limits, disease sub-limits, consumables, copay, restoration benefit, and no-claim bonus.",
                "For family cover, check whether one large claim can exhaust the shared limit."
              ].map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <BadgeCheck className="h-4 w-4" />
              Term life decision guide
            </div>
            <h2 className="mt-3 text-2xl font-semibold">How to choose term cover</h2>
            <div className="mt-5 grid gap-3">
              {[
                "Estimate income replacement, debts, children’s education, spouse support, and final expenses.",
                "Subtract existing liquid assets and other protection before choosing the coverage amount.",
                "Pick a term that covers the risk period, not your entire life by default.",
                "Compare claim record, premium guarantee, riders, underwriting rules, and nominee service.",
                "Keep the policy simple unless a rider clearly solves a real risk."
              ].map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-14 rounded-lg border bg-card p-5 sm:p-7">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <FileSearch className="h-4 w-4" />
          Claim preparation
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal">What to do before and during a claim</h2>
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {claimSteps.map((step, index) => (
            <div key={step} className="grid gap-3 rounded-lg border bg-background p-4 sm:grid-cols-[44px_1fr]">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border bg-card p-5 sm:p-6">
          <h2 className="text-2xl font-semibold">Insurance buying rules that prevent bad decisions</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {buyingRules.map((rule) => (
              <div key={rule.title} className="rounded-lg bg-secondary p-4">
                <h3 className="font-semibold">{rule.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{rule.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-card p-5 sm:p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-300">
            <AlertTriangle className="h-4 w-4" />
            Red flags
          </div>
          <div className="mt-5 grid gap-3">
            {redFlags.map((flag) => (
              <p key={flag} className="rounded-lg bg-amber-500/10 p-3 text-sm leading-6 text-muted-foreground">
                {flag}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-semibold tracking-normal">Insurance guides to read next</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {insuranceArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-lg border bg-secondary/40 p-5 sm:p-7">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <Landmark className="h-4 w-4" />
          Source checks
        </div>
        <h2 className="mt-3 text-2xl font-semibold">Where to verify insurer quality</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["NAIC consumer tools", "Company complaints, licenses, financial health, and insurance basics.", "https://content.naic.org/consumer"],
            ["NAIC health insurance guide", "Health plan shopping questions, premium vs out-of-pocket cost, and network checks.", "https://content.naic.org/consumer/health-insurance.htm"],
            ["IRDAI annual reports", "India insurance-sector reports, claim data, policyholder context, and regulator publications.", "https://irdai.gov.in/annual-reports"]
          ].map(([title, body, href]) => (
            <a key={title} href={href} className="rounded-lg border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-premium" rel="noreferrer">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Open source <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
