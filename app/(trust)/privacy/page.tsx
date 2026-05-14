export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-3xl py-12">
      <h1 className="text-5xl font-semibold tracking-normal">Privacy policy</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        This template describes newsletter signup, analytics, cookies, advertising, and user account data. Replace it
        with counsel-reviewed policy text before launch.
      </p>
      <div className="prose-finance mt-8">
        <h2>Information we may collect</h2>
        <p>Email addresses for newsletters, account details for saved articles, analytics events for page performance, and technical data such as device type and browser.</p>
        <h2>How information is used</h2>
        <p>To send requested newsletters, improve content quality, protect the service, and personalize educational recommendations.</p>
        <h2>Advertising and cookies</h2>
        <p>We may use privacy-respecting analytics to understand broad site performance and improve reader experience.</p>
        <h2>International rights</h2>
        <p>EU, UK, California, India, and other visitors may have different privacy rights. We provide dedicated privacy-rights and cookie-policy pages so users can understand access, deletion, correction, opt-out, and consent choices.</p>
        <h2>Google and third-party advertising</h2>
        <p>If Google advertising products are used, our policy must disclose that third parties may place or read cookies, use web beacons, IP addresses, or similar identifiers, and process data for ad serving and measurement.</p>
      </div>
    </div>
  );
}
