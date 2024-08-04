import { db } from "@/lib/db";
import crypto from "crypto";
import { addDays } from "date-fns";

export async function POST(req: Request) {
  try {
    // Catch the event type
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    // Check signature
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SIGNATURE!;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf8"
    );
    const signature = Buffer.from(req.headers.get("X-Signature") || "", "utf8");

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature.");
    }

    console.log("bbbbbbb====", eventType);

    // Logic according to event
    if (eventType === "subscription_payment_success") {
      try {
        await db.user.update({
          where: {
            email: body.data.attributes.user_email,
          },
          data: {
            lemonSqueezyCustomerId: body.data.attributes.customer_id.toString(),
            lemonSqueezyPaymentInvoiceUrl:
              body.data.attributes.urls.invoice_url,
            lemonSqueezyPaymentTotal: body.data.attributes.total.toString(),
            lemonSqueezyPaymentRenewal: addDays(
              body.data.attributes.created_at,
              30
            ),
            lemonSqueezyPaymentSuccessId: body.data.id,
            lemonSqueezySubscriptionId:
              body.data.attributes.subscription_id.toString(),
            lemonSqueezySubscriptionStatus: body.data.attributes.status,
          },
        });
      } catch (error) {
        console.log("error in subsrciption payment success", error);
      }
    }

    if (eventType === "subscription_cancelled") {
      try {
        await db.user.update({
          where: {
            email: body.data.attributes.user_email,
          },
          data: {
            lemonSqueezyCustomerId: null,
            lemonSqueezyPaymentInvoiceUrl: null,
            lemonSqueezyPaymentTotal: null,
            lemonSqueezyPaymentRenewal: null,
            lemonSqueezyPaymentSuccessId: null,
            lemonSqueezySubscriptionId: null,
            lemonSqueezySubscriptionStatus: null,
          },
        });
      } catch (error) {
        console.log("error in subscription event", error);
      }
    }

    if (eventType === "subscription_plan_changed") {
      try {
        await db.user.update({
          where: {
            email: body.data.attributes.user_email,
          },
          data: {
            lemonSqueezyCustomerId: body.data.attributes.customer_id.toString(),
            lemonSqueezyPaymentInvoiceUrl:
              body.data.attributes.urls.invoice_url,
            lemonSqueezyPaymentTotal: body.data.attributes.total.toString(),
            lemonSqueezyPaymentRenewal: addDays(
              body.data.attributes.created_at,
              30
            ),
            lemonSqueezyPaymentSuccessId: body.data.id,
            lemonSqueezySubscriptionId:
              body.data.attributes.subscription_id.toString(),
            lemonSqueezySubscriptionStatus: body.data.attributes.status,
          },
        });
      } catch (error) {
        console.log("error in subsrciption plan changes", error);
      }
    }

    return Response.json({ message: "Webhook received" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
