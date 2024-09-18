import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import nodemailer from "nodemailer";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const campaignId = params.id;

  try {
    const campaign = await db.campaign.findUnique({
      where: { id: campaignId },
      include: { User: true },
    });

    if (!campaign) {
      return NextResponse.json(
        { message: "Campaign not found" },
        { status: 404 }
      );
    }

    if (campaign.userId !== session.user.id) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    // Fetch customers for this campaign
    // const customers = await db.customer.findMany({
    //   where: { id: { in: campaign.customers } },
    // });

    // Configure nodemailer (replace with your SMTP settings)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    // Send emails to all customers
    const results = await Promise.allSettled(
      campaign.customers.map(async (customer) => {
        if (campaign.User && customer) {
          await transporter.sendMail({
            from: `"${campaign.User.name}" <${campaign.User.email}>`,
            to: customer,
            subject: campaign.name || "No Subject",
            text: campaign.template || "",
            html: campaign.template || "",
          });
        }
      })
    );

    const successfulSends = results.filter(
      (result) => result.status === "fulfilled"
    ).length;

    return NextResponse.json({
      message: `Emails sent to ${successfulSends} out of ${campaign.customers.length} customers`,
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { message: "Error sending emails" },
      { status: 500 }
    );
  }
}
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { user } = session;
  const campaignId = params.id;

  try {
    const body = await request.json();
    const { customerEmails } = body;

    console.log("customers emaiks", customerEmails);

    if (!Array.isArray(customerEmails)) {
      return NextResponse.json(
        { error: "customerEmails must be an array" },
        { status: 400 }
      );
    }

    const updatedCampaign = await db.campaign.update({
      where: { id: campaignId, userId: user.id },
      data: {
        customers: {
          push: customerEmails,
        },
      },
    });
    console.log("updated campaign", updatedCampaign);

    return NextResponse.json(updatedCampaign, { status: 200 });
  } catch (error) {
    console.error("Error updating campaign:", error);
    return NextResponse.json(
      { error: "Error updating campaign" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { user } = session;
  const campaignId = params.id;

  try {
    const body = await request.json();
    const { template } = body;

    const updatedCampaign = await db.campaign.update({
      where: { id: campaignId, userId: user.id },
      data: { template },
    });

    return new Response(JSON.stringify(updatedCampaign), { status: 200 });
  } catch (error) {
    console.error("Error updating campaign template:", error);
    return new Response(
      JSON.stringify({ error: "Error updating campaign template" }),
      { status: 500 }
    );
  }
}
