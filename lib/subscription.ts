// // @ts-nocheck
// // TODO: Fix this when we turn strict mode on.
// import { UserSubscriptionPlan } from "@/types";
import {
  basicPlan,
  freePlan,
  hobbyPlan,
  legacyBasicPlan,
  proPlan,
} from "@/config/subscriptions";
import { db } from "@/lib/db";
import { UserSubscriptionPlan } from "@/types";
import axios from "axios";
import { lemonSqueezyApiInstance } from "./axios";

export async function getUserSubscriptionPlan(userId: string) {
  const user = await db.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      lemonSqueezyCustomerId: true,
      lemonSqueezyPaymentInvoiceUrl: true,
      lemonSqueezyPaymentRenewal: true,
      lemonSqueezyPaymentSuccessId: true,
      lemonSqueezyPaymentTotal: true,
      lemonSqueezySubscriptionId: true,
      lemonSqueezySubscriptionStatus: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const hasPlan =
    user.lemonSqueezySubscriptionStatus &&
    (user.lemonSqueezyPaymentRenewal as Date)?.getTime() + 86_400_000 >
      Date.now();
  console.log(
    "okkk",
    (user.lemonSqueezyPaymentRenewal as Date)?.getTime() + 86_400_000
  );

  let subscription: any;

  let plan = freePlan;
  if (hasPlan) {
    // console.log("hasplan", hasPlan);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/subscription/${user?.lemonSqueezySubscriptionId}`
      );

      subscription = response.data;
    } catch (error) {
      console.log(error);
    }

    if (subscription?.message.attributes.product_name === "PRO") {
      plan = proPlan;
    } else if (subscription?.message.attributes.product_name === "BASIC") {
      plan = basicPlan;
    }
  }

  return {
    ...plan,
    ...user,
    lemonSqueezySubscriptionRenewsAt: subscription?.attributes
      ?.renews_at as Date,
  };
}

export async function handlePlanChange(
  subscriptionId: string,
  newVariantId: string
) {
  try {
    const response = await fetch("/api/change-plan", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscriptionId, newVariantId }),
    });

    if (!response.ok) {
      throw new Error("Failed to change plan");
    }

    const data = await response.json();
    console.log("Plan changed successfully:", data);
    // Handle successful plan change (e.g., update UI, show success message)
  } catch (error) {
    console.error("Error changing plan:", error);
    // Handle error (e.g., show error message to user)
  }
}
