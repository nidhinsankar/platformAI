import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 403 });
  }

  try {
    const campaigns = await db.campaign.findMany();
    return NextResponse.json(campaigns);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching campaigns" },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { user } = session;
  try {
    const body = await request.json();
    const newCampaign = await db.campaign.create({
      data: { name: body.name, template: body.template, userId: user.id },
    });
    return NextResponse.json(newCampaign, { status: 201 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Error creating campaign" },
      { status: 500 }
    );
  }
};
