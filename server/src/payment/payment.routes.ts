import { Router } from "express";
import { createOrder_C, getOrderInfo_C, getPaymentInfo_C } from "./payment.controller.js";

const paymentRouter = Router()

paymentRouter.post("/create/order", createOrder_C)
paymentRouter.get("/order/status/:orderId", getOrderInfo_C)
paymentRouter.get("/pay/status/:paymentId", getPaymentInfo_C)

export default paymentRouter;