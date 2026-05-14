import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("budgeting");
export default function Page() { return <TopicPageContent slug="budgeting" />; }
