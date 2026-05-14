import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("banking");
export default function Page() { return <TopicPageContent slug="banking" />; }
