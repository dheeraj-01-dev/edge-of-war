import mongoose, { model, Schema } from "mongoose";

const orderSchema = new Schema({
    battle: {
        type: mongoose.Types.ObjectId,
        ref: "battles",
        required: true
    },
    createBy: {
        type: String,
        ref: "users",
        required: true
    },
    members: {
        type: Array<string>,
        required: true,
        ref: "users"
    }
}, { timestamps: true });

const orderModel = model("orders", orderSchema)

export default orderModel;