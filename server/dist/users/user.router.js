import { Router } from "express";
import { loginUser_V } from "./user.validator.js";
import { loginUser_C } from "./user.controller.js";
const userRouter = Router();
userRouter.post("/auth/login", loginUser_V, loginUser_C);
export { userRouter };
//# sourceMappingURL=user.router.js.map