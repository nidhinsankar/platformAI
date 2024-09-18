import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

interface CampaignSendButtonProps {
  campaignId: string;
}

const CampaignSendButton: React.FC<CampaignSendButtonProps> = ({
  campaignId,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSendCampaign = async () => {
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`/api/campaign/${campaignId}`, {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok) {
        toast({ title: "success", description: data.message });
      } else {
        throw new Error(data.message || "Failed to send campaign");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "An error occurred");
      toast({ title: "failed", description: "An Error occured" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleSendCampaign} disabled={isLoading}>
        {isLoading ? "Sending..." : "Send"}
      </Button>
    </div>
  );
};

export default CampaignSendButton;
