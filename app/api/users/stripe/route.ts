import { getServerSession } from "next-auth/next";
import { z } from "zod";
import Stripe from "stripe";

import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { absoluteUrl } from "@/lib/utils";
import { stripeCheckoutSchema } from "@/lib/validations/stripeCheckout";
import { db } from "@/lib/db";

const billingUrl = absoluteUrl("dashboard/billing");

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !session?.user.email) {
      return new Response(null, { status: 403 });
    }

    const body = await req.json();
    const payload = stripeCheckoutSchema.parse(body);

    if (!payload.priceId) {
      return new Response(JSON.stringify({ error: "Price ID is required" }), {
        status: 400,
      });
    }

    const user = await db.user.findUnique({
      where: {
        id: session.user.id,
      },
    });

    if (!user) {
      return new Response(null, { status: 403 });
    }

    const subscriptionPlan = await getUserSubscriptionPlan(session.user.id);

    // Create a portal session to manage subscription.
    if (subscriptionPlan.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: subscriptionPlan.stripeCustomerId,
        return_url: billingUrl,
      });

      return new Response(JSON.stringify({ url: stripeSession.url }));
    }

    // Common Stripe session configuration
    const stripeSessionConfig: Stripe.Checkout.SessionCreateParams = {
      success_url: billingUrl,
      cancel_url: billingUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: session.user.email,
      line_items: [
        {
          price: payload.priceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId: session.user.id,
      },
    };

    // Create a checkout session based on subscription status
    if (user.stripeSubscriptionStatus === "canceled") {
      console.log("Create checkout session for canceled subscription");
      const stripeSession = await stripe.checkout.sessions.create(
        stripeSessionConfig
      );
      return new Response(JSON.stringify({ url: stripeSession.url }));
    } else {
      console.log("Create checkout session for new subscription");
      const stripeSession = await stripe.checkout.sessions.create({
        ...stripeSessionConfig,
        subscription_data: {
          trial_period_days: 7,
        },
      });
      return new Response(JSON.stringify({ url: stripeSession.url }));
    }
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500 }
    );
  }
}
