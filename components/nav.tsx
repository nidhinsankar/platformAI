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
import { Badge } from "./ui/badge";

interface DashboardNavProps {
  items: SidebarNavItem[];
  children?: React.ReactNode;
}

export function DashboardNav({ items, children }: DashboardNavProps) {
  const path = usePathname();

  const { isOpen, setIsOpen } = useSidebarContext();
  const [isHovered, setIsHovered] = useState(false);

  if (!items?.length) {
    return null;
  }

  return (
    // <div
    //   className={`container grid flex-1  ${
    //     isOpen
    //       ? "md:grid-cols-[200px_1fr] gap-12"
    //       : "md:grid-cols-[50px_1fr] gap-8 "
    //   } `}
    // >
    <aside
      className={`
    ${isOpen ? "w-[200px] px-3 " : "w-[50px] px-2"}
    hidden mx-auto flex-col items-center md:flex shadow-lg h-screen sticky top-0 transition-all duration-300 ease-in-out
  `}
    >
      <nav className="flex flex-col justify-between h-full gap-4">
        <div>
          {isOpen ? (
            <div
              className="flex justify-between items-center my-6"
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
            <div
              className="flex items-center justify-between w-1/2 mx-auto my-6"
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
            </div>
          )}

          {items.map((item, index) => {
            const Icon = Icons[item.icon || "arrowRight"];
            return (
              item.href && (
                <Link key={index} href={item.disabled ? "/" : item.href}>
                  <span
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 relative text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href ? "bg-accent" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    <Icon className={isOpen ? "mr-2 h-4 w-4" : "w-6 h-6 "} />
                    <span
                      className={
                        isOpen ? "block transition-all duration-300" : "hidden"
                      }
                    >
                      <span>{item.title}</span>
                      {item.beta && (
                        <span className="absolute -top-3 -right-0">
                          {
                            <Badge className="px-1 py-0 bg-orange-500 text-[8px] uppercase font-medium ">
                              coming soon
                            </Badge>
                          }
                        </span>
                      )}
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
    // {children}
    // </div>
  );
}
