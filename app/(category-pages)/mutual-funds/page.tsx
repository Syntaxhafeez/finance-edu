import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("mutual-funds");
export default function Page() { return <TopicPageContent slug="mutual-funds" />; }
