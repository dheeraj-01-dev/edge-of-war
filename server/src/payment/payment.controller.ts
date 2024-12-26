import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Razorpay from "razorpay";
import transactionModel from "../transactions/transactions.model.js";
import { razorpayOrders } from "./payment.model.js";

var razorpay = new Razorpay({
    key_id: 'rzp_live_vltjM3WQNYwXDN',
    key_secret: 'tC7eoi54LSFNojKPTq0XIDZ6',
  });

export const createOrder_C = async ( req: Request, res: Response )=>{
    const { amount } = req.body;
    if(!amount || amount<1){
        return res.status(400).json({
            success: false,
            error: "amount too small"
        })
    };
    if(amount>100000){
        return res.status(400).json({
            success: false,
            error: "amount limit exceed"
        })
    };

    var options = {
        amount: +amount*100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11",
        payment_capture: 1
      };


      const session = await mongoose.startSession();
      await session.startTransaction();
      try {
          const response = await razorpay.orders.create(options);

          const data = await razorpayOrders.create({
            razorpayId: response.id,
            response
          });

          res.status(200).json({
            success: true,
            data
          })
        
      } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
      }
};

export const getOrderInfo_C = async (req :Request, res: Response) => {
    const { orderId } = req.params;
    try {
        const order = await razorpay.orders.fetch(orderId);
        if(!order){
            return res.status(500).json({
                success: false,
                error: "Error on razorpay loading"
            })
        };
        res.status(200).json({
            success: true,
            data: order
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
}
export const getPaymentInfo_C = async (req :Request, res: Response) => {
    const { paymentId } = req.params;
    try {
        const payment = await razorpay.payments.fetch(paymentId);
        console.log(payment)
        if(!payment){
            return res.status(500).json({
                success: false,
                error: "Error on razorpay loading"
            })
        };
        res.status(200).json({
            success: true,
            data: payment
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
}