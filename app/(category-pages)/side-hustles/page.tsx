import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("side-hustles");
export default function Page() { return <TopicPageContent slug="side-hustles" />; }
