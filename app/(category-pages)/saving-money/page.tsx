import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("saving-money");
export default function Page() { return <TopicPageContent slug="saving-money" />; }
