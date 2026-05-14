import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CashPivot",
    short_name: "CashPivot",
    description: "Clear finance education, calculators, and practical money guides.",
    start_url: "/",
    display: "standalone",
    background_color: "#071816",
    theme_color: "#34d399",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ],
    categories: ["finance", "education", "news"],
    lang: "en"
  };
}
