import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("retirement");
export default function Page() { return <TopicPageContent slug="retirement" />; }
