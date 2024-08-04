import { lemonSqueezyApiInstance } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await lemonSqueezyApiInstance.get(
      `subscriptions/${params.id}`
    );

    return NextResponse.json({ message: response.data.data });
  } catch (error) {
    return NextResponse.json({ message: "error in fetching subscription" });
  }
}
