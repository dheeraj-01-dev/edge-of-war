import transactionModel from "./transactions.model.js";
import mongoose from "mongoose";
import orderModel from "../orders/order.model.js";
import { userModel } from "../users/user.model.js";
import { razorpayOrders } from "../payment/payment.model.js";
export const createTransaction_C = async (req, res) => {
    const { status, type, value, orderId, razorpayOrderId } = req.body;
    if (!(orderId || razorpayOrderId)) {
        return res.status(400).json({
            success: false,
            error: "order id required",
        });
    }
    const session = await mongoose.startSession();
    await session.startTransaction();
    try {
        let order;
        if (orderId) {
            try {
                order = await orderModel.findOneAndUpdate({ _id: orderId }, {
                    status: "paid",
                }, { session });
                if (!order) {
                    return res.status(404).json({
                        success: false,
                        error: "order not found",
                    });
                }
            }
            catch (error) {
                return res.status(400).json({
                    success: false,
                    error: "invalid order",
                });
            }
        }
        else if (razorpayOrderId) {
            try {
                order = await razorpayOrders.findOne({ orderId: razorpayOrderId });
                if (!order) {
                    return res.status(404).json({
                        success: false,
                        error: "order not found",
                    });
                }
                order.userId = order.createdBy;
            }
            catch (error) {
                return res.status(400).json({
                    success: false,
                    error: "invalid order",
                });
            }
        }
        const incrementalBalance = status === "credited" ? +value : -value;
        const user = await userModel.findOneAndUpdate({ _id: order.userId }, {
            $inc: {
                balance: incrementalBalance,
            },
        }, { session });
        if (!user) {
            throw new Error("user not found");
        }
        await transactionModel.create([
            {
                status,
                orderId,
                type,
                value: +value,
                lastBalance: user.balance,
                currentBalance: +user.balance + incrementalBalance,
            },
        ], { session });
        res.status(200).json({
            success: true,
            data: "transaction completed",
        });
        await session.commitTransaction();
        session.endSession();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error,
        });
        await session.abortTransaction();
        session.endSession();
    }
};
//# sourceMappingURL=transactions.controller.js.map