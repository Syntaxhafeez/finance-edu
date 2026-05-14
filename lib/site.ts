import {
  BadgeDollarSign,
  Banknote,
  BarChart3,
  Bitcoin,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CircleDollarSign,
  Coins,
  CreditCard,
  FileText,
  GraduationCap,
  HandCoins,
  Home,
  Landmark,
  LineChart,
  Newspaper,
  PiggyBank,
  ReceiptText,
  Scale,
  ShieldCheck,
  TrendingUp,
  WalletCards
} from "lucide-react";

export const siteConfig = {
  name: "CashPivot",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cashpivot.online",
  description: "Clear, trusted finance education for everyday decisions and long-term wealth.",
  editorialEmail: "editors@cashpivot.online"
};

export const categories = [
  { title: "Finance News", slug: "finance-news", icon: Newspaper, intent: "Fresh market and money news explained clearly." },
  { title: "Personal Finance", slug: "personal-finance", icon: WalletCards, intent: "Budgeting, saving, debt, and money habits." },
  { title: "Credit Cards", slug: "credit-cards", icon: CreditCard, intent: "Rewards, interest, credit score, and card comparisons." },
  { title: "Debit Cards", slug: "debit-cards", icon: WalletCards, intent: "Everyday banking cards, fees, and security." },
  { title: "Banking", slug: "banking", icon: Landmark, intent: "Checking, savings, CDs, digital banks, and fees." },
  { title: "Investing", slug: "investing", icon: TrendingUp, intent: "Portfolios, risk, asset allocation, and long-term strategy." },
  { title: "Stock Market", slug: "stock-market", icon: BarChart3, intent: "Stocks, indexes, market mechanics, and valuation." },
  { title: "Cryptocurrency", slug: "cryptocurrency", icon: Bitcoin, intent: "Crypto basics, risk, wallets, and market structure." },
  { title: "Loans", slug: "loans", icon: HandCoins, intent: "Personal loans, interest, repayment, and eligibility." },
  { title: "Mortgages", slug: "mortgages", icon: Home, intent: "Home loans, refinancing, rates, and affordability." },
  { title: "Insurance", slug: "insurance", icon: ShieldCheck, intent: "Coverage, premiums, claims, and risk planning." },
  { title: "Taxes", slug: "taxes", icon: ReceiptText, intent: "Tax basics, deductions, planning, and filing." },
  { title: "Retirement", slug: "retirement", icon: PiggyBank, intent: "401(k), IRA, pensions, and income planning." },
  { title: "Budgeting", slug: "budgeting", icon: Calculator, intent: "Practical systems for monthly money control." },
  { title: "Saving Money", slug: "saving-money", icon: Coins, intent: "Emergency funds, goals, and savings strategies." },
  { title: "Business Finance", slug: "business-finance", icon: BriefcaseBusiness, intent: "Cash flow, funding, margins, and planning." },
  { title: "Startup Finance", slug: "startup-finance", icon: CircleDollarSign, intent: "Runway, fundraising, unit economics, and burn." },
  { title: "Accounting Basics", slug: "accounting-basics", icon: FileText, intent: "Statements, bookkeeping, accruals, and ratios." },
  { title: "Financial Literacy", slug: "financial-literacy", icon: GraduationCap, intent: "Beginner education for confident money choices." },
  { title: "Trading", slug: "trading", icon: LineChart, intent: "Markets, risk management, orders, and discipline." },
  { title: "ETFs", slug: "etfs", icon: BadgeDollarSign, intent: "Exchange-traded funds, costs, holdings, and taxes." },
  { title: "Mutual Funds", slug: "mutual-funds", icon: BookOpen, intent: "Fund types, fees, benchmarks, and selection." },
  { title: "Real Estate Finance", slug: "real-estate-finance", icon: Building2, intent: "Property returns, leverage, cap rates, and rentals." },
  { title: "Passive Income", slug: "passive-income", icon: Banknote, intent: "Income streams, tradeoffs, and realistic planning." },
  { title: "Side Hustles", slug: "side-hustles", icon: BriefcaseBusiness, intent: "Extra income ideas, costs, and taxes." },
  { title: "Economics", slug: "economics", icon: Scale, intent: "Inflation, rates, labor, GDP, and policy explained." }
] as const;

export const primaryNav = [
  { title: "Guides", href: "/learn/beginner-guides" },
  { title: "Calculators", href: "/calculators" },
  { title: "Glossary", href: "/glossary" },
  { title: "Compare", href: "/compare" },
  { title: "Editorial Policy", href: "/editorial-policy" }
];
