"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { UpgradePlanButton } from "./upgrade-plan-button";
import { useSidebarContext } from "@/context/sidebar-context";
import React, { useState } from "react";

interface DashboardNavProps {
  items: SidebarNavItem[];
  children: React.ReactNode;
}

export function DashboardNav({ items, children }: DashboardNavProps) {
  const path = usePathname();

  const { isOpen, setIsOpen } = useSidebarContext();
  const [isHovered, setIsHovered] = useState(false);

  if (!items?.length) {
    return null;
  }

  return (
    <div
      className={`container grid flex-1  ${
        isOpen
          ? "md:grid-cols-[200px_1fr] gap-12"
          : "md:grid-cols-[50px_1fr] gap-8 "
      } `}
    >
      <aside
        className={`
            ${isOpen ? "w-[200px]" : "w-[50px]"}
          hidden flex-col md:flex`}
      >
        <nav className="flex flex-col justify-between h-full gap-2">
          <div>
            {isOpen ? (
              <div
                className="flex justify-between my-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Icons.bot />
                {isHovered && (
                  <Icons.rightpanelclose
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer "
                  />
                )}
              </div>
            ) : (
              <span
                className="flex items-center py-2 px-3 bg-grey-300 my-3 rounded-md"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {!isHovered ? (
                  <Icons.bot />
                ) : (
                  <Icons.leftpanelclose
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer "
                  />
                )}
              </span>
            )}

            {items.map((item, index) => {
              const Icon = Icons[item.icon || "arrowRight"];
              return (
                item.href && (
                  <Link key={index} href={item.disabled ? "/" : item.href}>
                    <span
                      className={cn(
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                        path === item.href ? "bg-accent" : "transparent",
                        item.disabled && "cursor-not-allowed opacity-80"
                      )}
                    >
                      <Icon className={isOpen ? "mr-2 h-4 w-4" : "w-8 h-8 "} />
                      <span className={isOpen ? "block" : "hidden"}>
                        {item.title}
                      </span>
                    </span>
                  </Link>
                )
              );
            })}
          </div>
          {isOpen && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Upgrade your plan</CardTitle>
                <CardDescription className="text-xs">
                  Unlock more features by upgrading your plan and get premium
                  support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UpgradePlanButton size="sm" />
              </CardContent>
            </Card>
          )}
        </nav>
      </aside>
      {children}
    </div>
  );
}
