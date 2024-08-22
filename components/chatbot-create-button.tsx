"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";
import { toast } from "./ui/use-toast";
import { Icons } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ChatbotCreateButtonProps extends ButtonProps {}

export function ChatbotCreateButton({
  className,
  variant,
  ...props
}: ChatbotCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function GetFiles() {
    const files = await fetch(`/api/files`);
    return await files.json();
  }

  async function newChatbot() {
    setIsLoading(true);

    const files = await GetFiles();

    if (files.length === 0) {
      toast({
        title: "No file found.",
        description:
          "Please upload a file or create a crawler to import content.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    router.refresh();

    router.push(`/dashboard/new/chatbot`);
  }

  async function importChatbot() {
    setIsLoading(true);
    router.refresh();
    router.push(`/dashboard/new/importChatbot`);
  }

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <TooltipDemo />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              buttonVariants({ variant }),
              {
                "cursor-not-allowed opacity-60": isLoading,
              },
              className
            )}
            disabled={isLoading}
            {...props}
          >
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.add className="mr-2 h-4 w-4" />
            )}
            New Chatbot
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span
                onClick={newChatbot}
                className="flex cursor-pointer items-center text-primary focus:text-primary"
              >
                <Icons.badgeplus className="mr-2 h-4 w-4" />
                Create Chatbot
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span
                onClick={importChatbot}
                className="flex cursor-pointer items-center text-primary focus:text-primary"
              >
                <Icons.import className="mr-2 h-4 w-4" />
                Import OpenAI Assistant
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Icons.help />
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="w-full max-w-[90vw] md:max-w-[300px] flex flex-col  gap-3 mt-3 bg-white text-primary px-2 shadow-lg"
        >
          <h2>Tips to improve your chatbot responses!</h2>
          <p>
            1. Experiment with changing the chatbot&apos;s instructions by being
            very clear on its role, name, goal, behaviour, etc...
          </p>
          <p>
            2. Revise answers that you don&apos;t like to teach the chatbot how
            to respond to similar questions in the future
          </p>
          <p>
            3. Experiment with the different models to see which works for
            better for your chatbot. For more information, check out our guide!
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
