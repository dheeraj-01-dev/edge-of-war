import mongoose, { model, Schema } from "mongoose";
const transactionSchema = new Schema({
    status: {
        type: String,
        required: true,
        enum: {
            values: ["credited", "debited"],
            message: "status `{VALUE}` does not support"
        }
    },
    orderId: {
        type: mongoose.Types.ObjectId,
        ref: "orders"
    },
    razorpayPaymentId: {
        type: mongoose.Types.ObjectId,
        ref: "razorpayOrders"
    },
    type: {
        type: String,
        required: true,
        enum: {
            values: ["withdrawal", "top-up", "contest fee", "winning prize"],
            message: "type `{VALUE}` does not support"
        }
    },
    value: {
        type: Number,
        required: true
    },
    lastBalance: {
        type: Number,
        required: true
    },
    currentBalance: {
        type: Number,
        required: true,
    }
});
const transactionModel = model("transactions", transactionSchema);
export default transactionModel;
//# sourceMappingURL=transactions.model.js.map