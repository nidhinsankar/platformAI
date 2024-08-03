"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { freePlan, basicPlan, proPlan } from "@/config/subscriptions";
import { siteConfig } from "@/config/site";
import { eventGA } from "@/lib/googleAnalytics";
import { UserSubscriptionPlan } from "@/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import BuyButton from "./BuyButton";

interface BillingFormProps extends React.HTMLAttributes<HTMLFormElement> {
  subscriptionPlan?: UserSubscriptionPlan & {
    isCanceled?: boolean;
  };
}

export async function BillingForm({
  subscriptionPlan,
  className,
  ...props
}: BillingFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const session = await getServerSession(authOptions);

  return (
    // <form className={cn(className)} {...props}>
    <>
      <Card className="border-0 shadow-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-6 mt-8 md:gap-8">
          {[freePlan, basicPlan, proPlan].map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "hover:shadow-sm relative flex flex-col p-2 bg-white rounded-lg  bg-zinc-850 justify-between border",
                plan.name === "PRO" && "border-purple-500"
              )}
            >
              {plan.name === "PRO" && (
                <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Popular
                </div>
              )}
              <Card
                className="shadow-none border-0 p-0 m-0 flex flex-col flex-grow"
                key={plan.name}
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>${plan.price}/month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      - {plan.maxChatbots} Chatbots
                    </li>
                    <li className="flex items-center">
                      - {plan.maxCrawlers} Crawlers
                    </li>
                    <li className="flex items-center">
                      - {plan.maxFiles} Files
                    </li>
                    {plan.basicCustomization && (
                      <li className="flex items-center">- Customizations</li>
                    )}
                    {plan.unlimitedMessages ? (
                      <li className="flex items-center">
                        - Unlimited Messages
                      </li>
                    ) : (
                      <li className="flex items-center">
                        - {plan.maxMessagesPerMonth} Messages / Month
                      </li>
                    )}
                    {plan.userInquiries && (
                      <li className="flex items-center">- User Inquiry</li>
                    )}
                    {plan.brandingCustomization && (
                      <li className="flex items-center">
                        - Remove &quot;Powered by {siteConfig.name}&quot;
                      </li>
                    )}
                    {plan.chatFileAttachments && (
                      <li className="flex items-center">
                        - Client File Attachments
                      </li>
                    )}
                    {plan.premiumSupport && (
                      <li className="flex items-center">- Premium Support</li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto align-bottom mx-auto">
                  {plan.lemonSqueezyVariantId && (
                    <BuyButton productId={plan.lemonSqueezyVariantId} />
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
          {
            <Card key="enterprise" className="flex flex-col flex-grow">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>$X/month</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">- X Chatbots</li>
                  <li className="flex items-center">- X Crawlers</li>
                  <li className="flex items-center">- X Files</li>
                  <li className="flex items-center">- Unlimited Messages</li>
                  <li className="flex items-center">
                    - All Feature from other plans
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href={"https://cal.com/darshancodes"}
                  target="_blank"
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Contact Sales
                </Link>
              </CardFooter>
            </Card>
          }
        </div>
      </Card>
    </>
    // </form>
  );
}

// {[freePlan, basicPlan, proPlan].map((plan, i) => {
//   if (plan.name === proPlan.name) {
//     return (
//       <div
//         key={i}
//         className="hover:shadow-sm relative flex flex-col p-2 bg-white rounded-lg  bg-zinc-850 justify-between border border-purple-500"
//       >
//         <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           Popular
//         </div>
//         <Card className="shadow-none border-0 p-0 m-0" key={i}>
//           <CardHeader>
//             <CardTitle>{plan.name}</CardTitle>
//             <CardDescription>${plan.price}/month</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ul className="mt-4 space-y-2">
//               <li className="flex items-center">
//                 - {plan.maxChatbots} Chatbots
//               </li>
//               <li className="flex items-center">
//                 - {plan.maxCrawlers} Crawlers
//               </li>
//               <li className="flex items-center">
//                 - {plan.maxFiles} Files
//               </li>
//               {plan.basicCustomization && (
//                 <li className="flex items-center">
//                   - Customizations
//                 </li>
//               )}
//               {plan.unlimitedMessages ? (
//                 <li className="flex items-center">
//                   - Unlimited Messages
//                 </li>
//               ) : (
//                 <li className="flex items-center">
//                   - {plan.maxMessagesPerMonth} Messages / Month
//                 </li>
//               )}
//               {plan.userInquiries && (
//                 <li className="flex items-center">- User Inquiry</li>
//               )}
//               {plan.brandingCustomization && (
//                 <li className="flex items-center">
//                   - Remove &quot;Powered by {siteConfig.name}&quot;
//                 </li>
//               )}
//               {plan.chatFileAttachments && (
//                 <li className="flex items-center">
//                   - Client File Attachments
//                 </li>
//               )}
//               {plan.premiumSupport && (
//                 <li className="flex items-center">
//                   - Premium Support
//                 </li>
//               )}
//             </ul>
//           </CardContent>
//           <CardFooter className="mt-auto mx-auto">
//             <a
//               className={cn(buttonVariants({ variant: "default" }))}
//               target="_blank"
//               href={
//                 process.env.NEXT_PUBLIC_STRIPE_PRO_PAYMENT_LINK +
//                 "?prefilled_email="
//                 // session?.user?.email
//               }
//             >
//               Upgrade
//             </a>
//           </CardFooter>
//         </Card>
//       </div>
//     );
//   }
//   return (
//     <div
//       key={i}
//       className="hover:shadow-sm relative flex flex-col p-2 bg-white rounded-lg bg-zinc-850 justify-between border "
//     >
//       <Card
//         className="shadow-none border-0 p-0 m-0 flex flex-col flex-grow"
//         key={i}
//       >
//         <CardHeader>
//           <CardTitle>{plan.name}</CardTitle>
//           <CardDescription>${plan.price}/month</CardDescription>
//         </CardHeader>
//         <CardContent className="flex flex-col flex-grow">
//           <ul className="mt-4 space-y-2">
//             <li className="flex items-center">
//               - {plan.maxChatbots} Chatbots
//             </li>
//             <li className="flex items-center">
//               - {plan.maxCrawlers} Crawlers
//             </li>
//             <li className="flex items-center">
//               - {plan.maxFiles} Files
//             </li>
//             {plan.basicCustomization && (
//               <li className="flex items-center">- Customizations</li>
//             )}
//             {plan.unlimitedMessages ? (
//               <li className="flex items-center">
//                 - Unlimited Messages
//               </li>
//             ) : (
//               <li className="flex items-center">
//                 - {plan.maxMessagesPerMonth} Messages / Month
//               </li>
//             )}
//             {plan.userInquiries && (
//               <li className="flex items-center">- User Inquiry</li>
//             )}
//             {plan.brandingCustomization && (
//               <li className="flex items-center">
//                 - Remove &quot;Powered by {siteConfig.name}&quot;
//               </li>
//             )}
//             {plan.chatFileAttachments && (
//               <li className="flex items-center">
//                 - Client File Attachments
//               </li>
//             )}
//             {plan.premiumSupport && (
//               <li className="flex items-center">- Premium Support</li>
//             )}
//           </ul>
//         </CardContent>
//         <CardFooter className="mt-auto mx-auto">
//           {plan.name === "BASIC" && (
//             <a
//               className={cn(buttonVariants({ variant: "default" }))}
//               target="_blank"
//               href={
//                 process.env.NEXT_PUBLIC_STRIPE_BASIC_PAYMENT_LINK +
//                 "?prefilled_email="
//                 // session?.user?.email
//               }
//             >
//               Upgrade
//             </a>
//           )}
//         </CardFooter>
//       </Card>
//     </div>
//   );
// })}
