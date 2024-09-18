import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { userId: string } }
) => {
  const session = await getServerSession(authOptions);

  console.log("params===", params);
  if (!session) {
    return new Response("Unauthorized", { status: 403 });
  }

  try {
    const user = await db.user.findUnique({
      where: { id: params.userId },
      // include: { customers: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const campaigns = await db.campaign.findMany({
      where: { userId: user.id },
    });

    console.log("campaigns", campaigns);

    return NextResponse.json(campaigns);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Error fetching campaigns" },
      { status: 500 }
    );
  }
};
