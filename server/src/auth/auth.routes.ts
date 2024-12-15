import { Router } from "express";
import {
  sendMail,
  sendSms,
  sendVerificationMailForSignUp,
  sendWhatsapp,
  verifyEmailAndOtp,
} from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/send/mail", sendMail);
authRouter.post("/send/verificationMail", sendVerificationMailForSignUp);
authRouter.post("/verifyEmailAndOtp", verifyEmailAndOtp);
authRouter.post("/send/sms", sendSms);
authRouter.post("/send/whatsapp", sendWhatsapp);

export { authRouter };
