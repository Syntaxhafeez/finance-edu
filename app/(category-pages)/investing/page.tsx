import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("investing");
export default function Page() { return <TopicPageContent slug="investing" />; }
