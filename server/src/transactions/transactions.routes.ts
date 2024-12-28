import { Router } from "express";
import { createTransaction_C } from "./transactions.controller.js";
import { createTransaction_V } from "./transactions.validator.js";

const transactionRouter = Router();

transactionRouter.post("/create", createTransaction_V, createTransaction_C)

export { transactionRouter };