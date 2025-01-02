import z from 'zod';
const validateRegistration = (req, res, next) => {
    const schema = z.object({
        name: z.string({ message: "name required!" }).min(3, { message: "name must be min 3 character long." }).max(50, { message: "name must be less then 50 character." }),
        userName: z.string({ message: "userName required!" }).min(3).max(50),
        email: z.string({ message: "email required!" }).email({ message: "invaild email" }),
        ffUid: z.number({ message: "Invalid ffUid!" }),
        otp: z.number({ message: "Invalid Otp!" }),
        ffUserName: z.string({ message: "Invalid ffUserName!" }),
        password: z.string({ message: "password required!" }).min(4, { message: "password must be greater than 4 character" }).max(50, { message: "password must be smaller then 50 digits" }),
        confirmPassword: z.string({ message: "password required!" }).min(4, { message: "password must be greater than 4 character" }).max(50, { message: "password must be smaller then 50 digits" })
    });
    const validReq = schema.safeParse(req.body);
    if (!validReq.error) {
        return next();
    }
    ;
    res.status(400).json({
        success: false,
        error: validReq.error?.issues[0].message
    });
};
export const loginUser_V = (req, res, next) => {
    const { phone, email } = req.body;
    if (!email && !phone) {
        return res.status(400).json({
            sucess: false,
            error: "phone or email required!"
        });
    }
    ;
    const schema = z.object({
        phone: z.number().min(999999999, { message: "Invalid phone !" }).max(9999999999, { message: "Invalid phone !" }).optional(),
        email: z.string().email({ message: "Invalid email" }).optional(),
        password: z.string({ message: "password required!" })
    });
    const validReq = schema.safeParse(req.body);
    if (!validReq.error) {
        return next();
    }
    ;
    res.status(400).json({
        success: false,
        error: validReq.error?.issues[0].message
    });
};
export const getPersonalInfo_V = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(400).json({
            success: false,
            error: "not authorized !"
        });
    }
    ;
    const schema = z.string({ message: "invalid User !" });
    try {
        const validSchema = schema.safeParse(authorization);
        if (validSchema.success) {
            return next();
        }
        ;
        res.status(400).json({
            success: false,
            error: validSchema.error
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            error: "invalid user !"
        });
    }
};
export const findUser_V = async (req, res, next) => {
    next();
};
export const getAllFriends_V = async (req, res, next) => {
    const { authorization } = req.headers;
    const schema = z.string({ message: "not authorized" });
    try {
        const verified = schema.safeParse(authorization);
        if (verified.success) {
            return next();
        }
        else {
            return res.status(404).json({
                success: false,
                error: "unauthorized"
            });
        }
    }
    catch (err) {
        res.status(404).json({
            success: false,
            error: "not authorized !"
        });
    }
};
export { validateRegistration };
//# sourceMappingURL=user.validator.js.map