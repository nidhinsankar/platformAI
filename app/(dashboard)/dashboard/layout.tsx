// "use client";
import { notFound } from "next/navigation";

import { dashboardConfig } from "@/config/dashboard";
import { getCurrentUser } from "@/lib/session";
import { MainNavDashboard } from "@/components/main-nav";
import { DashboardNav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { UserAccountNav } from "@/components/user-account-nav";
import { db } from "@/lib/db";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OpenAIForm } from "@/components/openai-config-form";
import Image from "next/image";
import { useState } from "react";
import { Sidebar } from "@/context/sidebar-context";
import { ChatbotCreateButton } from "@/components/chatbot-create-button";
import CreateButtonNav from "@/components/create-button-nav";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  const openAIKey = await db.openAIConfig.findFirst({
    where: {
      userId: user.id,
    },
  });

  return (
    <Sidebar>
      {/* <> */}
      <div className="flex gap-3 min-h-screen">
        <DashboardNav
          items={dashboardConfig.sidebarNav}
          user={{
            name: user.name,
            image: user.image,
            email: user.email,
          }}
        />
        <div className="flex flex-1 flex-col ">
          <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
              <MainNavDashboard items={dashboardConfig.mainNav} />
              {/* <UserAccountNav
                user={{
                  name: user.name,
                  image: user.image,
                  email: user.email,
                }}
              /> */}
              <CreateButtonNav />
              {/* <ChatbotCreateButton /> */}
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <Dialog defaultOpen={!openAIKey}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <div className="flex justify-center">
                      <Image
                        src="/openai-logo.svg"
                        alt="OpenAI logo"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="flex justify-center pt-4">
                      Before we start, let&apos;s configure OpenAI! 🚀
                    </div>
                  </DialogTitle>
                  <div className="">
                    <OpenAIForm className="border-0 shadow-none" user={user} />
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            {children}
          </main>
        </div>
      </div>
      {/* <SiteFooter simpleFooter={true} /> */}
      {/* </> */}
    </Sidebar>
  );
}

// {/* <Sidebar>
// {/* <> */}
// <div className="flex min-h-screen flex-col space-y-6">
//   <header className="sticky top-0 z-40 border-b bg-background">
//     <div className="container flex h-16 items-center justify-between py-4">
//       <MainNavDashboard items={dashboardConfig.mainNav} />
//       <UserAccountNav
//         user={{
//           name: user.name,
//           image: user.image,
//           email: user.email,
//         }}
//       />
//     </div>
//   </header>
//   {/* <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]"> */}
//   <DashboardNav items={dashboardConfig.sidebarNav}>
//     <main className="flex w-full flex-1 flex-col overflow-hidden">
//       <Dialog defaultOpen={!openAIKey}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>
//               <div className="flex justify-center">
//                 <Image
//                   src="/openai-logo.sv"
//                   alt="OpenAI logo"
//                   width={120}
//                   height={120}
//                 />
//               </div>
//               <div className="flex justify-center pt-4">
//                 Before we start, let&apos;s configure OpenAI! 🚀
//               </div>
//             </DialogTitle>
//             <div className="">
//               <OpenAIForm className="border-0 shadow-none" user={user} />
//             </div>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//       {children}
//     </main>
//   </DashboardNav>
//   {/* </div>  */}
// </div>
// <SiteFooter simpleFooter={true} />
// {/* </> */}
// </Sidebar> */}
