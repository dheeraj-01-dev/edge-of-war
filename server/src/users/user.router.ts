import { Router } from "express";
import { loginUser_V } from "./user.validator.js";
import { loginUser_C } from "./user.controller.js";

const userRouter = Router();

userRouter.post("/auth/login", loginUser_V, loginUser_C)
// userRouter.post("/auth/register" , validateRegistration, registerUser)
// userRouter.post("/auth/get/:user", findUser_V, findUser_C)
// userRouter.get("/auth/get", getPersonalInfo_V, getPersonalInfo_C)
// userRouter.get("/get-friends/all",getAllFriends_V, getAllFriends_C)
// userRouter.get("/get/sample", getSampleUsers_C)
// userRouter.get("/auth/get/:user", getSingleUser)
// userRouter.put("/auth/recover", resetPass)
// userRouter.put("/auth/update/:user", updateUserData)

export { userRouter }