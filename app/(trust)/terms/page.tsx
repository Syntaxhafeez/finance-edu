export const metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Terms and conditions</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        LedgerWise provides educational information only. Use of the platform does not create an advisor, broker,
        attorney, accountant, or fiduciary relationship.
      </p>
      <div className="prose-finance mt-8">
        <h2>Use of content</h2>
        <p>Articles, tools, calculators, and AI features are for general education. You are responsible for evaluating whether information applies to your circumstances.</p>
        <h2>Accounts and saved content</h2>
        <p>Future account features may allow bookmarks, comments, preferences, and newsletter management. Users must provide accurate information and avoid misuse.</p>
        <h2>Limitations</h2>
        <p>We do not guarantee investment performance, credit approval, tax outcomes, loan availability, or product terms.</p>
      </div>
    </div>
  );
}
