import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Zod schema to validate the request body
const customerSchema = z.object({
  email: z.string().email().optional(),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { user } = session;
    const body = await req.json();

    // Validate request body with Zod
    const data = customerSchema.safeParse(body);
    if (!data.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { email } = data.data;

    // Check if the user exists
    const userExists = await db.user.findUnique({
      where: { id: user.id },
    });

    if (!userExists) {
      return NextResponse.json(
        { error: "User ID does not exist" },
        { status: 400 }
      );
    }

    // Create the customer and associate it with the user
    const customer = await db.customer.create({
      data: {
        email,
        users: {
          connect: { id: user.id }, // Connect the customer with the existing user
        },
      },
      include: {
        users: true,
      },
    });

    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    console.error("Error creating customer:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
