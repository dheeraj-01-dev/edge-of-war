import mongoose, { SchemaTypes } from 'mongoose';
import z from 'zod';
import jwt from 'jsonwebtoken';
const jwt_secret = process.env.JWT_SECRET_STR ||
    "MAI_HU_DON_MAI_HU_DON....MUJHE_ROKEGA_KON>?SKLDFJ2934N23MNR09DNMIUAE90UNDAKFIH9OA8U90U9&*_+_89JH898'ASDF";
export const createFriendRequest_V = async (req, res, next) => {
    const { authorization } = req.headers;
    const { to } = req.body;
    if (!authorization || !to) {
        return res.status(404).json({
            success: false,
            error: "unauthorized"
        });
    }
    ;
    const decodedUser = jwt.verify(authorization, jwt_secret);
    if (!decodedUser) {
        return res.status(400).json({
            success: false,
            error: "Unauthorized!",
        });
    }
    ;
    const { userName } = decodedUser;
    if (userName === to) {
        return res.status(404).json({
            success: false,
            error: "illigal operation !"
        });
    }
    const schema = z.object({
        authorization: z.string({ message: "not authorized!" }),
        to: z.string({ message: "invalid user" })
    });
    const validSchma = schema.safeParse({
        authorization, to
    });
    if (validSchma.success) {
        next();
    }
    else {
        res.status(404).json({
            success: false,
            error: "invlaid input !"
        });
    }
};
export const acceptFriendReqest_V = async (req, res, next) => {
    const { from, to } = req.body;
    if (from === to) {
        return res.status(404).json({
            success: false,
            error: "illigal operation !"
        });
    }
    const schema = z.object({
        from: z.instanceof(mongoose.Schema.ObjectId, { message: "invalid user" }),
        to: z.instanceof(mongoose.Schema.ObjectId, { message: "invalid user" })
    });
    const validSchma = schema.safeParse({
        from: new SchemaTypes.ObjectId(from),
        to: new SchemaTypes.ObjectId(to)
    });
    if (validSchma.success) {
        next();
    }
    else {
        res.status(404).json({
            success: false,
            error: "invlaid input !"
        });
    }
};
//# sourceMappingURL=notification.validator.js.map