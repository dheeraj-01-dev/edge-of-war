// app/api/findUser/route.ts
import { NextRequest, NextResponse } from "next/server";
import { acceptFriendRequest } from "@/api/notification";

export async function POST(req: NextRequest) {
  const { from } = await req.json();
  const token = await req.headers.get("authorization");

  if(from==="undefined" || token==="undefined"){
    return NextResponse.json({error: "unauthorized"}, { status: 400 })
  }

  if (!from || !token) {
    return NextResponse.json({ error: "User and Token parameter is required" }, { status: 400 });
  }

  try {
    const response = await acceptFriendRequest({from, token});
    // console.log(response)
    return NextResponse.json(response, { status: 200 });
  } catch {
    // console.log(error)
    return NextResponse.json({ error: "Failed to find user" }, { status: 500 });
  }
}
