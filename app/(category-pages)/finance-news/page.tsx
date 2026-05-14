import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("finance-news");
export default function Page() { return <TopicPageContent slug="finance-news" />; }
