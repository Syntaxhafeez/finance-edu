export const regions = [
  {
    name: "United States",
    slug: "united-states",
    locale: "en-US",
    currency: "USD",
    audience: "US readers comparing credit cards, banking products, mortgages, investing accounts, taxes, and retirement plans.",
    regulatorNotes: ["SEC investor education", "CFPB consumer finance tools", "FDIC deposit insurance", "State privacy laws such as CCPA/CPRA"],
    contentAngles: ["Credit score and FICO basics", "401(k), IRA, Roth IRA", "Mortgage APR and closing costs", "FDIC-insured savings"]
  },
  {
    name: "India",
    slug: "india",
    locale: "en-IN",
    currency: "INR",
    audience: "Indian readers learning cards, UPI, banking, SIP investing, home loans, income tax, insurance, and retirement planning.",
    regulatorNotes: ["RBI financial education", "SEBI investor awareness", "IRDAI insurance literacy", "Digital Personal Data Protection Act notice principles"],
    contentAngles: ["Credit card reward value in rupees", "SIP and mutual fund basics", "Home loan EMI planning", "Tax-saving and emergency funds"]
  },
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    locale: "en-GB",
    currency: "GBP",
    audience: "UK readers comparing bank accounts, ISAs, mortgages, credit cards, pensions, insurance, and investing basics.",
    regulatorNotes: ["FCA fair, clear and not misleading communications", "FSCS protection awareness", "ICO UK GDPR and PECR cookie rules"],
    contentAngles: ["ISA and pension basics", "Representative APR", "Mortgage affordability", "Savings protection and bank switching"]
  },
  {
    name: "European Union",
    slug: "european-union",
    locale: "en-IE",
    currency: "EUR",
    audience: "EU readers looking for multilingual-friendly finance education, cookie rights, savings, loans, cards, investing, and consumer protection context.",
    regulatorNotes: ["GDPR transparency and consent", "ePrivacy cookie consent", "local national regulators", "cross-border consumer protection"],
    contentAngles: ["SEPA payments", "Card fees and FX charges", "Savings and inflation", "ETF basics and tax residency caveats"]
  },
  {
    name: "Global",
    slug: "global",
    locale: "en",
    currency: "USD",
    audience: "International readers who need country-aware explanations before applying local rules.",
    regulatorNotes: ["Use local regulator sources", "Avoid personalized advice", "Compare product terms locally"],
    contentAngles: ["Multi-currency examples", "Country-specific disclaimers", "Local tax caveats", "Global investing vocabulary"]
  }
];

export const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar", locale: "en-US" },
  { code: "INR", symbol: "₹", name: "Indian Rupee", locale: "en-IN" },
  { code: "GBP", symbol: "£", name: "British Pound", locale: "en-GB" },
  { code: "EUR", symbol: "€", name: "Euro", locale: "en-IE" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham", locale: "en-AE" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar", locale: "en-CA" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", locale: "en-AU" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar", locale: "en-SG" }
];

export const globalSeoPlaybook = [
  {
    title: "Country-specific money terms",
    body:
      "The same financial idea can use different words by country: checking account and current account, 401(k) and pension, EMI and monthly payment, APY and AER."
  },
  {
    title: "Local examples matter",
    body:
      "A useful guide should use the reader's currency, regulator context, product names, and tax caveats instead of pretending one country's rules apply everywhere."
  },
  {
    title: "Regulator and source checks",
    body:
      "Before acting, readers should confirm rules with local regulators, official product documents, and qualified professionals for tax, legal, insurance, and investment questions."
  },
  {
    title: "No one-size-fits-all advice",
    body:
      "Income, family structure, debt, country, tax residency, risk tolerance, and account access can change the right financial choice."
  }
];

export const countryContentMatrix = [
  ["Credit cards", "Travel, cashback, student, secured, balance transfer", "APR, fees, FX charges, eligibility, rewards value"],
  ["Loans", "Personal, home, student, auto, business", "APR, EMI/payment, total repayment, fees, prepayment rules"],
  ["Banking", "Savings, current/checking, CDs/fixed deposits, transfers", "Insurance limits, APY/APR, charges, liquidity"],
  ["Investing", "ETFs, mutual funds, SIPs, pensions, retirement accounts", "Fees, tax residency, risk, diversification"],
  ["Taxes", "Income tax, deductions, capital gains, side-hustle tax", "Country-specific rules, filing dates, professional advice"],
  ["Insurance", "Health, life, auto, home, travel", "Coverage limits, exclusions, premiums, claims process"]
];

export const complianceFramework = [
  {
    region: "EU / EEA",
    rules: "GDPR transparency, lawful basis, data subject rights, and ePrivacy-style consent for non-essential cookies.",
    siteNeeds: "Readers can review privacy choices, cookie preferences, access rights, correction rights, and deletion request options."
  },
  {
    region: "United Kingdom",
    rules: "UK GDPR, PECR cookie rules, and FCA-style principle that financial communications should be fair, clear, and not misleading.",
    siteNeeds: "Readers should receive clear risk language, balanced benefits and warnings, and simple privacy controls."
  },
  {
    region: "United States",
    rules: "State privacy rights may apply, including California consumer privacy rights. Financial education should avoid misleading product claims.",
    siteNeeds: "Readers can review privacy rights, opt-out choices where available, and education-only limitations."
  },
  {
    region: "India",
    rules: "DPDP-style notice and purpose limitation principles, plus finance education that respects local regulator context.",
    siteNeeds: "Readers can review data-use notices, consent choices, India-specific examples, and INR calculators."
  }
];

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
