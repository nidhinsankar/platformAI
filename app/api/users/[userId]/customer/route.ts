import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { userId: string } }
) => {
  const session = await getServerSession(authOptions);
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
    // Then, fetch the customers associated with this user
    const customers = await db.customer.findMany({
      where: {
        users: {
          some: {
            id: params.userId,
          },
        },
      },
    });
    console.log("customer", customers);

    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching customers" },
      { status: 500 }
    );
  }
};
