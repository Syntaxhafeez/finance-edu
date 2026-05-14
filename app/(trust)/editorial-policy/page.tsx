export const metadata = { title: "Editorial Policy" };

export default function EditorialPolicyPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Editorial policy</h1>
      <div className="prose-finance mt-8">
        <p>
          We prioritize accuracy, usefulness, plain-English explanations, and transparent sourcing. Articles are assigned
          to qualified editors, reviewed against source quality and readability standards, and updated when facts,
          regulations, products, or market context change.
        </p>
        <h2>How we preserve trust</h2>
        <ul>
          <li>Clear author and reviewer attribution.</li>
          <li>Source citations from regulators, institutions, and primary references where possible.</li>
          <li>Visible last-updated dates and material update notes.</li>
          <li>Separation between educational content, affiliate relationships, and advertising.</li>
        </ul>
        <h2>Article requirements</h2>
        <ul>
          <li>State the reader intent and answer the core question early.</li>
          <li>Include examples, comparison tables, FAQs, and risk explanations where useful.</li>
          <li>Avoid thin summaries, copied definitions, keyword stuffing, or exaggerated claims.</li>
          <li>Explain who a product or strategy may not be good for.</li>
        </ul>
        <h2>Corrections policy</h2>
        <p>
          When a meaningful error is found, editors update the article, refresh the updated date, and add an update note
          when the change affects reader interpretation.
        </p>
      </div>
    </div>
  );
}
