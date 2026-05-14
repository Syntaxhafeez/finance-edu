import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("real-estate-finance");
export default function Page() { return <TopicPageContent slug="real-estate-finance" />; }
