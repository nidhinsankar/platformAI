"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { useSidebarContext } from "@/context/sidebar-context";
import { buttonVariants } from "./ui/button";
import { UserAccountNav } from "./user-account-nav";

interface MainNavMarketingProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNavMarketing({ items, children }: MainNavMarketingProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10 justify-between w-full">
      <div className="hidden md:flex gap-2 md:justify-center items-center ">
        <Icons.bot />
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className="hidden font-bold sm:inline-block">
          Platform <span className="text-orange-500">AI</span>
          </span>
        </Link>
      </div>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex ">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <Link
        href="/login"
        className={cn(
          buttonVariants({ size: "lg" }),
          "px-4 border shadow-md w-24 font-bold text-lg hidden"
        )}
      >
        Login
      </Link>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.bot />}
        <span className="font-bold">Menu</span>
      </button>
      <Link
        href="/login"
        className={cn(
          buttonVariants({ size: "lg" }),
          "px-4 border shadow-md w-24 font-bold text-lg"
        )}
      >
        Login
      </Link>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}

export function MainNavDashboard({ items, children }: MainNavMarketingProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10 w-full">
      <div className="flex justify-center items-center gap-2">
        <Icons.bot />
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex ">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.bot />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
