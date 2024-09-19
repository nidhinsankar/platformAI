"use client";
import { CalendarIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "../ui/use-toast";
import { format } from "date-fns";
import CampaignSendButton from "./send-email";
import { cn } from "@/lib/utils";

export const CustomerList = ({
  customers,
  selectedCustomers,
  onCustomerSelect,
}: {
  customers: any;
  selectedCustomers: string[];
  onCustomerSelect: (id: string) => void;
}) => {
  return (
    <Table className="flex-1 border">
      {/* <TableCaption>List of customer emails</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers?.map((user: any) => (
          <TableRow key={user?.id}>
            <TableCell>
              <Checkbox
                checked={selectedCustomers.includes(user?.email)}
                onCheckedChange={() => onCustomerSelect(user?.email)}
              />
            </TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Campaign = ({
  createdAt,
  name,
  id,
  selectedCampaignId,
  onCampaignSelect,
  customers,
  template,
}: {
  createdAt: string;
  name: string;
  id: string;
  selectedCampaignId: any;
  onCampaignSelect: any;
  customers: number;
  template: string;
}) => {
  const formattedDate = format(new Date(createdAt), "MMM do, yyyy");
  return (
    <Card
      className={cn(
        "w-full my-4",
        selectedCampaignId === id ? "border border-orange-500" : ""
      )}
      key={id}
      onClick={() => {
        selectedCampaignId === id ? onCampaignSelect("") : onCampaignSelect(id);
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="mr-1 h-4 w-4" />
          Created {formattedDate}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <UserIcon className="mr-1 h-4 w-4" />
            {customers} customers added
          </div>
          <div className="space-x-2">
            <EditEmail campaignId={id} initialTemplate={template} />
          </div>
          <CampaignSendButton campaignId={id} />
        </div>
      </CardContent>
    </Card>
  );
};

export const CampaignList = ({
  campaigns,
  selectedCampaignId,
  onCampaignSelect,
}: {
  campaigns: any;
  selectedCampaignId: any;
  onCampaignSelect: any;
}) => {
  return (
    <div className="flex-1 md:flex-[650px] ">
      {campaigns.length > 0 ? (
        <>
          {campaigns.map((campaign: any) => (
            <Campaign
              selectedCampaignId={selectedCampaignId}
              onCampaignSelect={onCampaignSelect}
              createdAt={campaign?.createdAt}
              customers={campaign?.customers.length}
              template={campaign?.template}
              id={campaign?.id}
              name={campaign?.name}
              key={campaign?.id}
            />
          ))}
        </>
      ) : (
        <p>No campaigns found.</p>
      )}
    </div>
  );
};

export const CreateCampaignModal = () => {
  const [campaignData, setCampaignData] = useState({
    name: "",
    template: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCampaignData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    if (!campaignData) {
      toast({
        title: "enter details",
        variant: "destructive",
      });
    }

    try {
      const res = await fetch("/api/campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(campaignData),
      });
      if (res.ok) {
        setMessage("Campaign created successfully!");
      } else {
        const errorData = await res.json();
        setMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error creating customer:", error);
      setMessage("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Campaign</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Create Campaign</DialogTitle>
          <DialogDescription>
            Create your Marketing Campaign and start sending emails
          </DialogDescription>
        </DialogHeader>
        {message && (
          <div
            className={`mb-4 p-3 rounded ${
              message.includes("Error") ? "bg-red-100" : "bg-green-100"
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="">
            <Input
              id="name"
              value={campaignData.name}
              placeholder="Campaign Name"
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
          <div>
            <Textarea
              id="template"
              value={campaignData.template}
              placeholder="create campaign template"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Campaign"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const EditEmail = ({
  initialTemplate,
  campaignId,
}: {
  initialTemplate: string;
  campaignId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [template, setTemplate] = useState(initialTemplate);
  const [isLoading, setIsLoading] = useState(false);

  const handleTemplateChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTemplate(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/campaign/${campaignId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ template }),
      });

      if (!response.ok) {
        throw new Error("Failed to update template");
      }

      const updatedCampaign = await response.json();
      console.log("updateddddd", updatedCampaign);

      toast({
        title: "Success",
        description: "Email template updated successfully!",
        variant: "default",
      });

      setIsOpen(false);
    } catch (error) {
      console.error("Error updating email template:", error);
      toast({
        title: "Error",
        description: "Failed to update email template. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-orange-500 hover:bg-orange-400/75"
        >
          Edit Email
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit template</DialogTitle>
          <DialogDescription>Edit template of the Email</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <Textarea value={template} onChange={handleTemplateChange} />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
