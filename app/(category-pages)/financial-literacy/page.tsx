import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("financial-literacy");
export default function Page() { return <TopicPageContent slug="financial-literacy" />; }
