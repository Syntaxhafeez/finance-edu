export const creditCardKnowledge = [
  {
    title: "Best travel credit cards",
    slug: "best-travel-credit-cards",
    bestFor: "Frequent travelers who can use points, airport benefits, and travel protections.",
    benefits: ["Transferable points", "Airport lounge access", "Trip delay coverage", "No foreign transaction fees"],
    watchouts: ["High annual fees", "Complex reward rules", "Poor value if you carry a balance"],
    visualRule: "Travel card value = annual travel credits + lounge use + point value - annual fee."
  },
  {
    title: "Best cashback credit cards",
    slug: "best-cashback-credit-cards",
    bestFor: "People who want simple rewards without learning airline or hotel programs.",
    benefits: ["Simple redemption", "Good everyday value", "Often low or no annual fee", "Easy to compare"],
    watchouts: ["Category caps", "Rotating rewards", "Lower upside than premium travel points"],
    visualRule: "Cashback card value = annual spending x reward rate - annual fee."
  },
  {
    title: "Best student credit cards",
    slug: "best-student-credit-cards",
    bestFor: "Students building credit history with modest spending and limited income.",
    benefits: ["Credit-building path", "Low barrier to approval", "Student-friendly rewards", "Credit education tools"],
    watchouts: ["Low limits", "High APR", "Late payments can damage credit early"],
    visualRule: "Student card priority = pay on time + keep utilization low + avoid fees."
  },
  {
    title: "Balance transfer cards",
    slug: "balance-transfer-cards",
    bestFor: "Borrowers moving existing high-interest card debt to a temporary 0% APR window.",
    benefits: ["Interest savings", "Clear payoff deadline", "Debt consolidation"],
    watchouts: ["Transfer fees", "Retroactive-like pain after promo ends", "New purchases may accrue interest"],
    visualRule: "Savings = avoided interest - transfer fee - any new fees."
  },
  {
    title: "Secured credit cards",
    slug: "secured-credit-cards",
    bestFor: "People rebuilding credit or starting from no credit history.",
    benefits: ["Approval path with deposit", "Reports to bureaus", "Can graduate to unsecured"],
    watchouts: ["Deposit required", "Fees vary widely", "Not all cards graduate automatically"],
    visualRule: "Good secured card = low fees + bureau reporting + upgrade path."
  }
];

export const loanKnowledge = [
  {
    title: "Personal loans",
    useCase: "Debt consolidation, large planned expenses, medical bills, or home projects.",
    compare: ["APR", "Origination fee", "Prepayment penalty", "Loan term", "Funding speed"],
    warning: "A lower monthly payment can still cost more if the term is much longer."
  },
  {
    title: "Home loans",
    useCase: "Buying a primary residence, refinancing, or accessing home equity responsibly.",
    compare: ["Interest rate", "APR", "Down payment", "Closing costs", "Fixed vs adjustable rate"],
    warning: "Do not compare mortgages by rate alone; fees and points can change the real cost."
  },
  {
    title: "Student loans",
    useCase: "Financing education after grants, scholarships, work income, and family contributions.",
    compare: ["Federal vs private", "Interest subsidy", "Repayment plans", "Cosigner release", "Forbearance rules"],
    warning: "Private loans may lack federal repayment protections."
  },
  {
    title: "Auto loans",
    useCase: "Buying a vehicle while preserving enough cash for insurance, repairs, and emergencies.",
    compare: ["APR", "Loan-to-value", "Term length", "Dealer add-ons", "Total interest"],
    warning: "Long terms can hide affordability problems and increase negative equity risk."
  }
];

export const mortgageKnowledge = [
  {
    title: "30-year fixed mortgage",
    plainEnglish: "A stable payment over a long term, usually with a higher total interest cost.",
    bestFor: "Buyers who want payment predictability and lower monthly obligations."
  },
  {
    title: "15-year fixed mortgage",
    plainEnglish: "A faster payoff schedule with higher payments and usually lower total interest.",
    bestFor: "Buyers with strong cash flow who want to reduce lifetime interest."
  },
  {
    title: "Adjustable-rate mortgage",
    plainEnglish: "A loan with an initial fixed period and later rate adjustments.",
    bestFor: "Advanced borrowers who understand reset risk and have a realistic exit plan."
  },
  {
    title: "Refinance",
    plainEnglish: "Replacing an existing mortgage to change rate, term, or loan structure.",
    bestFor: "Homeowners who can recover closing costs through meaningful savings."
  }
];

export const contentPlaybooks = [
  {
    title: "Credit card learning path",
    steps: ["Credit score basics", "APR vs rewards", "Travel cards", "Cashback cards", "Student cards", "Balance transfer strategy"]
  },
  {
    title: "Loan learning path",
    steps: ["APR and fees", "Debt-to-income", "Personal loans", "Home loans", "Refinancing", "Payoff planning"]
  },
  {
    title: "Investing learning path",
    steps: ["Risk and return", "Diversification", "ETFs", "Mutual funds", "Retirement accounts", "Tax-aware investing"]
  }
];

