import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { userModel } from "./user.model.js";
config();
const jwt_secret = process.env.JWT_SECRET_STR ||
    "MAI_HU_DON_MAI_HU_DON....MUJHE_ROKEGA_KON>?SKLDFJ2934N23MNR09DNMIUAE90UNDAKFIH9OA8U90U9&*_+_89JH898'ASDF";
export const loginUser_C = async (req, res) => {
    const { phone, email, password } = req.body;
    try {
        const credentialToFind = (phone && { phone }) || (email && { email });
        const user = await userModel.findOne(credentialToFind);
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "please sign up first." });
        }
        const { _id, name, ffUid, userName, createAt } = user;
        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            return res
                .status(404)
                .json({ success: false, message: "password doesn't matched!" });
        }
        const token = jwt.sign({ name, ffUid, userName, createAt, id: _id }, jwt_secret);
        res.status(200).json({
            success: true,
            data: token
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
//# sourceMappingURL=user.controller.js.map