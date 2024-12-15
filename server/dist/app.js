import { config } from 'dotenv';
import express from 'express';
config();
import cors from 'cors';
import battleRouter from './battles/battles.router.js';
import { userRouter } from './users/user.routes.js';
import notificatonRouter from './notification/notification.routes.js';
import validateapikey from './middlewares/apikeyvalidator.js';
import adminRouter from './admin/admin.routes.js';
import { authRouter } from './auth/auth.routes.js';
const app = express();
app.use(cors());
app.use(validateapikey);
app.use(express.json({
    limit: 5000000
}), (error, req, res, next) => {
    if (error) {
        return res.status(400).json({
            success: false,
            error
        });
    }
    next();
});
app.use("/battle", battleRouter);
app.use("/user", userRouter);
app.use("/notification", notificatonRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: "route not found!"
    });
});
app.use((err, req, res, next) => {
    if (err) {
        return res.status(500).json({
            success: false,
            error: "internal server error!"
        });
    }
});
export default app;
//# sourceMappingURL=app.js.map