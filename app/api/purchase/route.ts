import { authOptions } from "@/lib/auth";
import { lemonSqueezyApiInstance } from "@/lib/axios";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);
    const reqData = await req.json();
    if (!reqData.productId) {
      return Response.json(
        { message: "productId is required" },
        { status: 400 }
      );
    }
    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            email: session?.user.email,
            name: session?.user.name,
          },
          product_options: {
            redirect_url: "http://localhost:3000/dashboard/billing",
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID!,
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    });

    return Response.json({ data: response.data.data?.attributes?.url });
  } catch (error) {
    console.log("error in post ", error);
    return Response.json({ message: "An error occured", status: 500, error });
  }
}
