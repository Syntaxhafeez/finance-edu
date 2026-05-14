import { TopicPageContent } from "@/components/topic-page-content";
import { categoryPageMetadata } from "@/lib/seo";
export const metadata = categoryPageMetadata("startup-finance");
export default function Page() { return <TopicPageContent slug="startup-finance" />; }
