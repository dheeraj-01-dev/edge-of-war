import z from "zod";
export const createTransaction_V = async (req, res, next) => {
    const { status, type, value } = req.body;
    const { orderId } = req.params;
    const schema = z.object({
        status: z.enum(["credited", "debited"], { message: "Suspended status is not allowed" }),
        type: z.enum(["withdrawal", "top up", "contest fee", "winning prize"], { message: "Suspended types is not allowed" }),
        value: z.number().min(0, { message: "invalid value" }),
        orderId: z.string().refine((value) => /^[0-9a-fA-F]{24}$/.test(value), {
            message: "Invalid orderId",
        })
    });
    const validSchema = schema.safeParse({
        status, type, value, orderId
    });
    if (validSchema.success) {
        next();
    }
    else {
        res.status(400).json({
            success: false,
            error: validSchema.error
        });
    }
};
//# sourceMappingURL=transactions.validator.js.map