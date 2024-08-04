import { lemonSqueezyApiInstance } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function UpdateUserSubscriptionPlan(req: Request) {
  try {
    const body = await req.json();
    const { subscriptionId, newVariantId } = body;

    if (!subscriptionId || !newVariantId) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const response = await lemonSqueezyApiInstance.patch(
      `subscriptions/${subscriptionId}`,
      {
        data: {
          type: "subscriptions",
          id: subscriptionId,
          attributes: {
            variant_id: newVariantId,
          },
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error changing subscription plan:", error);
    return NextResponse.json(
      { error: "Failed to change subscription plan" },
      { status: 500 }
    );
  }
}
