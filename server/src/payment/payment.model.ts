import mongoose, { model } from "mongoose";

interface paymentOrderScheam {
    "id": "order_EKwxwAgItmmXdp",
    "entity": "order",
    "amount": 50000,
    "amount_paid": 0,
    "amount_due": 50000,
    "currency": "INR",
    "receipt": "receipt#1",
    "offer_id": null,
    "status": "created",
    "attempts": 0,
    "notes": [],
    "created_at": 1582628071
  }

const razorpayOrderSchema = new mongoose.Schema({
    razorpayId: {
        type: String,
        required: true,
        unique: true
    },
    response: {
        type: mongoose.Schema.Types.Mixed
    },
});

export const razorpayOrders = model("razorpayOrders", razorpayOrderSchema)