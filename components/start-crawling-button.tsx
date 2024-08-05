"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Crawler } from "@prisma/client";
import { useState } from "react";
import { toast } from "./ui/use-toast";

interface CrawlingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  crawler: Pick<Crawler, "id" | "name" | "crawlUrl" | "selector" | "urlMatch">;
}

export function StartCrawlingButton({
  className,
  crawler,
  ...props
}: CrawlingProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClickButton: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/crawlers/${crawler.id}/crawling`);

      if (!response?.ok) {
        if (response.status === 400) {
          toast({
            title: "Invalid request",
            description: await response.text(),
            variant: "destructive",
          });
        } else if (response.status === 402) {
          toast({
            title: "File limit reached.",
            description: "Please upgrade to a higher plan.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Something went wrong.",
            description: "Your crawling failed. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          description: "Crawling finished.",
        });
      }
    } catch (error) {
      console.error("Error during crawling:", error);
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };

  return (
    <>
      <button
        onClick={onClickButton}
        className={cn(
          buttonVariants({ variant: "default" }),
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
        Start crawling now
      </button>
    </>
  );
}
