import { lemonSqueezyApiInstance } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await lemonSqueezyApiInstance.delete(
      `subscriptions/${params.id}`
    );

    return NextResponse.json({ message: response.data });
  } catch (error) {
    return NextResponse.json({ message: "error in fetching subscription" });
  }
}
