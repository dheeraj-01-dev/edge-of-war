import { Request, Response, Router } from "express";
import { getSingleBattle_V, joinBattle_V } from "./battles.validator.js";
import { getAllBattles, getSingleBattle_C } from "./battles.controller.js";

const battleRouter = Router();

battleRouter.get("/get/all", getAllBattles);
// battleRouter.get("/get/upcoming", getRegisteredBattle_C)
// battleRouter.post("/join", joinBattle_V, joinBattle_C)
battleRouter.get("/get/:_id", getSingleBattle_V, getSingleBattle_C)

export default battleRouter;
