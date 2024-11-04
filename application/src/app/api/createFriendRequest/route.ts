// app/api/findUser/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createFriendRequest } from "@/api/user";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userName = searchParams.get("userName");
  const token = searchParams.get("token");

  if(userName==="undefined" || token==="undefined"){
    return NextResponse.json({error: "unauthorized"}, { status: 400 })
  }

  if (!userName || !token) {
    return NextResponse.json({ error: "User and Token parameter is required" }, { status: 400 });
  }

  try {
    const response = await createFriendRequest({userName, token});
    // console.log(response)
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Failed to find user" }, { status: 500 });
  }
}
