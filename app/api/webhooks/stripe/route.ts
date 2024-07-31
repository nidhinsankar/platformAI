import { headers } from "next/headers";
import Stripe from "stripe";

import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { getCurrentUser } from "@/lib/session";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature") as string;
  const currentUser = await getCurrentUser();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.error("Webhook Error:", error.message);
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    console.log("checkout.session.completed");
    if (!session?.subscription) {
      console.error("No subscription found in the session");
      return new Response("No subscription found", { status: 400 });
    }

    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    try {
      await db.user.update({
        where: {
          email: session?.customer_details?.email as string,
        },
        data: {
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: subscription.customer as string,
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      });
    } catch (error) {
      console.error("Error updating user:", error);
      return new Response("Update error session completed", { status: 400 });
    }
  }

  if (event.type === "customer.subscription.deleted") {
    console.log("customer.subscription.deleted");
    try {
      await db.user.updateMany({
        where: {
          stripeSubscriptionId: session.id as string,
        },
        data: {
          stripeSubscriptionId: null,
          stripeCustomerId: null,
          stripePriceId: null,
          stripeCurrentPeriodEnd: null,
          stripeSubscriptionStatus: "canceled",
        },
      });
    } catch (error) {
      console.error("Error updating user for subscription deletion:", error);
      return new Response("Update error subscription deleted", { status: 400 });
    }
  }

  if (event.type === "invoice.payment_succeeded") {
    console.log("invoice.payment_succeeded");
    if (!session?.subscription) {
      console.error("No subscription found in the session");
      return new Response("No subscription found", { status: 400 });
    }

    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    try {
      await db.user.updateMany({
        where: {
          stripeSubscriptionId: subscription.id,
        },
        data: {
          stripePriceId: subscription.items.data[0].price.id,
          stripeCurrentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      });
    } catch (error) {
      console.error("Error updating user for payment success:", error);
      return new Response("Update error payment succeeded", { status: 400 });
    }
  }

  return new Response(null, { status: 200 });
}
