import readingTime from "reading-time";
import { categories } from "@/lib/site";
import { slugify } from "@/lib/utils";

export type Article = {
  title: string;
  seoTitle: string;
  description: string;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  reviewer: string;
  publishedAt: string;
  updatedAt: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  summary: string[];
  headings: { id: string; text: string }[];
  faqs: { question: string; answer: string }[];
  body: string;
  citations: { label: string; url: string }[];
};

export const authors = [
  {
    name: "Maya Srinivasan",
    slug: "maya-srinivasan",
    role: "Senior Personal Finance Editor",
    bio: "Maya covers household finance, banking, credit, and consumer decision-making with a focus on plain-English guidance.",
    credentials: "CFP coursework, 11 years in finance editorial"
  },
  {
    name: "Daniel Brooks",
    slug: "daniel-brooks",
    role: "Markets and Investing Analyst",
    bio: "Daniel explains market structure, portfolio construction, ETFs, and retirement investing for long-term readers.",
    credentials: "CFA charterholder, former portfolio analyst"
  }
];

export const articles: Article[] = [
  {
    title: "How Compound Interest Works: The Plain-English Guide",
    seoTitle: "How Compound Interest Works: Formula, Examples, and Calculator",
    description:
      "Learn how compound interest grows money over time, how the formula works, and how small changes in rate, time, and contributions affect wealth.",
    slug: "how-compound-interest-works",
    category: "financial-literacy",
    tags: ["compound interest", "saving money", "investing basics"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-01-10",
    updatedAt: "2026-05-01",
    difficulty: "Beginner",
    summary: [
      "Compound interest means interest earns more interest over time.",
      "Time usually matters more than perfect timing or tiny rate differences.",
      "Regular contributions can turn a good savings habit into a serious wealth engine."
    ],
    headings: [
      { id: "definition", text: "What compound interest means" },
      { id: "formula", text: "The compound interest formula" },
      { id: "example", text: "A realistic example" },
      { id: "mistakes", text: "Common mistakes to avoid" }
    ],
    faqs: [
      {
        question: "Is compound interest good or bad?",
        answer:
          "It can be either. Compound interest helps when you earn it on savings or investments, but it can hurt when expensive debt compounds against you."
      },
      {
        question: "How often should interest compound?",
        answer:
          "More frequent compounding is slightly better for savers, but the interest rate, time horizon, fees, and contribution amount usually matter more."
      }
    ],
    body:
      "Compound interest is the process of earning interest on your original money and on interest that has already been added. That creates a growth curve that starts slowly and becomes more powerful with time.\n\nThe basic formula is A = P(1 + r/n)^(nt). A is the ending balance, P is principal, r is the annual rate, n is the number of compounding periods per year, and t is time in years.\n\nImagine investing $5,000 at a 7% annual return for 30 years with no extra contributions. The ending value is about $38,061. Add $250 per month and the ending value becomes dramatically larger because each contribution gets its own runway to compound.\n\nThe biggest mistakes are waiting too long, ignoring fees, assuming returns are guaranteed, and using high-interest debt while trying to invest. A practical plan starts with emergency savings, debt control, and automated contributions.",
    citations: [
      { label: "Investor.gov compound interest calculator", url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" },
      { label: "Consumer Financial Protection Bureau savings resources", url: "https://www.consumerfinance.gov/consumer-tools/saving-money/" }
    ]
  },
  {
    title: "ETF vs Mutual Fund: Which Investment Is Better for Long-Term Investors?",
    seoTitle: "ETF vs Mutual Fund: Differences, Fees, Taxes, and Examples",
    description:
      "Compare ETFs and mutual funds across costs, taxes, liquidity, minimums, and portfolio use cases before choosing an investment vehicle.",
    slug: "etf-vs-mutual-fund",
    category: "etfs",
    tags: ["ETFs", "mutual funds", "investing"],
    author: "Daniel Brooks",
    reviewer: "Maya Srinivasan",
    publishedAt: "2026-02-14",
    updatedAt: "2026-04-22",
    difficulty: "Intermediate",
    summary: [
      "ETFs trade intraday like stocks; mutual funds usually price once per day.",
      "Index ETFs are often tax efficient and low cost, but good mutual funds can also be excellent.",
      "The best choice depends on account type, investing habits, costs, and available fund lineup."
    ],
    headings: [
      { id: "core-differences", text: "Core differences" },
      { id: "costs", text: "Fees and expense ratios" },
      { id: "taxes", text: "Tax treatment" },
      { id: "decision", text: "How to decide" }
    ],
    faqs: [
      {
        question: "Are ETFs always cheaper than mutual funds?",
        answer:
          "No. Many ETFs are low cost, but some mutual funds are also inexpensive. Always compare expense ratios, transaction fees, spreads, and account-level fees."
      },
      {
        question: "Can beginners use ETFs?",
        answer:
          "Yes, broad-market ETFs can be beginner friendly when used in a simple long-term portfolio, but investors should understand diversification and risk first."
      }
    ],
    body:
      "ETFs and mutual funds are both pooled investments. The difference is not what they can own, but how investors buy and sell them, how taxes are handled, and how they fit into real portfolios.\n\nAn ETF trades throughout the day on an exchange. A mutual fund generally executes at net asset value after market close. ETFs can be more tax efficient in taxable accounts because of their creation and redemption structure, while mutual funds can be convenient for automatic investing inside retirement plans.\n\nCosts matter, but cost comparison should include more than the headline expense ratio. Bid-ask spreads, trading commissions, platform fees, and tax drag can all affect outcomes.\n\nLong-term investors can use either vehicle well. Choose the fund with the right exposure, low total cost, strong tracking, and a structure you can stick with through volatile markets.",
    citations: [
      { label: "SEC mutual funds and ETFs", url: "https://www.sec.gov/investor/pubs/sec-guide-to-mutual-funds.pdf" },
      { label: "FINRA ETF basics", url: "https://www.finra.org/investors/investing/investment-products/exchange-traded-funds-and-products" }
    ]
  },
  {
    title: "How to Build a Monthly Budget That Actually Works",
    seoTitle: "How to Build a Monthly Budget: Step-by-Step Beginner Guide",
    description:
      "Create a practical monthly budget using income, fixed costs, flexible spending, savings goals, and a simple review rhythm.",
    slug: "monthly-budget-that-works",
    category: "budgeting",
    tags: ["budgeting", "personal finance", "saving money"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-03-06",
    updatedAt: "2026-05-08",
    difficulty: "Beginner",
    summary: [
      "A budget is a decision system, not a punishment system.",
      "Start with real after-tax income and must-pay obligations.",
      "Review weekly so small leaks do not become end-of-month surprises."
    ],
    headings: [
      { id: "income", text: "Start with after-tax income" },
      { id: "expenses", text: "Separate fixed and flexible expenses" },
      { id: "goals", text: "Build savings goals into the plan" },
      { id: "review", text: "Create a review rhythm" }
    ],
    faqs: [
      {
        question: "What is the easiest budgeting method?",
        answer:
          "The easiest method is usually a simple zero-based or 50/30/20 budget, depending on whether you prefer precision or a lightweight rule of thumb."
      },
      {
        question: "How often should I update my budget?",
        answer:
          "Review spending weekly and make a fuller update once per month, especially after income, rent, debt, or family expenses change."
      }
    ],
    body:
      "A useful budget tells your money what job it has before the month disappears. It should be realistic enough to survive normal life and specific enough to prevent vague overspending.\n\nStart with after-tax income. Then list fixed obligations such as rent, insurance, loan payments, subscriptions, and minimum debt payments. Next, estimate flexible categories such as groceries, fuel, entertainment, dining, travel, and gifts.\n\nSavings should be treated like a bill from your future self. Emergency savings, retirement contributions, and short-term goals belong in the plan before leftover money is mentally spent.\n\nThe review rhythm is what makes the system work. A ten-minute weekly check catches drift early. A monthly reset helps you adjust categories without shame or guesswork.",
    citations: [
      { label: "CFPB budgeting worksheet", url: "https://www.consumerfinance.gov/consumer-tools/budgeting/" },
      { label: "FDIC Money Smart", url: "https://www.fdic.gov/resources/consumers/money-smart/" }
    ]
  },
  {
    title: "Best Travel Credit Cards: How to Compare Points, Perks, and Fees",
    seoTitle: "Best Travel Credit Cards: Points, Perks, Fees, and Who Should Use Them",
    description:
      "A detailed framework for comparing travel credit cards, including point value, annual fees, lounge access, travel credits, insurance, and foreign transaction fees.",
    slug: "best-travel-credit-cards",
    category: "credit-cards",
    tags: ["credit cards", "travel rewards", "points"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-04-02",
    updatedAt: "2026-05-12",
    difficulty: "Intermediate",
    summary: [
      "The best travel card is the one whose benefits match your actual travel habits.",
      "Annual fees can be worth paying only when credits, points, protections, and perks exceed the cost.",
      "Travel rewards lose value quickly if you carry a balance and pay high interest."
    ],
    headings: [
      { id: "who-should-use", text: "Who should use a travel credit card" },
      { id: "value-math", text: "How to calculate travel card value" },
      { id: "benefits", text: "Benefits that matter most" },
      { id: "mistakes", text: "Mistakes to avoid before applying" }
    ],
    faqs: [
      {
        question: "Are travel credit cards worth the annual fee?",
        answer:
          "They can be worth it when you use the card's travel credits, transfer partners, insurance benefits, and airport perks. If you rarely travel, a cashback card is often simpler."
      },
      {
        question: "Should I get a travel card if I carry credit card debt?",
        answer:
          "Usually no. Interest charges can erase rewards value quickly. Pay down expensive debt before optimizing rewards."
      }
    ],
    body:
      "Travel credit cards work best for people who travel regularly, pay balances in full, and are willing to learn how points transfer to airline and hotel programs. A premium card can look expensive, but the fee may be rational if the card replaces costs you already pay.\n\nA practical value formula is annual travel credits plus expected point value plus lounge visits plus insurance value minus the annual fee. For example, a $395 card with $250 of usable credits, $220 of expected points, and $100 of lounge value may be positive. A card with the same fee and unused benefits is not.\n\nThe most useful benefits are no foreign transaction fees, primary rental car coverage, trip delay coverage, baggage protection, airport lounge access, and flexible transfer partners. Flexible points are often stronger than points locked into one program.\n\nAvoid applying only for a welcome bonus, ignoring redemption rules, paying interest, or choosing a card because it looks prestigious. A card should support your travel pattern, not create pressure to spend more.",
    citations: [
      { label: "CFPB credit card resources", url: "https://www.consumerfinance.gov/consumer-tools/credit-cards/" },
      { label: "Federal Reserve credit card plans", url: "https://www.federalreserve.gov/creditcard/" }
    ]
  },
  {
    title: "Cashback Credit Cards: Flat-Rate, Bonus Category, and Rotating Rewards Explained",
    seoTitle: "Cashback Credit Cards Explained: Flat Rate vs Bonus Category vs Rotating Rewards",
    description:
      "Learn how cashback cards work, how to compare reward rates, and which card structure fits groceries, gas, dining, online shopping, and everyday purchases.",
    slug: "cashback-credit-cards-explained",
    category: "credit-cards",
    tags: ["credit cards", "cashback", "rewards"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-04-09",
    updatedAt: "2026-05-10",
    difficulty: "Beginner",
    summary: [
      "Flat-rate cards are easiest; category cards can earn more with more effort.",
      "Reward caps and merchant coding rules matter more than headline rates.",
      "Cashback is valuable only when fees and interest do not consume it."
    ],
    headings: [
      { id: "types", text: "Three types of cashback cards" },
      { id: "spending-map", text: "Map rewards to your real spending" },
      { id: "fees", text: "Fees, caps, and fine print" },
      { id: "strategy", text: "A simple two-card strategy" }
    ],
    faqs: [
      {
        question: "Is 2% cashback good?",
        answer:
          "A 2% flat-rate cashback card is strong for simplicity, especially when it has no annual fee and broad redemption options."
      },
      {
        question: "Do cashback rewards count as taxable income?",
        answer:
          "Rewards from spending are generally treated as rebates, but bonus treatment can vary. Consult a tax professional for your situation."
      }
    ],
    body:
      "Cashback cards turn part of your spending into statement credits, deposits, or rewards balances. The simplest card pays one flat rate on everything. Bonus category cards pay more on categories like groceries, dining, gas, or travel. Rotating category cards change bonus categories during the year.\n\nStart with your real spending, not the card advertisement. If most spending is groceries and gas, a category card may beat a flat-rate card. If your spending is spread across many merchants, a strong flat-rate card may be better.\n\nReward caps, annual fees, redemption minimums, merchant category coding, and intro APR rules can change the value. A 5% category sounds excellent, but if it applies only to the first $1,500 per quarter and requires activation, the real annual value may be limited.\n\nA simple setup is one flat-rate card for everything and one category card for your largest predictable spending area. Keep autopay on, monitor utilization, and never spend extra just to earn rewards.",
    citations: [
      { label: "CFPB credit card agreement database", url: "https://www.consumerfinance.gov/credit-cards/agreements/" }
    ]
  },
  {
    title: "Student Credit Cards: Build Credit Without Expensive Mistakes",
    seoTitle: "Student Credit Cards: How to Build Credit, Avoid Fees, and Choose a First Card",
    description:
      "A beginner guide to student credit cards, credit scores, utilization, payment history, fees, limits, and safe first-card habits.",
    slug: "student-credit-cards-build-credit",
    category: "credit-cards",
    tags: ["student credit cards", "credit score", "financial literacy"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-04-15",
    updatedAt: "2026-05-10",
    difficulty: "Beginner",
    summary: [
      "A student card is mainly a credit-building tool, not a borrowing tool.",
      "Payment history and utilization are the habits to protect first.",
      "A no-fee card with bureau reporting is often better than flashy rewards."
    ],
    headings: [
      { id: "purpose", text: "What a student card is for" },
      { id: "credit-score", text: "How it affects your credit score" },
      { id: "rules", text: "Rules for safe card use" },
      { id: "upgrade", text: "When to upgrade" }
    ],
    faqs: [
      {
        question: "What credit limit should a student have?",
        answer:
          "A low limit can be fine at first. The goal is to build payment history while keeping utilization low."
      },
      {
        question: "Can a student get a credit card with no credit history?",
        answer:
          "Yes, some student and secured cards are designed for limited credit history, though approval still depends on income and issuer rules."
      }
    ],
    body:
      "A student credit card should help you create a clean credit record. It is not a substitute for income, emergency savings, or student aid planning. The best first card is usually low cost, easy to manage, and reported to the major credit bureaus.\n\nCredit scores reward on-time payments and responsible use. Payment history is critical because missed payments can stay on a report for years. Utilization also matters: using a small share of your available limit is generally healthier than maxing out the card.\n\nUse the card for one or two predictable expenses, set autopay for at least the statement balance, and turn on alerts. Avoid cash advances, late fees, unnecessary subscriptions, and buying things you would not buy with debit.\n\nAfter six to twelve months of clean usage, you may qualify for a higher limit or a mainstream rewards card. Upgrade only if the new card improves value without adding habits that create debt.",
    citations: [
      { label: "CFPB building credit", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" }
    ]
  },
  {
    title: "Personal Loans: APR, Fees, Terms, and When They Make Sense",
    seoTitle: "Personal Loans Explained: APR, Fees, Credit Score, and Debt Consolidation",
    description:
      "Understand personal loans for debt consolidation, emergencies, home projects, and large expenses, including APR, origination fees, terms, and repayment risk.",
    slug: "personal-loans-explained",
    category: "loans",
    tags: ["personal loans", "debt consolidation", "APR"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-04-20",
    updatedAt: "2026-05-11",
    difficulty: "Beginner",
    summary: [
      "APR is a better comparison number than interest rate alone.",
      "Debt consolidation works only if you stop adding new expensive debt.",
      "A longer term can reduce payment but raise total interest."
    ],
    headings: [
      { id: "uses", text: "Common personal loan uses" },
      { id: "apr", text: "APR and fee comparison" },
      { id: "approval", text: "Credit score and income factors" },
      { id: "risks", text: "Risks before borrowing" }
    ],
    faqs: [
      {
        question: "Is a personal loan better than a credit card?",
        answer:
          "It can be better for structured repayment when the APR is lower, but a loan is still debt and should fit a realistic payoff plan."
      },
      {
        question: "Do personal loans hurt credit?",
        answer:
          "Applications can create hard inquiries, but on-time payments may help over time. Missed payments can harm credit."
      }
    ],
    body:
      "Personal loans are installment loans with fixed payments over a set term. People use them for debt consolidation, medical bills, home improvements, moving costs, or large planned expenses. The structure can help because the payoff schedule is clear.\n\nCompare APR, not just interest rate. APR includes interest and certain fees, making it easier to compare offers. Also check origination fees, late fees, prepayment penalties, and whether funds are disbursed directly to creditors for consolidation.\n\nLenders typically review credit history, income, debt-to-income ratio, employment stability, and requested loan size. A cosigner may improve approval odds but also takes on repayment risk.\n\nThe main risk is using a loan to clear credit cards and then running the cards up again. Before consolidating debt, create a spending plan, close the behavior loop, and choose a term that does not quietly increase total interest.",
    citations: [
      { label: "CFPB loans", url: "https://www.consumerfinance.gov/consumer-tools/" }
    ]
  },
  {
    title: "Home Loans Explained: Mortgage Rates, Down Payments, and Closing Costs",
    seoTitle: "Home Loans Explained: Mortgage Rates, APR, Down Payments, and Closing Costs",
    description:
      "A clear guide to mortgage basics, including fixed vs adjustable rates, APR, points, escrow, closing costs, down payments, and affordability.",
    slug: "home-loans-mortgage-basics",
    category: "mortgages",
    tags: ["mortgages", "home loans", "real estate finance"],
    author: "Daniel Brooks",
    reviewer: "Maya Srinivasan",
    publishedAt: "2026-04-23",
    updatedAt: "2026-05-12",
    difficulty: "Beginner",
    summary: [
      "Mortgage affordability includes taxes, insurance, maintenance, and closing costs.",
      "APR helps compare loans with different rates and fees.",
      "A lower rate is not always better if points and fees are too high."
    ],
    headings: [
      { id: "payment", text: "What makes up a mortgage payment" },
      { id: "rate-vs-apr", text: "Interest rate vs APR" },
      { id: "down-payment", text: "Down payment and cash reserves" },
      { id: "closing", text: "Closing costs and loan estimates" }
    ],
    faqs: [
      {
        question: "How much should I put down on a house?",
        answer:
          "It depends on loan type, cash reserves, mortgage insurance, and your broader budget. A larger down payment can reduce risk, but draining all cash can be dangerous."
      },
      {
        question: "What are mortgage points?",
        answer:
          "Points are upfront fees paid to reduce the interest rate. They make more sense when you expect to keep the loan long enough to break even."
      }
    ],
    body:
      "A mortgage payment often includes principal, interest, property taxes, homeowners insurance, and sometimes mortgage insurance or HOA dues. The home price is only one part of affordability; maintenance and emergency repairs matter too.\n\nThe interest rate shows borrowing cost, while APR includes certain fees. APR can help compare offers, but you still need to review closing costs, points, credits, and how long you expect to keep the loan.\n\nDown payment decisions involve tradeoffs. More down can lower payment and mortgage insurance, but keeping cash reserves protects you after moving. A buyer with no emergency fund may be more fragile even with a slightly lower payment.\n\nUse loan estimates to compare lenders line by line. Focus on rate, APR, points, lender fees, third-party fees, escrow, and cash to close. Ask lenders to explain anything that changes before closing.",
    citations: [
      { label: "CFPB buying a house", url: "https://www.consumerfinance.gov/owning-a-home/" }
    ]
  },
  {
    title: "High-Yield Savings Accounts: APY, Fees, Safety, and When to Use Them",
    seoTitle: "High-Yield Savings Accounts: APY, FDIC Insurance, Fees, and Best Uses",
    description:
      "Learn how high-yield savings accounts work, how APY differs from interest rate, what FDIC or NCUA insurance means, and how to use savings buckets.",
    slug: "high-yield-savings-accounts",
    category: "banking",
    tags: ["banking", "saving money", "APY"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-04-25",
    updatedAt: "2026-05-09",
    difficulty: "Beginner",
    summary: [
      "High-yield savings accounts are useful for emergency funds and short-term goals.",
      "APY includes compounding and is better for comparing savings accounts.",
      "Safety depends on bank or credit union insurance coverage and account ownership limits."
    ],
    headings: [
      { id: "how-it-works", text: "How high-yield savings works" },
      { id: "apy", text: "APY and rate changes" },
      { id: "safety", text: "FDIC and NCUA safety" },
      { id: "buckets", text: "Savings buckets and goals" }
    ],
    faqs: [
      {
        question: "Can a high-yield savings APY change?",
        answer:
          "Yes. Savings APYs are variable and can rise or fall when market rates and bank funding needs change."
      },
      {
        question: "Is a high-yield savings account an investment?",
        answer:
          "No. It is a cash account for safety and liquidity, not long-term growth."
      }
    ],
    body:
      "A high-yield savings account is a bank or credit union deposit account that pays a higher APY than many traditional savings accounts. It is best for money you may need soon, such as an emergency fund, tax reserve, vacation fund, or down payment savings.\n\nAPY includes the effect of compounding, so it is the clean comparison number for deposit accounts. A high APY can change, so avoid choosing an account only because it tops a list for one week.\n\nSafety comes from using insured institutions and staying within insurance limits. FDIC insurance applies to banks and NCUA insurance applies to federally insured credit unions. Fintech apps may partner with banks, so confirm how funds are actually held.\n\nSavings buckets make the account more useful. Separate emergency savings, annual bills, travel, car repairs, and home maintenance so money has a clear job and is less likely to be spent accidentally.",
    citations: [
      { label: "FDIC deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" },
      { label: "NCUA share insurance", url: "https://ncua.gov/support-services/share-insurance-fund" }
    ]
  },
  {
    title: "Retirement Planning: How Much to Save and Which Accounts to Use",
    seoTitle: "Retirement Planning Guide: 401(k), IRA, Roth, Savings Rate, and Withdrawal Basics",
    description:
      "A practical retirement planning guide covering savings rate, employer match, 401(k), IRA, Roth accounts, asset allocation, and withdrawal planning.",
    slug: "retirement-planning-guide",
    category: "retirement",
    tags: ["retirement", "401k", "IRA"],
    author: "Daniel Brooks",
    reviewer: "Maya Srinivasan",
    publishedAt: "2026-04-27",
    updatedAt: "2026-05-10",
    difficulty: "Intermediate",
    summary: [
      "Start with employer match if available because it can be an immediate return.",
      "Account type, savings rate, fees, and asset allocation all matter.",
      "Retirement planning is a process, not one perfect number."
    ],
    headings: [
      { id: "savings-rate", text: "Choose a realistic savings rate" },
      { id: "accounts", text: "401(k), IRA, and Roth basics" },
      { id: "allocation", text: "Asset allocation over time" },
      { id: "withdrawals", text: "Withdrawal planning basics" }
    ],
    faqs: [
      {
        question: "Should I use Roth or traditional retirement accounts?",
        answer:
          "It depends on tax rates now versus later, eligibility, cash flow, and employer plan options. Many people use a mix."
      },
      {
        question: "How often should I change retirement investments?",
        answer:
          "Most long-term investors should review periodically, rebalance when needed, and avoid frequent changes based on headlines."
      }
    ],
    body:
      "Retirement planning starts with a savings habit. A common target is to work gradually toward saving 10% to 15% or more of income, but the right number depends on age, income, existing assets, desired lifestyle, and retirement date.\n\nEmployer plans such as 401(k)s may offer matching contributions. IRAs can add flexibility. Roth accounts use after-tax contributions and may provide tax-free qualified withdrawals, while traditional accounts may reduce taxable income today.\n\nAsset allocation should reflect time horizon and risk tolerance. Younger investors often hold more stock exposure, while people closer to retirement may want more stability. Fees should be kept low because they compound against you.\n\nWithdrawal planning considers taxes, required distributions, market risk, healthcare, Social Security, and cash buffers. A good retirement plan gets updated as life changes.",
    citations: [
      { label: "Investor.gov retirement tools", url: "https://www.investor.gov/additional-resources/retirement-toolkit" }
    ]
  },
  {
    title: "Beginner Stock Market Guide: Indexes, Shares, Risk, and Long-Term Investing",
    seoTitle: "Beginner Stock Market Guide: How Stocks, Indexes, and Market Risk Work",
    description:
      "Understand the stock market with plain-English explanations of shares, indexes, volatility, valuation, diversification, and long-term investing habits.",
    slug: "beginner-stock-market-guide",
    category: "stock-market",
    tags: ["stock market", "investing", "beginner"],
    author: "Daniel Brooks",
    reviewer: "Maya Srinivasan",
    publishedAt: "2026-04-29",
    updatedAt: "2026-05-10",
    difficulty: "Beginner",
    summary: [
      "Stocks represent ownership in businesses, not lottery tickets.",
      "Indexes are snapshots of groups of stocks and are often used as benchmarks.",
      "Diversification reduces single-company risk but does not remove market risk."
    ],
    headings: [
      { id: "stocks", text: "What a stock represents" },
      { id: "indexes", text: "What market indexes show" },
      { id: "risk", text: "Volatility and risk" },
      { id: "habits", text: "Healthy beginner habits" }
    ],
    faqs: [
      {
        question: "Can beginners invest in stocks?",
        answer:
          "Yes, but many beginners are better served by diversified funds before choosing individual stocks."
      },
      {
        question: "Is the stock market guaranteed to go up?",
        answer:
          "No. Markets can decline for long periods. Long-term investing requires risk capacity and patience."
      }
    ],
    body:
      "A stock is a share of ownership in a company. Stock prices move because investors update expectations about profits, interest rates, risk, and future growth. Over short periods, prices can be emotional; over long periods, business fundamentals matter more.\n\nIndexes such as broad-market benchmarks track groups of stocks. They help investors understand market performance and compare funds or portfolios. An index is not something you directly own unless you buy a fund that tracks it.\n\nVolatility is normal. A portfolio can lose value even when the long-term plan is sound. Diversification helps by spreading risk across companies, sectors, and geographies, but it cannot eliminate broad market declines.\n\nBeginner investors should define goals, build emergency savings, use tax-advantaged accounts when appropriate, avoid concentrated bets, keep costs low, and automate contributions where possible.",
    citations: [
      { label: "SEC investing basics", url: "https://www.investor.gov/introduction-investing" }
    ]
  },
  {
    title: "Crypto for Beginners: Wallets, Exchanges, Risk, and Position Sizing",
    seoTitle: "Crypto for Beginners: Wallets, Exchanges, Volatility, Taxes, and Risk",
    description:
      "A careful beginner guide to cryptocurrency concepts, including wallets, exchanges, custody, volatility, scams, taxes, and responsible position sizing.",
    slug: "crypto-for-beginners",
    category: "cryptocurrency",
    tags: ["cryptocurrency", "bitcoin", "risk"],
    author: "Daniel Brooks",
    reviewer: "Maya Srinivasan",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-12",
    difficulty: "Beginner",
    summary: [
      "Crypto assets are highly volatile and speculative.",
      "Custody choices determine who controls private keys and recovery risk.",
      "Position sizing and scam awareness matter more than hype."
    ],
    headings: [
      { id: "what-it-is", text: "What crypto is and is not" },
      { id: "wallets", text: "Wallets, exchanges, and custody" },
      { id: "risk", text: "Volatility, scams, and taxes" },
      { id: "framework", text: "A responsible decision framework" }
    ],
    faqs: [
      {
        question: "Is cryptocurrency safe for beginners?",
        answer:
          "Crypto has technology, price, custody, regulatory, and scam risks. Beginners should treat it as speculative and avoid money they cannot afford to lose."
      },
      {
        question: "Do crypto trades have tax consequences?",
        answer:
          "Often yes. Sales, swaps, and certain rewards may be taxable events. Keep records and consult a tax professional."
      }
    ],
    body:
      "Cryptocurrency is a broad category of digital assets secured by cryptographic systems and blockchain networks. Some assets are designed as scarce digital commodities, others power networks, and many have weak or speculative use cases.\n\nExchanges make buying easier but introduce platform and custody risk. Wallets can give users more control, but self-custody requires careful private key management. Losing recovery information can mean permanent loss.\n\nCrypto prices can move violently. Scams, fake yield products, phishing, pump-and-dump groups, and celebrity hype are common. Taxes can also be complex because trades and swaps may create reportable events.\n\nA responsible framework starts with education, emergency savings, no high-interest debt, small position sizing, secure storage, written rules, and skepticism toward guaranteed returns.",
    citations: [
      { label: "SEC crypto assets", url: "https://www.sec.gov/securities-topics/crypto-assets" },
      { label: "FTC cryptocurrency scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }
    ]
  },
  {
    title: "Debit Card vs Credit Card: Which One Should You Use?",
    seoTitle: "Debit Card vs Credit Card: Safety, Rewards, Fees, Credit Score, and Best Uses",
    description:
      "Compare debit cards and credit cards by spending control, fraud protection, credit building, rewards, fees, and everyday use cases.",
    slug: "debit-card-vs-credit-card",
    category: "debit-cards",
    tags: ["debit cards", "credit cards", "banking"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-05-03",
    updatedAt: "2026-05-13",
    difficulty: "Beginner",
    summary: [
      "Debit cards spend money from your bank account; credit cards borrow against a credit line.",
      "Credit cards can build credit and earn rewards, but interest can become expensive.",
      "Debit cards help spending control but usually have fewer rewards and do not build credit history."
    ],
    headings: [
      { id: "core-difference", text: "The core difference" },
      { id: "safety", text: "Fraud protection and safety" },
      { id: "rewards", text: "Rewards and credit building" },
      { id: "decision", text: "When to use each card" }
    ],
    faqs: [
      {
        question: "Is a debit card safer than a credit card?",
        answer:
          "Debit cards limit borrowing, but credit cards often provide stronger dispute and fraud handling because the money has not left your bank account directly."
      },
      {
        question: "Can debit cards build credit?",
        answer:
          "Most debit cards do not build credit because they are not revolving credit accounts reported like credit cards."
      }
    ],
    body:
      "A debit card is linked to money you already have in a bank account. A credit card lets you borrow from an issuer and repay later. That one difference changes rewards, safety, fees, and long-term credit impact.\n\nFor fraud and disputes, credit cards can be cleaner because the disputed charge is not immediately pulling from your checking balance. Debit cards can still offer protections, but timing and account access matter when cash is removed.\n\nCredit cards can earn points, cashback, travel benefits, purchase protections, and credit history. Debit cards are better for cash-flow discipline, ATM access, and people who do not want revolving debt.\n\nA practical setup is debit for ATM withdrawals and strict cash budgeting, credit for online purchases, travel, deposits, and rewards if you pay in full. Avoid credit cards when you are likely to carry a balance.",
    citations: [
      { label: "CFPB credit card resources", url: "https://www.consumerfinance.gov/consumer-tools/credit-cards/" }
    ]
  },
  {
    title: "How to Choose a Cashback Credit Card Without Chasing Hype",
    seoTitle: "How to Choose a Cashback Credit Card: Categories, Caps, Fees, and Examples",
    description:
      "A detailed cashback card framework for flat-rate cards, grocery cards, fuel cards, dining cards, online shopping cards, and rotating categories.",
    slug: "choose-cashback-credit-card",
    category: "credit-cards",
    tags: ["cashback", "credit cards", "rewards"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-13",
    difficulty: "Beginner",
    summary: [
      "The best cashback card matches your real spending, not the highest advertised rate.",
      "Caps, excluded merchants, and annual fees can reduce headline value.",
      "A two-card setup often works better than one complicated card."
    ],
    headings: [
      { id: "spending-map", text: "Map your spending first" },
      { id: "flat-vs-category", text: "Flat-rate vs category cards" },
      { id: "caps", text: "Caps and exclusions" },
      { id: "setup", text: "A simple card setup" }
    ],
    faqs: [
      {
        question: "Should I choose 5% cashback or 2% cashback?",
        answer:
          "Choose 5% only when the category matches your spending and the cap is high enough. A 2% flat card can be better for broad everyday use."
      },
      {
        question: "Do cashback cards make sense with debt?",
        answer:
          "Usually no. Interest can erase cashback quickly, so debt payoff should come first."
      }
    ],
    body:
      "Start by reviewing three months of spending. Group purchases into groceries, fuel, dining, travel, online shopping, subscriptions, utilities, rent, and miscellaneous spending. This makes the best card obvious more often than advertisements do.\n\nFlat-rate cashback is simple: one rate on most purchases. Category cashback can earn more but requires matching the card to specific merchants. Rotating cards can be valuable but need activation and planning.\n\nCaps matter. A card that pays a high rate on the first small amount of spending may be less valuable than a lower rate with broad coverage. Exclusions also matter because warehouse clubs, superstores, rent payments, or wallets may code differently.\n\nA strong beginner setup is one flat-rate card for everything and one category card for your largest monthly category. Keep autopay on and stop optimizing rewards if it encourages extra spending.",
    citations: [
      { label: "CFPB credit cards", url: "https://www.consumerfinance.gov/consumer-tools/credit-cards/" }
    ]
  },
  {
    title: "Travel Credit Card Checklist Before You Apply",
    seoTitle: "Travel Credit Card Checklist: Points, Lounge Access, Insurance, Fees, and Redemption",
    description:
      "Use this travel card checklist to compare annual fees, points, lounge access, transfer partners, trip insurance, foreign transaction fees, and redemption value.",
    slug: "travel-credit-card-checklist",
    category: "credit-cards",
    tags: ["travel cards", "points", "credit cards"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-13",
    difficulty: "Intermediate",
    summary: [
      "A travel card should reduce costs or improve trips you already planned.",
      "Point value depends on redemption, not the number of points alone.",
      "Travel insurance benefits matter only when you pay with the eligible card and meet terms."
    ],
    headings: [
      { id: "fee-math", text: "Annual fee math" },
      { id: "points", text: "Point value and transfers" },
      { id: "protections", text: "Travel protections" },
      { id: "fit", text: "Who should skip travel cards" }
    ],
    faqs: [
      {
        question: "Are airport lounge cards worth it?",
        answer:
          "They can be worth it for frequent travelers, but lounge access is not valuable if you rarely fly or airports are not part of your travel pattern."
      },
      {
        question: "What is a transfer partner?",
        answer:
          "A transfer partner is an airline or hotel program where flexible card points can be moved, sometimes creating higher redemption value."
      }
    ],
    body:
      "Travel cards look exciting because benefits are visible: lounges, hotel credits, airline partners, and insurance. The question is whether those benefits replace costs you already planned or create new spending pressure.\n\nCalculate annual value conservatively. Count only credits you will actually use. Estimate point value from realistic trips, not fantasy premium flights with limited availability.\n\nTravel protections can be excellent, but terms matter. Trip delay, cancellation, baggage, rental car, and purchase protections often require paying for the trip with the card and meeting specific conditions.\n\nSkip travel cards if you carry balances, travel rarely, dislike tracking credits, or mostly want simple cashback. A no-fee cashback card can beat a premium travel card for many households.",
    citations: [
      { label: "CFPB credit card resources", url: "https://www.consumerfinance.gov/consumer-tools/credit-cards/" }
    ]
  },
  {
    title: "Credit Score Basics: Payment History, Utilization, Age, Mix, and Inquiries",
    seoTitle: "Credit Score Basics: Payment History, Utilization, Credit Age, Mix, and Inquiries",
    description:
      "Understand the major credit score ingredients and how everyday card and loan behavior can affect your credit profile.",
    slug: "credit-score-basics",
    category: "financial-literacy",
    tags: ["credit score", "credit cards", "loans"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-05-06",
    updatedAt: "2026-05-13",
    difficulty: "Beginner",
    summary: [
      "On-time payment history is one of the most important credit habits.",
      "Utilization measures how much revolving credit you use compared with your limits.",
      "Opening many accounts quickly can create avoidable inquiry and age-of-credit pressure."
    ],
    headings: [
      { id: "payments", text: "Payment history" },
      { id: "utilization", text: "Credit utilization" },
      { id: "history", text: "Age, mix, and inquiries" },
      { id: "habits", text: "Habits that help" }
    ],
    faqs: [
      {
        question: "Does checking my own credit hurt my score?",
        answer:
          "Checking your own credit is generally a soft inquiry and does not hurt your score."
      },
      {
        question: "What utilization should I keep?",
        answer:
          "Lower utilization is generally better. Many readers aim to keep balances well below limits and pay in full."
      }
    ],
    body:
      "Credit scores are designed to estimate repayment risk. Exact formulas vary, but common ingredients include payment history, amounts owed, length of credit history, credit mix, and new credit inquiries.\n\nPayment history is critical. A single missed payment can hurt because lenders care whether debts are paid as agreed. Autopay and reminders are simple defenses.\n\nUtilization applies mainly to revolving credit such as credit cards. A high balance relative to your credit limit can signal pressure even if you pay later.\n\nHelpful habits are simple: pay on time, keep balances low, avoid unnecessary applications, keep old no-fee accounts open when sensible, and review credit reports for errors.",
    citations: [
      { label: "CFPB credit reports and scores", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" }
    ]
  },
  {
    title: "SIP Investing for Beginners: How Monthly Investing Builds Discipline",
    seoTitle: "SIP Investing for Beginners: Monthly Investing, Rupee Cost Averaging, Risk, and Examples",
    description:
      "Learn how SIP-style investing works, why monthly contributions help discipline, and what risks investors should understand before starting.",
    slug: "sip-investing-for-beginners",
    category: "mutual-funds",
    tags: ["SIP", "mutual funds", "investing"],
    author: "Daniel Brooks",
    reviewer: "Maya Srinivasan",
    publishedAt: "2026-05-07",
    updatedAt: "2026-05-13",
    difficulty: "Beginner",
    summary: [
      "SIP investing automates contributions and reduces timing pressure.",
      "It does not remove market risk or guarantee returns.",
      "Fund selection, costs, time horizon, and asset allocation still matter."
    ],
    headings: [
      { id: "definition", text: "What SIP investing means" },
      { id: "discipline", text: "Why monthly investing helps" },
      { id: "risk", text: "Risks and wrong expectations" },
      { id: "setup", text: "How to set up a sensible plan" }
    ],
    faqs: [
      {
        question: "Does SIP guarantee profit?",
        answer:
          "No. SIPs create discipline and spread purchase timing, but investments can still lose value."
      },
      {
        question: "Is SIP only for mutual funds?",
        answer:
          "The term is commonly used for mutual fund investing in India, but the concept of automated periodic investing exists globally."
      }
    ],
    body:
      "A systematic investment plan means investing a fixed amount on a regular schedule. The habit matters because many investors delay investing while waiting for the perfect market level.\n\nMonthly investing buys more units when prices are lower and fewer units when prices are higher. This can smooth entry price over time, but it does not eliminate risk.\n\nThe biggest mistake is treating SIP as a guaranteed product. The fund still owns market assets. Equity funds can fall sharply, debt funds have interest-rate and credit risk, and hybrid funds combine risks.\n\nA sensible setup starts with goal, time horizon, emergency fund, asset allocation, fund cost, and review schedule. Increase contributions with income growth and avoid stopping during normal volatility unless the goal changes.",
    citations: [
      { label: "Investor.gov investing basics", url: "https://www.investor.gov/introduction-investing" }
    ]
  },
  {
    title: "Emergency Fund Guide: How Much Cash to Keep and Where to Keep It",
    seoTitle: "Emergency Fund Guide: How Much to Save, Where to Keep It, and Examples",
    description:
      "Build an emergency fund with practical targets, account choices, savings buckets, and examples for single earners, families, freelancers, and students.",
    slug: "emergency-fund-guide",
    category: "saving-money",
    tags: ["emergency fund", "saving money", "banking"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-05-08",
    updatedAt: "2026-05-13",
    difficulty: "Beginner",
    summary: [
      "Emergency funds protect against job loss, medical bills, repairs, and urgent travel.",
      "The right size depends on income stability, dependents, insurance, and debt.",
      "Keep emergency money safe and liquid, not invested for high returns."
    ],
    headings: [
      { id: "purpose", text: "What an emergency fund is for" },
      { id: "amount", text: "How much to keep" },
      { id: "where", text: "Where to keep it" },
      { id: "rebuild", text: "How to rebuild after using it" }
    ],
    faqs: [
      {
        question: "Is one month of expenses enough?",
        answer:
          "It can be a starter fund, but many households need more depending on job stability, dependents, and insurance coverage."
      },
      {
        question: "Should I invest my emergency fund?",
        answer:
          "Usually no. Emergency funds are for safety and liquidity, not return maximization."
      }
    ],
    body:
      "An emergency fund is cash reserved for genuine surprises: income disruption, urgent repairs, medical expenses, travel emergencies, or insurance deductibles. It prevents one problem from becoming high-interest debt.\n\nA common target is three to six months of essential expenses, but the right number varies. Freelancers, single-income families, homeowners, and people with dependents may need more. Students or people with strong family support may start smaller.\n\nGood locations include insured savings accounts, money market deposit accounts, or other low-risk liquid accounts. Avoid locking all emergency money in long-term deposits or volatile investments.\n\nWhen you use the fund, rebuild it like a bill. Pause lower-priority goals temporarily, automate transfers, and refill the category that was drained.",
    citations: [
      { label: "CFPB saving money", url: "https://www.consumerfinance.gov/consumer-tools/saving-money/" }
    ]
  },
  {
    title: "Car Loans: Down Payments, Loan Terms, APR, and Negative Equity",
    seoTitle: "Car Loans Explained: APR, Down Payment, Loan Term, Total Interest, and Negative Equity",
    description:
      "Learn how auto loans work, why long terms can be risky, and how to compare APR, down payment, fees, insurance, and total repayment.",
    slug: "car-loans-explained",
    category: "loans",
    tags: ["auto loans", "APR", "debt"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-05-09",
    updatedAt: "2026-05-13",
    difficulty: "Beginner",
    summary: [
      "A longer car loan lowers monthly payment but can raise total interest.",
      "Depreciation creates negative equity risk when the loan balance exceeds car value.",
      "Insurance, maintenance, taxes, and fuel belong in affordability math."
    ],
    headings: [
      { id: "payment", text: "Monthly payment vs total cost" },
      { id: "equity", text: "Negative equity risk" },
      { id: "dealer", text: "Dealer add-ons and fees" },
      { id: "compare", text: "How to compare offers" }
    ],
    faqs: [
      {
        question: "Is a 72-month car loan bad?",
        answer:
          "Not always, but longer terms can increase total interest and negative equity risk. Compare total repayment, not just payment."
      },
      {
        question: "Should I make a down payment on a car?",
        answer:
          "A down payment can reduce borrowing, interest, and negative equity risk, but keep emergency savings intact."
      }
    ],
    body:
      "Car loans are secured installment loans. The car can be repossessed if payments are missed, so affordability must include more than the monthly loan payment.\n\nLonger terms can make expensive cars look affordable. A lower payment may come with more total interest and a longer period where the car is worth less than the loan balance.\n\nDealer add-ons such as extended warranties, protection packages, gap coverage, and service plans can increase the financed amount. Some may be useful, but they should be evaluated separately.\n\nCompare APR, term, fees, down payment, total interest, insurance costs, and prepayment rules. A less expensive car with a shorter loan can be a stronger financial choice than a stretched payment.",
    citations: [
      { label: "CFPB auto loans", url: "https://www.consumerfinance.gov/consumer-tools/auto-loans/" }
    ]
  },
  {
    title: "Term Life Insurance: Coverage Amount, Term Length, Riders, and Mistakes",
    seoTitle: "Term Life Insurance Explained: Coverage Amount, Term Length, Riders, and Cost",
    description:
      "Understand term life insurance, how much coverage to consider, how term length works, and what mistakes to avoid before buying.",
    slug: "term-life-insurance-explained",
    category: "insurance",
    tags: ["life insurance", "insurance", "family finance"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-05-10",
    updatedAt: "2026-05-13",
    difficulty: "Beginner",
    summary: [
      "Term life insurance is designed to protect dependents during a specific financial-risk period.",
      "Coverage should consider income replacement, debt, childcare, education, and final expenses.",
      "The cheapest policy is not useful if the coverage amount or term is wrong."
    ],
    headings: [
      { id: "purpose", text: "What term life insurance is for" },
      { id: "amount", text: "How to estimate coverage" },
      { id: "term", text: "Choosing term length" },
      { id: "mistakes", text: "Common mistakes" }
    ],
    faqs: [
      {
        question: "Who needs term life insurance?",
        answer:
          "People with dependents, shared debts, or family members relying on their income often consider term coverage."
      },
      {
        question: "Is term insurance an investment?",
        answer:
          "No. Term life is primarily protection for a defined period, not a savings or investing product."
      }
    ],
    body:
      "Term life insurance pays a death benefit if the insured person dies during the policy term. It is often used by parents, spouses, homeowners, and business owners whose death would create financial hardship for others.\n\nCoverage estimates may include income replacement, mortgage or rent, education costs, childcare, debts, and final expenses. Existing savings and other insurance can reduce the needed amount.\n\nTerm length should match the risk period. For example, a parent may want coverage until children are independent or a mortgage is mostly paid.\n\nCommon mistakes include buying too little coverage, choosing a term that is too short, hiding health information, ignoring beneficiary updates, or buying complex products without understanding them.",
    citations: [
      { label: "NAIC life insurance basics", url: "https://content.naic.org/consumer/life-insurance" }
    ]
  },
  {
    title: "Health Insurance Deductibles, Copays, Coinsurance, and Out-of-Pocket Maximums",
    seoTitle: "Health Insurance Costs Explained: Deductible, Copay, Coinsurance, Out-of-Pocket Maximum",
    description:
      "Learn the main health insurance cost terms and how to compare plans by premiums, deductibles, networks, prescriptions, and worst-case costs.",
    slug: "health-insurance-costs-explained",
    category: "insurance",
    tags: ["health insurance", "deductible", "personal finance"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-05-11",
    updatedAt: "2026-05-13",
    difficulty: "Beginner",
    summary: [
      "Premium is what you pay to keep coverage active.",
      "Deductible, copay, coinsurance, and out-of-pocket maximum explain cost sharing.",
      "The best plan depends on expected care, prescriptions, network, and emergency risk."
    ],
    headings: [
      { id: "terms", text: "The main cost terms" },
      { id: "network", text: "Network and prescriptions" },
      { id: "compare", text: "How to compare plans" },
      { id: "risk", text: "Worst-case planning" }
    ],
    faqs: [
      {
        question: "Is a low premium always better?",
        answer:
          "No. A low premium can come with higher deductibles or narrower networks. Compare expected and worst-case costs."
      },
      {
        question: "What is an out-of-pocket maximum?",
        answer:
          "It is the most you pay for covered in-network care during a plan year, excluding premiums and non-covered services."
      }
    ],
    body:
      "Health insurance plans have multiple cost layers. Premium is the recurring payment. Deductible is what you pay before certain coverage starts. Copays are fixed amounts for services. Coinsurance is a percentage share. The out-of-pocket maximum limits covered in-network spending for the year.\n\nNetworks matter because out-of-network care can cost more or may not be covered. Prescription formularies also matter for people taking regular medication.\n\nCompare plans using three scenarios: low healthcare use, expected healthcare use, and a bad year. This prevents choosing only by the lowest monthly premium.\n\nA good plan balances monthly affordability with protection against large bills. Keep emergency savings for deductibles and verify providers before enrolling.",
    citations: [
      { label: "Healthcare.gov glossary", url: "https://www.healthcare.gov/glossary/" }
    ]
  },
  {
    title: "Tax Basics for Freelancers and Side Hustles",
    seoTitle: "Freelancer and Side Hustle Tax Basics: Income, Deductions, Estimated Taxes, and Records",
    description:
      "Understand side-hustle tax basics, including income tracking, deductible expenses, estimated taxes, records, and why local rules matter.",
    slug: "side-hustle-tax-basics",
    category: "taxes",
    tags: ["taxes", "side hustles", "business finance"],
    author: "Maya Srinivasan",
    reviewer: "Daniel Brooks",
    publishedAt: "2026-05-12",
    updatedAt: "2026-05-13",
    difficulty: "Beginner",
    summary: [
      "Side-hustle income is usually taxable even when no employer withholds tax.",
      "Good records make deductions and filing easier.",
      "Rules vary by country, state, and business structure."
    ],
    headings: [
      { id: "income", text: "Track all income" },
      { id: "expenses", text: "Separate business expenses" },
      { id: "estimated", text: "Estimated taxes and cash reserves" },
      { id: "records", text: "Recordkeeping habits" }
    ],
    faqs: [
      {
        question: "Do small side hustles need tax records?",
        answer:
          "Yes. Even small income can create reporting obligations, and records help support expenses."
      },
      {
        question: "Should I open a separate bank account?",
        answer:
          "A separate account can make tracking cleaner, especially as the side hustle grows."
      }
    ],
    body:
      "Side-hustle tax starts with income tracking. Marketplace payouts, client payments, cash income, affiliate revenue, and tips may all matter depending on local rules.\n\nExpenses should be ordinary, necessary, and documented for the work. Common categories include software, supplies, payment processing fees, business mileage, education, home office rules, and professional services, but eligibility varies.\n\nBecause no employer may withhold tax, many freelancers need to set aside money and make estimated payments. The percentage depends on income, deductions, location, and other tax factors.\n\nKeep invoices, receipts, mileage logs, bank statements, and notes about business purpose. A clean system reduces stress and makes professional tax help more efficient.",
    citations: [
      { label: "IRS gig economy tax center", url: "https://www.irs.gov/businesses/gig-economy-tax-center" }
    ]
  },
  {
    title: "Beginner ETF Portfolio: Core, Satellite, Rebalancing, and Fees",
    seoTitle: "Beginner ETF Portfolio Guide: Core Holdings, Satellite Funds, Rebalancing, and Fees",
    description:
      "Learn a simple ETF portfolio framework using core diversified funds, optional satellite exposures, rebalancing, costs, and risk controls.",
    slug: "beginner-etf-portfolio",
    category: "etfs",
    tags: ["ETFs", "portfolio", "investing"],
    author: "Daniel Brooks",
    reviewer: "Maya Srinivasan",
    publishedAt: "2026-05-13",
    updatedAt: "2026-05-13",
    difficulty: "Intermediate",
    summary: [
      "A core ETF portfolio uses broad diversified funds as the foundation.",
      "Satellite funds should be small and intentional.",
      "Rebalancing keeps risk aligned with the original plan."
    ],
    headings: [
      { id: "core", text: "Core holdings" },
      { id: "satellite", text: "Satellite exposures" },
      { id: "fees", text: "Fees and tax awareness" },
      { id: "rebalance", text: "Rebalancing rules" }
    ],
    faqs: [
      {
        question: "How many ETFs does a beginner need?",
        answer:
          "Many beginners can start with one to three broad funds, depending on goals, account type, and risk tolerance."
      },
      {
        question: "Should I buy thematic ETFs?",
        answer:
          "Thematic ETFs can be risky and concentrated. If used, they are usually better as small satellite positions."
      }
    ],
    body:
      "A beginner ETF portfolio does not need to be complicated. The core can be a broad stock market fund, a bond fund when appropriate, and maybe an international fund depending on goals and risk tolerance.\n\nSatellite exposures are optional additions such as sectors, themes, dividend funds, real estate, or factor funds. They should have a clear role and limited size so they do not dominate risk.\n\nFees matter because they compound. Expense ratios, bid-ask spreads, taxes, and trading behavior all affect long-term results. Taxable accounts need extra care around distributions and turnover.\n\nRebalancing means returning the portfolio to target weights. This can happen on a schedule or when allocations drift beyond a chosen band. The point is to control risk, not predict markets.",
    citations: [
      { label: "Investor.gov ETFs", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/exchange-traded-funds-etfs" }
    ]
  }
];

export const pillarPages = [
  {
    title: "Beginner Finance Guide",
    slug: "beginner-guides",
    description: "A structured learning path from money basics to confident investing.",
    clusters: ["financial-literacy", "budgeting", "saving-money", "banking", "credit-cards"]
  },
  {
    title: "Investing Learning Path",
    slug: "advanced-finance-guides",
    description: "Understand portfolio construction, market risk, ETFs, funds, and retirement strategy.",
    clusters: ["investing", "stock-market", "etfs", "mutual-funds", "retirement"]
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getArticlesByCategory(slug: string) {
  return articles.filter((article) => article.category === slug);
}

export function getRelatedArticles(article: Article, limit = 3) {
  return articles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      article: candidate,
      score:
        (candidate.category === article.category ? 4 : 0) +
        candidate.tags.filter((tag) => article.tags.includes(tag)).length
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article);
}

export function getReadingStats(article: Article) {
  return readingTime(article.body);
}

export function generateArticleDraft(keyword: string, category: string) {
  const slug = slugify(keyword);
  return {
    title: keyword.replace(/\b\w/g, (char) => char.toUpperCase()),
    seoTitle: `${keyword} explained: examples, risks, and step-by-step guide`,
    metaDescription: `A practical guide to ${keyword}, including definitions, examples, mistakes to avoid, FAQs, and related finance topics.`,
    slug,
    category,
    tags: [keyword, category, "finance education"],
    outline: [
      "Search intent and reader promise",
      "Plain-English definition",
      "How it works",
      "Real-world examples",
      "Common mistakes",
      "Decision checklist",
      "FAQs"
    ],
    qualityChecklist: [
      "Add original examples and calculations",
      "Cite primary or authoritative sources",
      "Include expert review notes",
      "Remove repetitive phrasing",
      "Confirm no unsupported financial advice claims"
    ]
  };
}
