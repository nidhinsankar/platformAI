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
import { siteConfig } from "@/config/site";
import { UserAccountNav } from "./user-account-nav";
import { User } from "next-auth";

interface DashboardNavProps {
  items: SidebarNavItem[];
  children?: React.ReactNode;
  user: Pick<User, "name" | "image" | "email">;
}

export function DashboardNav({ items, children, user }: DashboardNavProps) {
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
    ${isOpen ? "w-[250px] px-3" : "w-[70px] "}
    hidden mx-auto flex-col items-center bg-gray-100 md:flex shadow-lg h-screen overflow-y-auto sticky top-0 transition-all duration-300 ease-in-out
  `}
    >
      <nav className="flex flex-col justify-between h-full">
        <div>
          {isOpen ? (
            <div
              className="flex justify-between items-center my-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center space-x-2">
                <Icons.bot className="w-5 h-5" />
                <span className="font-bold">{siteConfig.name}</span>
              </div>
              {isHovered && (
                <Icons.rightpanelclose
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer "
                />
              )}
            </div>
          ) : (
            <div
              className="flex items-center justify-between w-1/2 mx-auto my-6 bg-white px-0.5 rounded-full"
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
                      "group flex items-center my-2 rounded-full px-3 py-2 relative text-sm font-medium hover:bg-black/90 hover:text-white",
                      path === item.href
                        ? "shadow-lg bg-black/95  text-white"
                        : "transparent",
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
        <div className="my-5 flex   items-center border-t-2">
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          >
            {user.name && isOpen && (
              <p className="font-medium capitalize">{user.name}</p>
            )}
          </UserAccountNav>
        </div>
      </nav>
    </aside>
    // {children}
    // </div>
  );
}
