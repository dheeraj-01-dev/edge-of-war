// app/api/findUser/route.ts
import { NextRequest, NextResponse } from "next/server";
import { findSingleUser } from "@/api/user";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user = searchParams.get("user");

  if (!user) {
    return NextResponse.json({ error: "User parameter is required" }, { status: 400 });
  }

  try {
    const response = await findSingleUser(user);
    return NextResponse.json(response, { status: 200 });
  } catch  {
    return NextResponse.json({ error: "Failed to find user" }, { status: 500 });
  }
}
