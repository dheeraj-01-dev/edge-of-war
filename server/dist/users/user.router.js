import { Router } from "express";
import { getAllFriends_V, loginUser_V } from "./user.validator.js";
import { getAllFriends_C, loginUser_C } from "./user.controller.js";
const userRouter = Router();
userRouter.post("/auth/login", loginUser_V, loginUser_C);
userRouter.get("/get-friends/all", getAllFriends_V, getAllFriends_C);
export { userRouter };
//# sourceMappingURL=user.router.js.map