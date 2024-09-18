import { CardSkeleton } from "@/components/card-skeleton";
import { DashboardEmailHeader, DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";

export default function DashboardEmailMarketingLoading() {
  return (
    <DashboardShell>
      <DashboardEmailHeader
        heading="Email Marketing"
        text="Create and manage your Email Marketing Campaign"
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  );
}
