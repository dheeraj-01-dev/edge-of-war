import mongoose, { model, mongo, Schema } from "mongoose";

const transactionSchema = new Schema ({
    status: {
        type: String,
        required: true,
        enum: {
            values: ["credited", "debited"],
            message: "status `{VALUE}` does not support"
        }
    },
    createdTo: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    createdBy: {
        type: String,
        ref: "admin"
    },
    battleId: {
        type: mongoose.Types.ObjectId,
        ref: "battles"  
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


const withdrawalRequestsSchema = new Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const withdrawalRequestsModel = model("withdraw-request", withdrawalRequestsSchema);

export { withdrawalRequestsModel }