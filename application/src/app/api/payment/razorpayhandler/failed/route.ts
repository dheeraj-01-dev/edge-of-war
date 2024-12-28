
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const authorization = req.headers.get("authorization")
  const data = await req.json();

  if(!authorization){
    return NextResponse.json({
        success: false,
        error: "unAuthorized"
    }, { status: 404 })
  }
  try {
    const fetchRes = await fetch("http://127.0.0.1:5000/payments/razorpay/handler", {
        method: "POST",
        headers: {
            apikey: "123@edgeofwaresports.com",
            authorization,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: "failed",
            response: data.response
        })
    });
    const fetchData = await fetchRes.json();


    if(fetchData.success){
        return NextResponse.json({
            success: true,
            data: fetchData.data
        }, { status: 200 });
    }
    if(fetchData.error){
        return NextResponse.json({
            success: false,
            error: fetchData.error
        }, { status: 200 });
    }
    return NextResponse.json({
        success: false,
        error: "Something Went wrong"
    }, { status: 400 })
  } catch (error)  {
    // @ts-expect-error error type any
    return NextResponse.json({ success: false, error: error.message?error.message:error }, { status: 500 });
  }
}
