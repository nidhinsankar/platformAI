"use client";
import { useEffect, useState } from "react";
import { DashboardEmailHeader, DashboardHeader } from "../header";
import { DashboardShell } from "../shell";
import { Button } from "../ui/button";
import {
  CampaignList,
  CreateCampaignModal,
  CustomerList,
} from "./customer-list";
import CustomerForm from "./customer";
import { Badge } from "../ui/badge";
import { toast } from "../ui/use-toast";
import { CardSkeleton } from "../card-skeleton";

export const MainDashboard = ({ session }: { session: any }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [customers, setCustomers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(
    null
  );
  const userId = session?.id;

  const handleCustomerSelection = (email: string) => {
    setSelectedCustomers((prev) =>
      prev.includes(email) ? prev.filter((e) => e !== email) : [...prev, email]
    );
  };

  const handleCampaignSelection = (campaignId: string) => {
    setSelectedCampaignId(campaignId);
  };

  const handleAddToCampaign = async () => {
    if (!selectedCampaignId || selectedCustomers.length === 0) return;

    try {
      const response = await fetch(`/api/campaign/${selectedCampaignId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerEmails: selectedCustomers }),
      });

      if (!response.ok) {
        toast({ title: "failed", description: "Failed to update campaign" });
      }

      const updatedCampaign = await response.json();

      // Update local state
      setCampaigns((prev: any) =>
        prev.map((campaign: any) =>
          campaign.id === updatedCampaign.id ? updatedCampaign : campaign
        )
      );

      // Clear selections
      setSelectedCustomers([]);
      setSelectedCampaignId(null);

      // Optionally, show a success message to the user
      toast({
        title: "Success",
        description: "Customers added to campaign successfully!",
        variant: "default",
      });
    } catch (error) {
      console.error("Error adding customers to campaign:", error);
      toast({
        title: "Failed",
        description: "Failed to add customers to campaign. Please try again.",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [customerResponse, campaignResponse] = await Promise.all([
          fetch(`/api/users/${userId}/customer`),
          fetch(`/api/users/${userId}/campaign`),
        ]);

        if (!customerResponse.ok || !campaignResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const customerData = await customerResponse.json();
        const campaignData = await campaignResponse.json();

        setCustomers(customerData);
        setCampaigns(campaignData);
      } catch (err) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <DashboardShell>
      <DashboardEmailHeader
        heading="Email Marketing"
        text="Create and manage your Email Marketing Campaign"
      >
        <MarketingTopbar
          onAddToCampaign={handleAddToCampaign}
          selectedCampaignId={selectedCampaignId}
          selectedCustomersCount={selectedCustomers.length}
        />
      </DashboardEmailHeader>
      <MarketingDashboard
        error={error}
        loading={loading}
        campaigns={campaigns}
        customers={customers}
        onCampaignSelect={handleCampaignSelection}
        onCustomerSelect={handleCustomerSelection}
        selectedCampaignId={selectedCampaignId}
        selectedCustomers={selectedCustomers}
      />
    </DashboardShell>
  );
};

export const MarketingTopbar = ({
  onAddToCampaign,
  selectedCustomersCount,
  selectedCampaignId,
}: {
  onAddToCampaign: () => void;
  selectedCustomersCount: number;
  selectedCampaignId: string | null;
}) => {
  return (
    <div className="flex gap-3">
      <Button
        onClick={onAddToCampaign}
        disabled={selectedCustomersCount === 0 || !selectedCampaignId}
      >
        Add to Campaign
      </Button>
      <CreateCampaignModal />
      <CustomerForm />
      <Badge>10 credits</Badge>
    </div>
  );
};

export const MarketingDashboard = ({
  loading,
  error,
  customers,
  campaigns,
  onCampaignSelect,
  selectedCampaignId,
  selectedCustomers,
  onCustomerSelect,
}: {
  loading: boolean;
  error: string;
  customers: any;
  campaigns: any;
  onCampaignSelect: any;
  selectedCampaignId: any;
  selectedCustomers: any;
  onCustomerSelect: any;
}) => {
  if (loading)
    return (
      <div className="grid gap-10">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <CustomerList
        customers={customers}
        selectedCustomers={selectedCustomers}
        onCustomerSelect={onCustomerSelect}
      />
      <CampaignList
        campaigns={campaigns}
        selectedCampaignId={selectedCampaignId}
        onCampaignSelect={onCampaignSelect}
      />
    </div>
  );
};

const updateCampaign = async (campaignId: string, customerEmails: string[]) => {
  const response = await fetch(`/api/campaigns/${campaignId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customerEmails }),
  });

  if (!response.ok) {
    throw new Error("Failed to update campaign");
  }

  return response.json();
};