export const expandedGlossary = [
  ["APR", "Annual percentage rate. The yearly cost of borrowing, including interest and certain fees."],
  ["APY", "Annual percentage yield. The yearly return on deposits after compounding."],
  ["Credit utilization", "The share of available revolving credit currently being used."],
  ["Grace period", "Time between statement close and payment due date when purchases may avoid interest."],
  ["Balance transfer", "Moving debt from one card or loan to another, often for a promotional APR."],
  ["Debt-to-income ratio", "Monthly debt payments divided by gross monthly income."],
  ["Loan origination fee", "A fee charged to create or process a loan, often deducted from funds."],
  ["Points", "Upfront mortgage fees paid to lower the interest rate."],
  ["Escrow", "An account often used to collect property taxes and insurance with mortgage payments."],
  ["Expense ratio", "The annual operating cost of a fund as a percentage of assets."],
  ["ETF", "An exchange-traded fund that holds a basket of assets and trades like a stock."],
  ["Mutual fund", "A pooled investment that typically prices once per trading day."],
  ["Index fund", "A fund designed to track a market index rather than pick individual winners."],
  ["Emergency fund", "Cash reserved for unexpected expenses or income disruption."],
  ["Amortization", "The process of paying down debt through scheduled principal and interest payments."],
  ["Compound interest", "Interest earned on both original principal and previously earned interest."],
  ["Capital gains", "Profit from selling an asset for more than its purchase price."],
  ["Dividend", "A company distribution to shareholders, usually paid in cash or shares."],
  ["Inflation", "A broad rise in prices that reduces purchasing power over time."],
  ["Refinancing", "Replacing existing debt with a new loan, usually to improve rate, term, or payment."]
];

export const topicVisualGuides: Record<string, { title: string; blocks: string[]; checklist: string[] }> = {
  "credit-cards": {
    title: "How to choose a credit card visually",
    blocks: ["Rewards fit", "Annual fee math", "APR risk", "Credit score fit", "Protections and perks"],
    checklist: ["Pay statement balance in full", "Keep utilization low", "Match rewards to real spending", "Read fee table before applying"]
  },
  loans: {
    title: "How to compare loans without getting trapped",
    blocks: ["APR", "Fees", "Term", "Monthly payment", "Total interest"],
    checklist: ["Compare total repayment", "Check prepayment rules", "Avoid borrowing for wants without payoff plan", "Keep emergency cash"]
  },
  mortgages: {
    title: "Mortgage decision map",
    blocks: ["Home price", "Down payment", "Rate", "Closing costs", "Insurance and taxes"],
    checklist: ["Stress-test payment", "Compare loan estimates", "Understand points", "Avoid draining all cash at closing"]
  },
  banking: {
    title: "Bank account comparison map",
    blocks: ["Fees", "APY", "ATM access", "Insurance", "Digital tools"],
    checklist: ["Avoid monthly fees", "Confirm FDIC or NCUA insurance", "Check transfer limits", "Separate bills and savings"]
  },
  investing: {
    title: "Investment decision map",
    blocks: ["Goal", "Time horizon", "Risk", "Fees", "Tax location"],
    checklist: ["Diversify broadly", "Keep costs low", "Automate contributions", "Do not chase recent winners"]
  }
};

export const categoryDeepSections = [
  {
    title: "Start with the reader problem",
    body:
      "Before comparing products or strategies, identify the money problem: reduce cost, improve safety, increase return potential, build credit, manage cash flow, or prepare for a future goal. Good financial education starts with the decision, not the product."
  },
  {
    title: "Understand the cost stack",
    body:
      "Most finance decisions have visible and hidden costs. Credit cards have APRs, annual fees, late fees, and foreign transaction fees. Loans have origination fees, points, insurance, and total interest. Funds have expense ratios, spreads, and tax drag."
  },
  {
    title: "Use numbers, not vibes",
    body:
      "A decision becomes clearer when readers model it. Calculate monthly payment, total repayment, breakeven point, opportunity cost, expected reward value, savings rate, tax impact, or downside risk before acting."
  },
  {
    title: "Know who should avoid it",
    body:
      "Every product or strategy has a wrong-fit reader. Travel cards are weak for people who carry balances. Adjustable mortgages are risky for people who cannot handle reset shocks. Crypto is unsuitable for money needed soon."
  },
  {
    title: "Build a maintenance habit",
    body:
      "Finance decisions are not one-time events. Readers should review statements, rebalance portfolios, revisit insurance coverage, update budgets, compare rates, check credit reports, and refresh goals as life changes."
  }
];

export const visualLearningModels = [
  {
    title: "Credit card value model",
    layers: ["Spending", "Rewards", "Fees", "Interest", "Net value"],
    lesson:
      "Rewards sit on top of spending behavior. If interest enters the model, it can crush the value of points or cashback."
  },
  {
    title: "Loan cost model",
    layers: ["Principal", "APR", "Fees", "Term", "Total repayment"],
    lesson:
      "The monthly payment is only one slice. Term length and fees can make a loan look affordable while increasing total cost."
  },
  {
    title: "Investing growth model",
    layers: ["Contributions", "Time", "Return", "Fees", "Volatility"],
    lesson:
      "Long-term wealth comes from repeated contributions, time in the market, low costs, and staying invested through volatility."
  }
];
