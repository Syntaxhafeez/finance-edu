import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("stock-market");
export default function Page() { return <TopicPageContent slug="stock-market" />; }
