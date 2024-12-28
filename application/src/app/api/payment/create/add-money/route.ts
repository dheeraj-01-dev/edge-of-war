
import { NextRequest, NextResponse } from "next/server";

const apikey = "123@edgeofwaresports.com"

export async function POST(req: NextRequest) {

  const authorization = req.headers.get("authorization");
  const { amount } = await req.json();

  if(!authorization || !amount){
    return NextResponse.json({
        success: false,
        error: "unAutnorized"
    }, { status: 404 })
  }
  if(!amount){
    return NextResponse.json({
        success: false,
        error: "invalid amount"
    }, { status: 404 })
  }
  try {
    const orderFetchRes = await fetch("http://127.0.0.1:5000/payments/create/order", {
        method: "POST",
        headers: { apikey, authorization, "Content-Type": "application/json" },
        body: JSON.stringify({ amount })
    });
    const orderRes = await orderFetchRes.json();
    if(orderRes.success){
        const orderId = orderRes.data.orderId;
        if(!orderId){
            return NextResponse.json({
                success: false,
                error: "order not found"
            }, { status: 400 })
        };
        try {
            const paymentOptionFetchRes = await fetch(`http://127.0.0.1:5000/payments/create/paymentoption/${orderId}`, {
                method: "POST",
                headers: { apikey, authorization, "Content-Type": "application/json" }
            });
            const paymentOptionRes = await paymentOptionFetchRes.json();
            if(paymentOptionRes.success){
                return NextResponse.json({
                    success: true,
                    data: paymentOptionRes.data
                }, { status: 200 })
            }else if(paymentOptionRes.error){
                return NextResponse.json({
                    success: false,
                    error: paymentOptionRes.error
                }, { status: 400 })
            }
        } catch (error) {
            return NextResponse.json({
                success: false,
                error
            })
        }
    }
    return NextResponse.json(orderRes)
  } catch (error)  {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
