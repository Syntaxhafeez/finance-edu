import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("personal-finance");
export default function Page() { return <TopicPageContent slug="personal-finance" />; }
