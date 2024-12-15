import { Router } from "express";
import { findUser_V, getAllFriends_V, getPersonalInfo_V, loginUser_V, validateRegistration } from "./user.validator.js";
import { findUser_C, getAllFriends_C, getPersonalInfo_C, getSampleUsers_C, loginUser_C, registerUser } from "./user.controller.js";
const userRouter = Router();
userRouter.post("/auth/login", loginUser_V, loginUser_C);
userRouter.post("/auth/register", validateRegistration, registerUser);
userRouter.get("/get/:user", findUser_V, findUser_C);
userRouter.get("/auth/get", getPersonalInfo_V, getPersonalInfo_C);
userRouter.get("/get-friends/all", getAllFriends_V, getAllFriends_C);
userRouter.get("/get/random/sample", getSampleUsers_C);
export { userRouter };
//# sourceMappingURL=user.routes.js.map