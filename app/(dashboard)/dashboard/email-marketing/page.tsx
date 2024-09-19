import { MainDashboard } from "@/components/email-marketing/dashboard";
import { getCurrentUser } from "@/lib/session";

export default async function EmailMarketingPage() {
  const session = await getCurrentUser();
  return <MainDashboard session={session} />;
}
