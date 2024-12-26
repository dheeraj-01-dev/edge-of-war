import mongoose, { model } from "mongoose";
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
export const razorpayOrders = model("razorpayOrders", razorpayOrderSchema);
//# sourceMappingURL=payment.model.js.map